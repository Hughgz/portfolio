import React, { useState, useEffect } from 'react';
import { content } from "../Content";

const Skills = () => {
  const { skills } = content;
  
  const skillCategories = {
    Frontend: skills.skills_content.filter(skill => skill.classification === "Frontend"),
    Backend: skills.skills_content.filter(skill => skill.classification === "Backend"),
    "Version Control": skills.skills_content.filter(skill => skill.classification === "Version Control"),
    IDE: skills.skills_content.filter(skill => skill.classification === "IDE"),
    Other: skills.skills_content.filter(skill => skill.classification === "Other")
  };

  const renderSkillCategory = (skillList, title) => {
    const [currentPage, setCurrentPage] = useState(0);
    const skillsPerPage = 4;
    const totalPages = Math.ceil(skillList.length / skillsPerPage);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
      }, 3000);  // Change page every 3 seconds

      return () => clearInterval(interval);
    }, [totalPages]);

    const startIndex = currentPage * skillsPerPage;
    const displayedSkills = skillList.slice(startIndex, startIndex + skillsPerPage);

    return (
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-gray-600 mb-6" data-aos="fade-down">
          {title}
        </h2>
        <div className="relative flex items-center">
          <div className="flex space-x-4 w-full overflow-hidden">
            {displayedSkills.map((skill, i) => (
              <div 
                key={i} 
                className="flex-shrink-0 w-full max-w-xs bg-white flex flex-col items-center gap-4 p-5 rounded-md border-2 border-slate-200 transition-all duration-500 hover:scale-105"
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="w-16 h-16 object-contain"
                />
                <h6 className="font-semibold text-center">{skill.name}</h6>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalPages }).map((_, index) => (
            <span 
              key={index} 
              className={`h-2 w-2 rounded-full ${
                index === currentPage ? 'bg-blue-500 w-4' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      <div className="md:container px-5 py-14">
        <h2 className="title text-left mb-10" data-aos="fade-down">
          Technical Skills
        </h2>
        {Object.entries(skillCategories)
          .filter(([_, skills]) => skills.length > 0)
          .map(([category, skills]) => 
            renderSkillCategory(skills, category)
          )
        }
      </div>
    </section>
  );
};

export default Skills;
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Skills = () => {
  const { skills } = content;
  
  const skillCategories = {
    Frontend: skills.skills_content.filter(skill => skill.classification === "Frontend"),
    Backend: skills.skills_content.filter(skill => skill.classification === "Backend"),
    "Version Control": skills.skills_content.filter(skill => skill.classification === "Version Control"),
    IDE: skills.skills_content.filter(skill => skill.classification === "IDE"),
    Other: skills.skills_content.filter(skill => skill.classification === "Other")
  };

  const renderSkillSwiper = (skillList, title) => (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-gray-600 mb-6" data-aos="fade-down">{title}</h2>
      <Swiper
        pagination={{
          clickable: true,
        }}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Pagination]}
        className="pb-16"
      >
        {skillList.map((skill, i) => (
          <SwiperSlide
            key={i}
            className="flex justify-center items-center"
          >
            <div className="bg-white w-full max-w-sm flex flex-col items-center gap-4 p-5 rounded-md border-2 border-slate-200">
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
              <h6 className="font-semibold text-center">{skill.name}</h6>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );

  return (
    <section className="min-h-fit bg-bg_light_primary" id="skills">
      <div className="md:container px-5 py-14">
        <h2 className="title text-left mb-10" data-aos="fade-down">
          Technical Skills
        </h2>
        {Object.entries(skillCategories)
          .filter(([_, skills]) => skills.length > 0)
          .map(([category, skills]) => 
            renderSkillSwiper(skills, category)
          )
        }
      </div>
    </section>
  );
};

export default Skills;
import { content } from "../Content";

const Certificate = () => {
  const { certificate } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14">
        <h2 className="title" data-aos="fade-down">
          {certificate.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {certificate.subtitle}
        </h4>
        <br />
        <div className="flex gap-5 justify-center flex-wrap group">
          {certificate.certificate_content.map((content, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className="w-[250px] max-w-[300px] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center 
              bg-bg_light_primary p-6 flex-grow-0 group-hover:blur-sm hover:!blur-none flex flex-col"
            >
              <img 
                src={content.logo} 
                alt="..." 
                className="mx-auto max-h-[100px] object-contain mb-4" 
              />
              <h6 className="my-3 font-semibold">{content.title}</h6>
              <p className="leading-7 text-sm flex-grow">{content.para}</p>
              
              <button 
                className="btn bg-dark_primary text-white"
              >
                View
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Certificate
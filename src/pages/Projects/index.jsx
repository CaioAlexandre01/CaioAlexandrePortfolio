import p1 from "../../assets/noteCel.png";

const Projects = () => {
  const card = [
    {
      img: p1,
      name: "Rahul Bhatia",
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, ipsa autem? Minima pariatur, labore maxime fuga obcaecati eum beatae? Rerum id, at ipsam illum itaque facilis quasi ab ut nisi.",
      btnDeploy: "Ver Projeto",
      btnGitHub: "GitHub",
      html: "HTML",
      css: "CSS",
      tailwind: "Tailwind CSS",
      javascript: "Javascript",
      react: "React",
    },
  ];

  return (
    <section id="projects" className="bg-[#f4f4f4] min-h-screen w-full p-4 flex flex-col items-center transition duration-1000 ease-in-out dark:bg-zinc-900">
      <h1 className="border-b-4 py-2 border-cyan-500 text-zinc-900 text-4xl font-semibold pt-20 dark:text-[#f4f4f4]">PROJETOS</h1>
      <p className="text-[#555] text-sm lg:text-md lg:w-1/4 lg:mt-10 text-center mt-5 leading-relaxed dark:text-[#f4f4f4]">Aqui estão alguns dos projetos que desenvolvi, tanto pessoais quanto para clientes, representando minha dedicação e experiência no campo do desenvolvimento</p>
      {card.map((cards) => (
        <div className="flex flex-col justify-center items-center shadow-xl mt-10 p-3 py-8 rounded-xl lg:w-auto lg:h-auto lg:flex-row lg:justify-center lg:gap-8 lg:items-center lg:dark:bg-zinc-900" key={cards.name}>
          <div className="lg:flex lg:justify-center lg:w-1/2 lg:h-full">
            <img src={cards.img} alt="language" className="w-[20rem] lg:w-full" />
          </div>
          <div className="flex flex-col gap-8 items-center lg:gap-8 lg:w-1/3 lg:h-auto">
            <div className="w-full">
              <p className="text-center text-2xl mt-6 font-semibold tracking-widest dark:text-[#f4f4f4] lg:text-start">{cards.name}</p>
            </div>
            <div className="w-full">
              <p className=" text-[#555] text-sm text-center leading-relaxed lg:leading-8 lg:text-start dark:text-[#f4f4f4] lg:text-[1rem]">{cards.p}</p>
            </div>
            <div className="flex justify-center lg:justify-start w-full gap-2 flex-wrap lg:w-full">
              <span className="flex justify-center items-center bg-zinc-200 px-4 p-1 font-medium text-zinc-900 rounded-md shadow-md text-center lg:px-4">{cards.html}</span>
              <span className="flex justify-center items-center bg-zinc-200 px-4 p-1 font-medium text-zinc-900 rounded-md shadow-md text-center lg:px-4 ">{cards.css}</span>
              <span className="flex justify-center items-center bg-zinc-200 px-4 p-1 font-medium text-zinc-900 rounded-md shadow-md text-center lg:px-4 ">{cards.tailwind}</span>
              <span className="flex justify-center items-center bg-zinc-200 px-4 p-1 font-medium text-zinc-900 rounded-md shadow-md text-center lg:px-4 ">{cards.javascript}</span>
              <span className="flex justify-center items-center bg-zinc-200 px-4 p-1 font-medium text-zinc-900 rounded-md shadow-md text-center lg:px-4 ">{cards.react}</span>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:w-full">
              <div className="w-full flex justify-center lg:justify-start">
                <button className="flex justify-center items-center bg-gradient-to-r from-cyan-500 to-cyan-600 duration-500 hover:-translate-y-[2px] rounded-md w-48 h-12 lg:w-48 lg:h-12 lg:text-lg lg:flex lg:flex-start text-[#f4f4f4]">{cards.btnDeploy}</button>
              </div>
              <div className="w-full flex justify-center lg:justify-start">
                <button className="flex justify-center items-center bg-black duration-500 hover:-translate-y-[2px] rounded-md w-48 h-12 lg:text-center lg:w-48 lg:h-12 lg:text-lg lg:flex lg:flex-start text-[#f4f4f4]">{cards.btnGitHub}</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;

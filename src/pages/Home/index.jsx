import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import "../../App.css";

const MainSection = () => {
  const socials = [
    { id: 1, icon: <FaGithub className="text-3xl" />, link: "" },
    { id: 2, icon: <FaWhatsapp className="text-3xl" />, link: "" },
    { id: 3, icon: <FaLinkedin className="text-3xl" />, link: "" },
  ];

  return (
    <section className="bg-[#f4f4f4] min-h-screen w-full flex justify-center items-center transition duration-1000 ease-in-out dark:bg-zinc-900">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#37353E] text-center font-extrabold text-5xl lg:text-6xl xl:text-6xl dark:text-[#f4f4f4] flex-wrap spacing">CAIO ALEXANDRE</h1>
        <p className="text-cyan-500 text-4xl lg:text-4xl xl:text-5xl font-extrabold mb-3 tracking-widest mt-2">Dev Front-End</p>
        <p className="text-[#37353E] mb-3 xl:text-xl dark:text-[#f4f4f4]">Transforme ideias em realidade</p>
        <div className="flex justify-center items-center text-lg gap-7 mb-10">
          {socials.map((item) => (
            <a key={item.id} href={item.link}>
              <div className="hover:bg-cyan-500 hover:text-white rounded-full duration-300 p-2.5 flex justify-center items-center dark:text-white">{item.icon}</div>
            </a>
          ))}
        </div>
        <button className="bg-gradient-to-r from-cyan-500 to-cyan-600 mb-10 duration-500 hover:-translate-y-[2px] rounded-md px-20 py-4 xl:px-16 xl:py-4 xl:text-lg font-normal text-[#f4f4f4] dark:text-[#f4f4f4]">Download CV</button>
        <IoIosArrowDown className="text-4xl cursor-pointer animate-animate-arrow mt-20 dark:text-[#f4f4f4]" />
      </div>
    </section>
  );
};

export default MainSection;

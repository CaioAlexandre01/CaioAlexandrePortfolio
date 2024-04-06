import SwitchDarkMode from "./SwitchDarkMode";
import brazillanguage from "../../public/brazil.png";
const Header = () => {
  return (
    <>
      <header className="flex justify-end bg-[#f4f4f4] py-5 px-5 items-center transition duration-1000  dark:bg-zinc-900">
        <p className="flex items-center">
          <SwitchDarkMode />
          <span className="font-sm text-[#37353E] text-3xl mx-4 dark:text-white dark: font-extralight">|</span>
          <p className="font-semibold text-[#37353E] text-medium ">
            <img src={brazillanguage} alt="language" className="w-7" />
          </p>
        </p>
      </header>
    </>
  );
};

export default Header;

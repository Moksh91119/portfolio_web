import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-4 right-4 md:top-12 md:right-12 p-3 bg-indigo-600 w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "rotate-45  translate-y-0.5" : ""
            }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${menuOpened ? "hidden" : ""
            }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${menuOpened ? "-rotate-45" : ""
            }`}
        />
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-white transition-all overflow-hidden flex flex-col
      ${menuOpened ? "w-full md:w-80" : "w-0"}`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuButton label="Home" onClick={() => onSectionChange(0)} />
          <MenuButton label="About" onClick={() => onSectionChange(1)} />
          <MenuButton label="Projects" onClick={() => onSectionChange(2)} />
          <MenuButton label="Contact" onClick={() => onSectionChange(3)} />
        </div>
        <div className="flex flex-row items-center justify-center mb-3 text-2xl">
          <a href="https://github.com/Moksh91119" className="mx-1 bg-black p-2 rounded-full hover:bg-indigo-600 transition-colors ease-linear">
            <button className="text-white"><FaGithub /></button>
          </a>
          <a href="https://www.linkedin.com/in/moksh-jain-51271b194/" className="mx-1 bg-black p-2 rounded-full hover:bg-indigo-600 transition-colors ease-linear">
            <button className="text-white"><FaLinkedin /></button>
          </a>
          <a href="https://twitter.com/mokshja74263501" className="mx-1 bg-black p-2 rounded-full hover:bg-indigo-600 transition-colors ease-linear">
            <button className="text-white"><FaXTwitter /></button>
          </a>
          <a href="https://www.instagram.com/adios3615/" className="mx-1 bg-black p-2 rounded-full hover:bg-indigo-600 transition-colors ease-linear">
            <button className="text-white"><FaInstagramSquare /></button>
          </a>
        </div>
      </div>
    </>
  );
};

const MenuButton = (props) => {
  const { label, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="text-2xl font-bold cursor-none hover:text-indigo-600 transition-colors"
    >
      {label}
    </button>
  );
};

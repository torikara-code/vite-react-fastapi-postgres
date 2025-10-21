import tailwindLogo from "../../assets/TailwindCSS.svg";

const TailwindCssLogo: React.FC = () => {
  return (
    <a href="https://tailwindcss.com/" target="_blank">
      <img
        src={tailwindLogo}
        className="h-24 p-6 will-change-[filter] transition-[filter] duration-300 filter hover:drop-shadow-[0_0_2em_#646cffaa]"
        alt="React logo"
      />
    </a>
  );
};

export default TailwindCssLogo;

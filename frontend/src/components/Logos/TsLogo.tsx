import tsLogo from "../../assets/typescript.svg";

const TsLogo: React.FC = () => {
  return (
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img
        src={tsLogo}
        className="h-24 p-6 will-change-[filter] transition-[filter] duration-300 filter hover:drop-shadow-[0_0_2em_#646cffaa]"
        alt="React logo"
      />
    </a>
  );
};

export default TsLogo;

import reactLogo from "../../assets/react.svg";

const ReactLogo: React.FC = () => {
  return (
    <a href="https://react.dev" target="_blank">
      <img
        src={reactLogo}
        className="h-24 p-6 will-change-[filter] transition-[filter] animate-logo-spin duration-300 filter hover:drop-shadow-[0_0_2em_#646cffaa]"
        alt="React logo"
      />
    </a>
  );
};

export default ReactLogo;

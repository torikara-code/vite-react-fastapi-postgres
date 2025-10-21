import viteLogo from "/vite.svg";

const ViteLogo: React.FC = () => {
  return (
    <a href="https://vite.dev" target="_blank" className="">
      <img
        src={viteLogo}
        className="h-24 p-6 will-change-[filter] transition-[filter] duration-300 filter hover:drop-shadow-[0_0_2em_#646cffaa]"
        alt="Vite logo"
      />
    </a>
  );
};

export default ViteLogo;

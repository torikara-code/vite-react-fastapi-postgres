import ReactButton from "./components/Button/ReactButton";
import ReactLogo from "./components/Logos/ReactLogo";
import TailwindCssLogo from "./components/Logos/TailwindCssLogo";
import TsLogo from "./components/Logos/TsLogo";
import ViteLogo from "./components/Logos/ViteLogo";
import ImagesCredit from "./components/Credit/ImagesCredit";
import "./index.css";

function App() {
  return (
    <div className="container mx-auto h-auto p-8 text-center max-w-screen-lg">
      <div className="mx-auto flex justify-center">
        <ViteLogo />
        <ReactLogo />
        <TsLogo />
        <TailwindCssLogo />
      </div>
      <h1 className="pt-4 pb-6  mx-auto text-4xl">
        Vite + React + Typescript + Tailwind CSS
      </h1>
      <div className="padding-p-8">
        <ReactButton />
        <p className="pt-4 pb-1">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500 pt-1 pb-1">
        Click on the Vite and React logos to learn more
      </p>
      <ImagesCredit />
    </div>
  );
}

export default App;

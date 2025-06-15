import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function App() {
  gsap.registerPlugin(useGSAP);
  const icon = useRef(null);

  useGSAP(() => {
    gsap.to(".logo", {
      rotation: "+=360",
      duration: 2,
      repeat: 3,

      yoyo: true,
    });
  });

  return (
    <>
      <div className="">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
      </div>
    </>
  );
}

export default App;

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function App() {
  gsap.registerPlugin(useGSAP);
  const icon = useRef(null);
  let tw: gsap.core.Tween | undefined;
  const play = () => {
    if (tw) {
      tw.play(0);
      tw.restart();
    }
  };

  const stop = () => {
    if (tw) {
      tw.pause();
    }
  };

  useGSAP(
    () => {
      tw = gsap.to(".logo", {
        rotation: "+=360",
        duration: 2,
      });
    },
    { scope: icon }
  );

  return (
    <>
      <div className="">
        <a ref={icon} href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo" alt="React logo" />
        </a>
        <button onClick={play}>Play Animation</button>
        <button onClick={stop}>Stop Animation</button>
      </div>
    </>
  );
}

export default App;

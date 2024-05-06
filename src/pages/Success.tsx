import NavBar from "../components/NavBar";
import { TickIcon } from "../constants/Icons";
import HeadContent from "../components/HeadContent";
import { useEffect, useState } from "react";

function Success() {
  const [timer, setTimer] = useState(5);
  useEffect(() => {
    const timeout = setTimeout(() => (window.location.href = "/"), 5500);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0) setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="relative border h-dvh">
      <NavBar />
      <div className="absolute left-1/2 top-48 -translate-x-1/2">
        <div className="grid justify-center">
          <TickIcon />
        </div>
        <HeadContent
          subtitle="Success Submitted"
          title1="Congratulations"
          title2=""
        />
        <div className="text-[#727272] text-lg text-center mt-10">
          Your request has been successfully submitted to us. We <br />
          will validate your information and reach out to you <br />
          shortly with updates
        </div>
      </div>
      <br />
      <span className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
        Redirecting you to Homepage in <b>{timer} Seconds</b>
      </span>
    </div>
  );
}

export default Success;

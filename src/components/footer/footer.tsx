import Logo from "../Logo/Logo";
import logo from "../../../public/logo.png";
import { RiNextjsFill } from "react-icons/ri";
import { SiVercel } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer
        data-testid="footerContainer"
        className="my-10 flex justify-center items-center flex-col"
      >
        <div className="flex justify-center items-center flex-col">
          <Logo src={logo} data-testid="logo" />
          <p
            data-testid="trademark"
            className="text-xs text-center text-gray-500 py-4"
          >
            Bolaji Bolajoko © 2024
          </p>
        </div>

        <div
          data-testid="toolsContainer"
          className="flex justify-center items-center flex-col gap-5 my-16"
        >
          <div className="flex items-center gap-4 text-3xl">
            <FaReact data-testid="react-icon" />
            <RiNextjsFill data-testid="next-icon" />
            <SiVercel data-testid="vercel-icon" />
          </div>
          <div>
            <p className="text-sm text-gray-500" data-testid="powered">
              Powered By React, Nextjs, and Vercel
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

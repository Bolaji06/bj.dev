
import Logo from "../Logo/Logo";
import logo from "../../../public/logo.png"
import { RiNextjsFill } from "react-icons/ri";
import { SiVercel } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function Footer(){

    return (
        <>
            <footer className="my-10 flex justify-center items-center flex-col">
                <div className="flex justify-center items-center flex-col">
                    <Logo className="" src={logo}/>
                    <p className="text-xs text-center text-gray-500 py-4">Bolaji Bolajoko © 2024</p>
                </div>

                <div className="flex justify-center items-center flex-col gap-5 my-16">
                    <div className="flex items-center gap-4 text-3xl">
                        <FaReact />
                        <RiNextjsFill />
                        <SiVercel />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Powered By React, Nextjs, and Vercel</p>
                    </div>

                </div>
            </footer>
        </>
    )
}
// Copyright (c) bj.dev
// Licensed under the MIT License

import Image, { StaticImageData } from "next/image";
interface LogoProps {
    className?: string;
    src: StaticImageData
   

}

/**
 * 
 * @param props - The props
 * @param props.className - The className
 * @param props.src - The image src
 * @returns Logo component
 */

export default function Logo({ className, src, }: LogoProps){

    return (
        <>
            <div>
                <Image 
                src={src}
                className={className}
                alt="bj.dev logo"
                width={40}
                height={40}/>
            </div>
        </>
    )
}
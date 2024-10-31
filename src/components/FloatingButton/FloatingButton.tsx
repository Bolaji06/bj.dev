"use client";

import { useRouter } from "next/navigation";
import Button from "../Button/Button";

export default function FloatingButton(){
    const router = useRouter()

    return (
        <>
            <Button 
            onClick={() => router.push('#contact')}
            className="fixed bottom-12 right-6 flex items-center text-sm gap-2 bg-amber-500/40 rounded-3xl shadow-xl">
                <div  className="w-4 h-4 rounded-full bg-green-300 animate-pulse flex justify-center items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500"/>
                </div>
                Open for work
            </Button>
        </>
    )
}
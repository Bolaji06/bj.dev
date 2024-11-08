import { Toaster } from "react-hot-toast";

export default function Layout({ children }: { children: React.ReactNode }): React.JSX.Element{

    return (
        <>
            <main className="px-4 md:px-10">
                { children }
                <Toaster />
            </main>
        </>
    )

}
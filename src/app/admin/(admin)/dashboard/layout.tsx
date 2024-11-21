import AdminNavTabList from "@/components/AdminNavTabList/AdminNavTabList";
import { Toaster } from "react-hot-toast";

export default function Layout({ children }: { children: React.ReactNode }): React.JSX.Element{

    return (
        <>
            <main className="px-4 md:px-10 py-[3rem]">
                <nav className="fixed w-full max-w-4xl bg-background">
                    <AdminNavTabList />
                </nav>
                <section className="">
                   { children } 
                </section>
                <Toaster />
            </main>
        </>
    )

}
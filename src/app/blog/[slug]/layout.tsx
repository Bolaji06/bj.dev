import { Suspense } from "react";

export default function BlogLayout({ children }: { children: React.ReactNode }): React.JSX.Element{

    return (
        <>
            <main>
                <Suspense fallback={<p className="py-20 text-white">Loading...</p>}>
                    { children }
                </Suspense>
                
            </main>
        </>
    )
}
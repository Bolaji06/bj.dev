
export default function Layout({ children }: { children: React.ReactNode }): React.JSX.Element{

    return (
        <>
            <main className="px-10">
                { children }
            </main>
        </>
    )

}
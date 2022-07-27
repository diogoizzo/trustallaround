export default function Footer({ children }) {
    return (
        <div className={"min-h-[100vh] relative"}>
            <main className={"pb-10"}>{children}</main>
            <footer
                className={`absolute bottom-0 flex justify-center w-full items-center h-10 bg-brand-blue text-white clear-both`}
            >
                <p>© 2022 TRUST ALL AROUND. All rights reserved.</p>
            </footer>
        </div>
    );
}

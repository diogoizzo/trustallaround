import { useTranslation } from "next-export-i18n";

export default function Footer({ children }) {
    const { t } = useTranslation();
    return (
        <div className={"min-h-[100vh] relative"}>
            <main className={"pb-24 md:pb-10"}>{children}</main>
            <footer
                className={`absolute bottom-0 flex justify-center w-full text-center items-center py-3 lg:py-2 bg-brand-blue text-white clear-both`}
            >
                <p>
                    {t("footer.marca")} <br className="lg:hidden"></br>
                    {t("footer.direitos")}
                    <br className="lg:hidden"></br>
                    <a className="" href={"/pdf/politicas.pdf"}>
                        {" "}
                        <span className="underline underline-offset-2">
                            {t("footer.politicas")}
                        </span>
                    </a>
                </p>
            </footer>
        </div>
    );
}

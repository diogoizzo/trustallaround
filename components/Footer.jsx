import { useTranslation } from "next-export-i18n";

export default function Footer({ children }) {
    const { t } = useTranslation();
    return (
        <div className={"min-h-[100vh] relative"}>
            <main className={"pb-10"}>{children}</main>
            <footer
                className={`absolute bottom-0 flex justify-center w-full items-center h-10 bg-brand-blue text-white clear-both`}
            >
                <p>
                    {t("footer.direitos")}{" "}
                    <a
                        className="underline underline-offset-2"
                        href={"/pdf/politicas.pdf"}
                    >
                        {t("footer.politicas")}
                    </a>
                </p>
            </footer>
        </div>
    );
}

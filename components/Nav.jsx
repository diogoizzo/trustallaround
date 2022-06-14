import { useTranslation, useLanguageQuery } from "next-export-i18n";
import Link from "next/link";

export default function Nav({className}) {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    return (
        <nav className={className}>
            <ul className="flex font-semibold space-x-8">
                <li>
                    <Link href={{pathname:'/', query: query}} as="/" >
                    {t("nav.home").toUpperCase()}
                    </Link>
                </li>
                <li>
                    <Link href={{pathname:"/sobre", query: query}} as={t("nav.paths.sobre")}>
                        {t("nav.sobre").toUpperCase()}
                    </Link>
                </li>
                <li>
                    <Link href={{pathname:"/servicos", query: query}} as={t("nav.paths.servicos")}>
                        {t("nav.servicos").toUpperCase()}
                    </Link>
                </li>
                <li>
                    <Link href={{pathname:"/portos", query: query}} as={t("nav.paths.portos")}>
                        {t("nav.portos").toUpperCase()}
                    </Link>
                </li>
                <li>
                    <Link href={{pathname:"/ferramentas", query: query}} as={t("nav.paths.ferramentas")}>
                        {t("nav.ferramentas").toUpperCase()}
                    </Link>
                </li>
                <li>
                    <Link href={{pathname:"/contato", query: query}} as={t("nav.paths.contato")}>
                        {t("nav.contato").toUpperCase()}
                    </Link>

                </li>
            </ul>
        </nav>
    )
}
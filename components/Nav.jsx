import { useLanguageQuery, useTranslation } from "next-export-i18n";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Nav({ className }) {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    const router = useRouter();
    return (
        <nav className={className}>
            <ul className="flex font-semibold text-brand-blue space-x-8">
                <li>
                    <Link href={{ pathname: "/", query: query }} as="/">
                        {t("nav.home").toUpperCase()}
                    </Link>
                    <div
                        className={`${
                            router.pathname === "/" ? "block" : "hidden"
                        } h-1 bg-brand-orange w-full mt-1 rounded-3xl`}
                    ></div>
                </li>
                <li>
                    <Link
                        href={{ pathname: "/sobre", query: query }}
                        as={t("nav.paths.sobre")}
                    >
                        {t("nav.sobre").toUpperCase()}
                    </Link>
                    <div
                        className={`${
                            router.pathname === "/sobre" ? "block" : "hidden"
                        } h-1 bg-brand-orange w-full mt-1 rounded-3xl`}
                    ></div>
                </li>
                <li>
                    <Link
                        href={{ pathname: "/servicos", query: query }}
                        as={t("nav.paths.servicos")}
                    >
                        {t("nav.servicos").toUpperCase()}
                    </Link>
                    <div
                        className={`${
                            router.pathname === "/servicos" ? "block" : "hidden"
                        } h-1 bg-brand-orange w-full mt-1 rounded-3xl`}
                    ></div>
                </li>
                <li>
                    <Link
                        href={{ pathname: "/portos", query: query }}
                        as={t("nav.paths.portos")}
                    >
                        {t("nav.portos").toUpperCase()}
                    </Link>
                    <div
                        className={`${
                            router.pathname === "/portos" ? "block" : "hidden"
                        } h-1 bg-brand-orange w-full mt-1 rounded-3xl`}
                    ></div>
                </li>
                <li>
                    <Link
                        href={{ pathname: "/ferramentas", query: query }}
                        as={t("nav.paths.ferramentas")}
                    >
                        {t("nav.ferramentas").toUpperCase()}
                    </Link>
                    <div
                        className={`${
                            router.pathname === "/ferramentas"
                                ? "block"
                                : "hidden"
                        } h-1 bg-brand-orange w-full mt-1 rounded-3xl`}
                    ></div>
                </li>
                <li>
                    <Link
                        href={{ pathname: "/contato", query: query }}
                        as={t("nav.paths.contato")}
                    >
                        {t("nav.contato").toUpperCase()}
                    </Link>
                    <div
                        className={`${
                            router.pathname === "/contato" ? "block" : "hidden"
                        } h-1 bg-brand-orange w-full mt-1 rounded-3xl`}
                    ></div>
                </li>
            </ul>
        </nav>
    );
}

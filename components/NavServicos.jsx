import { useTranslation, useLanguageQuery } from "next-export-i18n";
import BtnServicos from "./BtnServicos";
import NextLink from "./NextLink";
import { useRouter } from "next/router";
export default function NavServicos() {
    const router = useRouter();
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    return (
        <div
            className={
                "flex flex-col items-stretch space-y-3 lg:space-y-0 lg:flex-row lg:space-x-9"
            }
        >
            <NextLink
                href={{ pathname: "/servicos", query: query }}
                as={t("nav.paths.servicos")}
                className={
                    router.pathname === "/servicos"
                        ? "text-brand-orange focus:outline-none hover:text-brand-blue transition-colors"
                        : "text-brand-blue hover:text-brand-orange focus:outline-none transition-colors"
                }
            >
                <h1
                    className={
                        "text-5xl font-semibold focus:outline-none mb-3 lg:ml-12"
                    }
                >
                    {t("servicos.titulo")}
                </h1>
            </NextLink>
            <NextLink
                href={{ pathname: "/servicos/aereo", query: query }}
                as={t("nav.paths.aereo")}
                className={"focus:outline-none"}
            >
                <BtnServicos
                    src={"/icons/aviao.svg"}
                    alt={"ícone de uma avião"}
                    height={46}
                    width={53}
                    text={t("servicos.tabs.tab1")}
                    className={
                        router.pathname === "/servicos/aereo"
                            ? "border-brand-blue bg-brand-orange-hover"
                            : "border-brand-blue hover:bg-brand-orange-hover"
                    }
                />
            </NextLink>
            <NextLink
                href={{ pathname: "/servicos/maritimo", query: query }}
                as={t("nav.paths.maritimo")}
                className={"focus:outline-none"}
            >
                <BtnServicos
                    src={"/icons/navio.svg"}
                    alt={"ícone de um navio"}
                    height={46}
                    width={53}
                    text={t("servicos.tabs.tab2")}
                    className={
                        router.pathname === "/servicos/maritimo"
                            ? "border-brand-blue bg-brand-orange-hover"
                            : "border-brand-blue hover:bg-brand-orange-hover"
                    }
                />
            </NextLink>
            <NextLink
                href={{ pathname: "/servicos/rodoviario", query: query }}
                as={t("nav.paths.rodoviario")}
                className={"focus:outline-none"}
            >
                <span className={"hidden lg:block"}>
                    <BtnServicos
                        src={"/icons/caminhao.svg"}
                        alt={"ícone de um caminhão"}
                        height={46}
                        width={74}
                        text={t("servicos.tabs.tab3")}
                        className={
                            router.pathname === "/servicos/rodoviario"
                                ? "border-brand-blue bg-brand-orange-hover"
                                : "border-brand-blue hover:bg-brand-orange-hover"
                        }
                    />
                </span>
                <span className={"lg:hidden"}>
                    <BtnServicos
                        src={"/icons/caminhao.svg"}
                        alt={"ícone de um caminhão"}
                        height={46}
                        width={53}
                        text={t("servicos.tabs.tab3")}
                        className={
                            router.pathname === "/servicos/rodoviario"
                                ? "border-brand-blue bg-brand-orange-hover"
                                : "border-brand-blue hover:bg-brand-orange-hover"
                        }
                    />
                </span>
            </NextLink>
        </div>
    );
}

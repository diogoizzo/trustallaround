import { useTranslation, useLanguageQuery } from "next-export-i18n";
import BtnGaleria from "./BtnGaleria";
import NextLink from "./NextLink";
import { useRouter } from "next/router";
export default function NavGaleria() {
    const router = useRouter();
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    return (
        <div
            className={
                "mx-auto items-center flex flex-col w-full  space-y-3 lg:space-y-0 lg:mx-0 lg:justify-start  lg:flex-row lg:space-x-9"
            }
        >
            <NextLink
                href={{ pathname: "/galeria", query: query }}
                as={t("nav.paths.galeria")}
                className={
                    router.pathname === "/galeria"
                        ? "text-brand-orange focus:outline-none hover:text-brand-blue transition-colors"
                        : "text-brand-blue hover:text-brand-orange focus:outline-none transition-colors"
                }
            >
                <h1
                    className={
                        "text-5xl font-semibold focus:outline-none mb-3  lg:ml-12"
                    }
                >
                    {t("galeria.titulo")}
                </h1>
            </NextLink>
            <NextLink
                href={{ pathname: "/galeria/fotos", query: query }}
                as={t("nav.paths.fotos")}
                className={"focus:outline-none w-full lg:w-fit"}
            >
                <BtnGaleria
                    src={"/icons/camera.svg"}
                    alt={"ícone de uma câmera"}
                    height={46}
                    width={53}
                    text={t("galeria.tabs.tab1")}
                    className={
                        router.pathname === "/galeria/fotos"
                            ? "border-brand-blue bg-brand-orange-hover"
                            : "border-brand-blue hover:bg-brand-orange-hover"
                    }
                />
            </NextLink>
            <NextLink
                href={{ pathname: "/galeria/videos", query: query }}
                as={t("nav.paths.videos")}
                className={"focus:outline-none w-full lg:w-fit"}
            >
                <BtnGaleria
                    src={"/icons/video.svg"}
                    alt={"ícone de um filme"}
                    height={46}
                    width={53}
                    text={t("galeria.tabs.tab2")}
                    className={
                        router.pathname === "/galeria/videos"
                            ? "border-brand-blue bg-brand-orange-hover"
                            : "border-brand-blue hover:bg-brand-orange-hover"
                    }
                />
            </NextLink>
            <NextLink
                href={{ pathname: "/galeria/curiosidades", query: query }}
                as={t("nav.paths.curiosidades")}
                className={"focus:outline-none w-full lg:w-fit"}
            >
                <span className={""}>
                    <BtnGaleria
                        src={"/icons/curiosidade.svg"}
                        alt={"ícone de globo terrestre com um balão de fala"}
                        height={46}
                        width={74}
                        text={t("galeria.tabs.tab3")}
                        className={
                            router.pathname === "/galeria/curiosidades"
                                ? "border-brand-blue bg-brand-orange-hover"
                                : "border-brand-blue hover:bg-brand-orange-hover"
                        }
                    />
                </span>
            </NextLink>
        </div>
    );
}

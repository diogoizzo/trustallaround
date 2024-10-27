import { useLanguageQuery, useTranslation } from "next-export-i18n";
import { useRouter } from "next/router";
import Image from "next/image";
import ChangeLanguage from "./ChangeLanguage";
import { useEffect } from "react";

export default function LanguageIcons() {
    const router = useRouter();
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    function changURL(query) {
        switch (router.pathname) {
            case "/":
                router.push(
                    { pathname: "/", query: query },
                    t("nav.paths.home"),
                    { shallow: true }
                );
                break;
            case "/sobre":
                router.push(
                    { pathname: "/sobre", query: query },
                    t("nav.paths.sobre"),
                    { shallow: true }
                );
                break;
            case "/servicos":
                router.push(
                    { pathname: "/servicos", query: query },
                    t("nav.paths.servicos"),
                    { shallow: true }
                );
                break;
            case "/servicos/aereo":
                router.push(
                    { pathname: "/servicos/aereo", query: query },
                    t("nav.paths.aereo"),
                    { shallow: true }
                );
                break;
            case "/servicos/maritimo":
                router.push(
                    { pathname: "/servicos/maritimo", query: query },
                    t("nav.paths.maritimo"),
                    { shallow: true }
                );
                break;
            case "/servicos/rodoviario":
                router.push(
                    { pathname: "/servicos/rodoviario", query: query },
                    t("nav.paths.rodoviario"),
                    { shallow: true }
                );
                break;
            case "/servicos/china":
                router.push(
                    { pathname: "/servicos/china", query: query },
                    t("nav.paths.china"),
                    { shallow: true }
                );
                break;
            case "/servicos/seguro":
                router.push(
                    { pathname: "/servicos/seguro", query: query },
                    t("nav.paths.seguro"),
                    { shallow: true }
                );
                break;
            case "/portos":
                router.push(
                    { pathname: "/portos", query: query },
                    t("nav.paths.portos"),
                    { shallow: true }
                );
                break;
            case "/ferramentas":
                router.push(
                    { pathname: "/ferramentas", query: query },
                    t("nav.paths.ferramentas"),
                    { shallow: true }
                );
                break;
            case "/contato":
                router.push(
                    { pathname: "/contato", query: query },
                    t("nav.paths.contato"),
                    { shallow: true }
                );
                break;
            case "/galeria":
                router.push(
                    { pathname: "/galeria", query: query },
                    t("nav.paths.galeria"),
                    { shallow: true }
                );
                break;
            case "/galeria/fotos":
                router.push(
                    { pathname: "/galeria/fotos", query: query },
                    t("nav.paths.fotos"),
                    { shallow: true }
                );
                break;
            case "/galeria/videos":
                router.push(
                    { pathname: "/galeria/videos", query: query },
                    t("nav.paths.videos"),
                    { shallow: true }
                );
                break;
            case "/galeria/curiosidades":
                router.push(
                    { pathname: "/galeria/curiosidades", query: query },
                    t("nav.paths.curiosidades"),
                    { shallow: true }
                );
                break;
        }
    }

    useEffect(() => {
        changURL(query);
    }, [query]);

    return (
        <div className="hidden tm:flex items-center tm:space-x-5">
            <ChangeLanguage lang="en">
                <Image
                    alt="bandeira dos Estados Unidos"
                    src="/icons/bandeiraEUA.svg"
                    height="55px"
                    width="43px"
                    layout={"fixed"}
                ></Image>
            </ChangeLanguage>
            <ChangeLanguage lang="es">
                <Image
                    alt="bandeira da Espanha"
                    src="/icons/bandeiraSPA.svg"
                    height="25px"
                    width="40px"
                    layout={"fixed"}
                ></Image>
            </ChangeLanguage>
            <ChangeLanguage lang="pt">
                <Image
                    alt="bandeira do Brasil"
                    src="/icons/bandeiraBRA.svg"
                    height="26px"
                    width="43px"
                    layout={"fixed"}
                ></Image>
            </ChangeLanguage>
        </div>
    );
}

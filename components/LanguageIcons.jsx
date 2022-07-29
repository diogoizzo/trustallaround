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
        //todo tentar refatorar para não ter toda essa extenção - com um switch separado para definir a lingua e usando template strings
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
        }
    }

    useEffect(() => {
        changURL();
    }, [query]);

    return (
        <div className="hidden tm:flex items-center tm:space-x-5">
            <ChangeLanguage lang="en">
                <Image
                    alt="bandeira dos Estados Unidos"
                    src="/icons/bandeiraEUA.svg"
                    height="48px"
                    width="42px"
                    unoptimized={true}
                ></Image>
            </ChangeLanguage>
            <ChangeLanguage lang="es">
                <Image
                    alt="bandeira da Espanha"
                    src="/icons/bandeiraSPA.svg"
                    height="25px"
                    width="40px"
                    unoptimized={true}
                ></Image>
            </ChangeLanguage>
            <ChangeLanguage lang="pt">
                <Image
                    alt="bandeira do Brasil"
                    src="/icons/bandeiraBRA.svg"
                    height="26px"
                    width="41px"
                    unoptimized={true}
                ></Image>
            </ChangeLanguage>
        </div>
    );
}

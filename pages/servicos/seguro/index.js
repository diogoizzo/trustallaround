import { useLanguageQuery, useTranslation } from "next-export-i18n";
import NavServicos from "../../../components/NavServicos";
import Image from "next/image";
import NextLink from "../../../components/NextLink";

export default function Servicos() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    return (
        <div className="w-full overflow-hidden">
            <div
                className={
                    "w-full mt-3 lg:mt-8 px-[6%] mx-auto text-brand-blue"
                }
            >
                <div>
                    <div className={"flex flex-col lg:flex-row lg:items-end"}>
                        <NavServicos />
                    </div>
                    <div className={"mt-8"}>
                        <div className="relative">
                            <div
                                className={
                                    "border-l-4 border-brand-orange pl-8 lg:pl-12 pb-8 text-lg md:text-xl lg:text-2xl font-normal mt-5 lg:mt-12 "
                                }
                            >
                                <p
                                    className=""
                                    dangerouslySetInnerHTML={{
                                        __html: t("servicos.content.tab6.p1"),
                                    }}
                                ></p>

                                <p
                                    className="mt-4 lg:mt-8"
                                    dangerouslySetInnerHTML={{
                                        __html: t("servicos.content.tab6.p2"),
                                    }}
                                ></p>
                                <p
                                    className="mt-4 lg:mt-8"
                                    dangerouslySetInnerHTML={{
                                        __html: t("servicos.content.tab6.p3"),
                                    }}
                                ></p>
                                <p
                                    className="mt-4 lg:mt-8"
                                    dangerouslySetInnerHTML={{
                                        __html: t("servicos.content.tab6.p4"),
                                    }}
                                ></p>
                                <div className="float-right w-[40%] mt-8 mb-8 mr-24">
                                    <Image
                                        src={"/images/caixa.jpg"}
                                        alt={
                                            "imagem mostrando um container vindo da china com vários produtos"
                                        }
                                        width={674}
                                        height={411}
                                        layout={"responsive"}
                                    />
                                </div>
                                <p
                                    className="mt-4 lg:mt-8"
                                    dangerouslySetInnerHTML={{
                                        __html: t("servicos.content.tab6.p5"),
                                    }}
                                ></p>
                                <p
                                    className="mt-4 lg:mt-8 mb-16"
                                    dangerouslySetInnerHTML={{
                                        __html: t("servicos.content.tab6.p6"),
                                    }}
                                ></p>
                                <NextLink
                                    className={`inline-flex px-4 mb-24 ml-44 py-2 items-center  border rounded-xl transition-colors border-brand-blue hover:bg-brand-orange-hover text-brand-blue`}
                                    href={{
                                        pathname: "/contato",
                                        query: query,
                                    }}
                                    as={t("nav.paths.contato")}
                                >
                                    <Image
                                        className=""
                                        src={"/icons/contact.svg"}
                                        alt={"icone de contato pelo whatsapp"}
                                        width={40}
                                        height={40}
                                        layout="fixed"
                                    />
                                    <p
                                        className={
                                            "ml-3 w-full text-center text-[16px]  sm:w-fit uppercase  "
                                        }
                                    >
                                        {t("sobre.btn")}
                                    </p>
                                </NextLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

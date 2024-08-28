import { useLanguageQuery, useTranslation } from "next-export-i18n";
import NavServicos from "../../../components/NavServicos";
import Image from "next/image";

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
                                    "border-l-4 border-brand-orange pl-8 lg:pl-12 text-lg md:text-xl lg:text-2xl font-normal mt-5 lg:mt-12 "
                                }
                            >
                                <p
                                    className=""
                                    dangerouslySetInnerHTML={{
                                        __html: t("servicos.content.tab5.p1"),
                                    }}
                                ></p>
                                <div className="float-right w-1/2 mt-20 mb-10 ml-4">
                                    <Image
                                        src={"/images/china-container.jpg"}
                                        alt={
                                            "imagem mostrando um container vindo da china com vários produtos"
                                        }
                                        width={738}
                                        height={335}
                                        layout={"responsive"}
                                    />
                                </div>
                                <p
                                    className="mt-4 lg:mt-8"
                                    dangerouslySetInnerHTML={{
                                        __html: t("servicos.content.tab5.p2"),
                                    }}
                                ></p>
                                <p
                                    className="mt-4 lg:mt-8"
                                    dangerouslySetInnerHTML={{
                                        __html: t("servicos.content.tab5.p3"),
                                    }}
                                ></p>
                                <p
                                    className="mt-4 lg:mt-8 mb-16"
                                    dangerouslySetInnerHTML={{
                                        __html: t("servicos.content.tab5.p4"),
                                    }}
                                ></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

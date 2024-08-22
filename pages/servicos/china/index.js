import { useLanguageQuery, useTranslation } from "next-export-i18n";
import { useEffect, useState } from "react";
import NavServicos from "../../../components/NavServicos";
import Image from "next/image";

export default function Servicos() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    // const [china, setChina] = useState({
    //     p1: t("servicos.content.tab1.p1"),
    //     p2: t("servicos.content.tab1.p2"),
    //     li1: t("servicos.content.tab1.list.li1"),
    //     li2: t("servicos.content.tab1.list.li2"),
    //     li3: t("servicos.content.tab1.list.li3"),
    //     li4: t("servicos.content.tab1.list.li4"),
    //     li5: t("servicos.content.tab1.list.li5"),
    //     li6: t("servicos.content.tab1.list.li6"),
    // });

    // useEffect(() => {
    //     setServico({
    //         p1: t("servicos.content.tab1.p1"),
    //         p2: t("servicos.content.tab1.p2"),
    //         li1: t("servicos.content.tab1.list.li1"),
    //         li2: t("servicos.content.tab1.list.li2"),
    //         li3: t("servicos.content.tab1.list.li3"),
    //         li4: t("servicos.content.tab1.list.li4"),
    //         li5: t("servicos.content.tab1.list.li5"),
    //         li6: t("servicos.content.tab1.list.li6"),
    //     });
    // }, [query]);

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
                                <p>
                                    xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
                                </p>
                                <p className="mt-3">xxxxxx</p>
                            </div>
                            <div className="float-right w-1/2 mt-10 mb-10 ml-4">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

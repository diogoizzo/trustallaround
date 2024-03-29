import { Tab } from "@headlessui/react";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import Image from "next/image";
import Tabs from "./Tabs";
import NextLink from "./NextLink";

export default function Containers({
    title,
    setTitle,
    setOption,
    btnVoltar,
    tab1,
    tab2,
    tab3,
    tab4,
    vizualizacao,
}) {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    return (
        <div className={"px-[6%] w-full mt-3 sm:mt-8"}>
            <h2
                className={
                    "text-brand-orange text-4xl font-semibold text-center lg:text-left lg:ml-12"
                }
            >
                {title}
            </h2>
            <Tab.Group>
                <div
                    className={
                        "flex flex-col lg:flex-row lg:justify-between lg:items-end lg:mt-6 text-brand-blue"
                    }
                >
                    <button
                        className={
                            "text-xl text-brand-blue lg:ml-12 hover:text-brand-orange transition-colors inline-flex mb-3 self-start "
                        }
                        onClick={() => setOption(null)}
                    >
                        <span className={"flex items-center space-x-2"}>
                            <Image
                                src={"/icons/arrow-left.svg"}
                                height={16}
                                width={16}
                                layout={"fixed"}
                                alt={"seta para voltar"}
                            />
                            <p>{btnVoltar}</p>
                        </span>
                    </button>

                    <Tab.List
                        className={
                            "flex flex-col items-stretch md:items-center lg:flex-row lg:space-x-9 "
                        }
                    >
                        <Tab
                            onClick={() => setTitle(t("ferramentas.tabs.tab1"))}
                            className={({ selected }) =>
                                selected ? "hidden md:self-center" : "mt-3"
                            }
                        >
                            <Tabs text={tab1} />
                        </Tab>
                        <Tab
                            onClick={() => setTitle(t("ferramentas.tabs.tab2"))}
                            className={({ selected }) =>
                                selected ? "hidden" : "mt-3"
                            }
                        >
                            <Tabs text={tab2} />
                        </Tab>
                        <Tab
                            onClick={() => setTitle(t("ferramentas.tabs.tab3"))}
                            className={({ selected }) =>
                                selected ? "hidden" : "mt-3"
                            }
                        >
                            <Tabs text={tab3} />
                        </Tab>
                        <Tab
                            onClick={() => setTitle(t("ferramentas.tabs.tab4"))}
                            className={({ selected }) =>
                                selected ? "hidden" : "mt-3"
                            }
                        >
                            <Tabs text={tab4} />
                        </Tab>
                    </Tab.List>
                </div>
                <Tab.Panels className={"flex justify-center mt-8"}>
                    <Tab.Panel>
                        <NextLink href={"/images/containersPadrao.png"}>
                            <Image
                                src={"/images/containersPadrao.png"}
                                alt={"Containers padrão"}
                                width={1657}
                                height={667}
                                layout={"intrinsic"}
                            />
                        </NextLink>
                    </Tab.Panel>
                    <Tab.Panel>
                        <NextLink href={"/images/cont_refrigerado.png"}>
                            <Image
                                src={"/images/cont_refrigerado.png"}
                                alt={"Containers refrigerados"}
                                width={1657}
                                height={672}
                                layout={"intrinsic"}
                            />
                        </NextLink>
                    </Tab.Panel>
                    <Tab.Panel>
                        <NextLink href={"/images/cont_especiais01.png"}>
                            <Image
                                src={"/images/cont_especiais01.png"}
                                alt={"Containers especiais"}
                                width={1664}
                                height={476}
                                layout={"intrinsic"}
                            />
                        </NextLink>
                    </Tab.Panel>
                    <Tab.Panel>
                        <NextLink href={"/images/cont_especiais02.png"}>
                            <Image
                                src={"/images/cont_especiais02.png"}
                                alt={"Containers especiais"}
                                width={1357}
                                height={689}
                                layout={"intrinsic"}
                            />
                        </NextLink>
                    </Tab.Panel>
                </Tab.Panels>
                <p className={"text-center text-brand-blue lg:hidden"}>
                    * {vizualizacao}
                </p>
            </Tab.Group>
            <div className={"text-center my-8"}>
                <NextLink href={`https://www.convertworld.com/${query?.lang}/`}>
                    <button
                        className={`inline-flex py-2 px-3 text-lg text-brand-blue justify-center border rounded-xl border-brand-blue hover:bg-brand-orange-hover transition-colors leading-none`}
                    >
                        {t("ferramentas.btnMedidas")}
                    </button>
                </NextLink>
            </div>
        </div>
    );
}

import { Tab } from "@headlessui/react";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import Image from "next/image";
import Tabs from "./Tabs";
import { useEffect, useState } from "react";

export default function Containers({ setOption }) {
    const { t } = useTranslation();
    const [title, setTitle] = useState(null);
    const [query] = useLanguageQuery();

    useEffect(() => {
        setTitle(t("ferramentas.tabs.tab1"));
    }, [query]);

    return (
        <div className={"px-[6%] w-full mt-8"}>
            <h2 className={"text-brand-orange text-4xl font-semibold ml-12"}>
                {title}
            </h2>
            <Tab.Group>
                <div
                    className={
                        "flex justify-between items-end mt-6 text-brand-blue"
                    }
                >
                    <button
                        className={
                            "text-xl text-brand-blue ml-12 hover:text-brand-orange transition-colors inline-flex self-start"
                        }
                        onClick={() => setOption(null)}
                    >
                        &#129044; {t("ferramentas.btn-voltar")}
                    </button>

                    <Tab.List className={"flex space-x-9"}>
                        <Tab
                            onClick={() => setTitle(t("ferramentas.tabs.tab1"))}
                            className={({ selected }) =>
                                selected ? "hidden" : null
                            }
                        >
                            <Tabs text={t("ferramentas.tabs.tab1")} />
                        </Tab>
                        <Tab
                            onClick={() => setTitle(t("ferramentas.tabs.tab2"))}
                            className={({ selected }) =>
                                selected ? "hidden" : null
                            }
                        >
                            <Tabs text={t("ferramentas.tabs.tab2")} />
                        </Tab>
                        <Tab
                            onClick={() => setTitle(t("ferramentas.tabs.tab3"))}
                            className={({ selected }) =>
                                selected ? "hidden" : null
                            }
                        >
                            <Tabs text={t("ferramentas.tabs.tab3")} />
                        </Tab>
                        <Tab
                            onClick={() => setTitle(t("ferramentas.tabs.tab4"))}
                            className={({ selected }) =>
                                selected ? "hidden" : null
                            }
                        >
                            <Tabs text={t("ferramentas.tabs.tab4")} />
                        </Tab>
                    </Tab.List>
                </div>
                <Tab.Panels className={"flex justify-center mt-8"}>
                    <Tab.Panel>
                        <Image
                            src={"/images/containersPadrao.png"}
                            alt={"Containers padrão"}
                            width={1657}
                            height={667}
                            layout={"intrinsic"}
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Image
                            src={"/images/cont_refrigerado.png"}
                            alt={"Containers refrigerados"}
                            width={1657}
                            height={672}
                            layout={"intrinsic"}
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Image
                            src={"/images/cont_especiais01.png"}
                            alt={"Containers especiais"}
                            width={1664}
                            height={476}
                            layout={"intrinsic"}
                        />
                    </Tab.Panel>
                    <Tab.Panel>
                        <Image
                            src={"/images/cont_especiais02.png"}
                            alt={"Containers especiais"}
                            width={1357}
                            height={689}
                            layout={"intrinsic"}
                        />
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
            <div className={"text-center my-8"}>
                <button
                    className={`inline-flex py-2 px-3 text-lg text-brand-blue justify-center border rounded-xl border-brand-blue transition-colors hover:bg-brand-blue-hover`}
                >
                    {t("ferramentas.btnMedidas")}
                </button>
                {/* //todo pegar link do conversor de medidas para incluir no botão*/}
            </div>
        </div>
    );
}

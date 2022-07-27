import { Tab } from "@headlessui/react";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import BtnServicos from "../components/BtnServicos";
import TabServicos from "../components/TabServicos";
import TabAereo from "../components/TabAereo";
import TabMaritimo from "../components/TabMaritimo";
import TabRodoviario from "../components/TabRodoviario";
import { useEffect, useState } from "react";

export default function Servicos() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    const [servico, setServico] = useState({
        p1: t("servicos.content.tab1.p1"),
        p2: t("servicos.content.tab1.p2"),
        li1: t("servicos.content.tab1.list.li1"),
        li2: t("servicos.content.tab1.list.li2"),
        li3: t("servicos.content.tab1.list.li3"),
        li4: t("servicos.content.tab1.list.li4"),
    });
    const [rodoviario, setRodoviario] = useState({
        p1: t("servicos.content.tab4.p1"),
        li1: t("servicos.content.tab4.list.li1"),
        li2: t("servicos.content.tab4.list.li2"),
        li3: t("servicos.content.tab4.list.li3"),
        li4: t("servicos.content.tab4.list.li4"),
        li5: t("servicos.content.tab4.list.li5"),
    });
    const [aereo, setAereo] = useState({
        p1: t("servicos.content.tab2.p1"),
        li1: t("servicos.content.tab2.list.li1.titulo"),
        texto1: t("servicos.content.tab2.list.li1.texto"),
        li2: t("servicos.content.tab2.list.li2.titulo"),
        texto2: t("servicos.content.tab2.list.li2.texto"),
        li3: t("servicos.content.tab2.list.li3.titulo"),
        texto3: t("servicos.content.tab2.list.li3.texto"),
    });
    const [maritimo, setMaritimo] = useState({});

    useEffect(() => {
        setServico({
            p1: t("servicos.content.tab1.p1"),
            p2: t("servicos.content.tab1.p2"),
            li1: t("servicos.content.tab1.list.li1"),
            li2: t("servicos.content.tab1.list.li2"),
            li3: t("servicos.content.tab1.list.li3"),
            li4: t("servicos.content.tab1.list.li4"),
        });
        setRodoviario({
            p1: t("servicos.content.tab4.p1"),
            li1: t("servicos.content.tab4.list.li1"),
            li2: t("servicos.content.tab4.list.li2"),
            li3: t("servicos.content.tab4.list.li3"),
            li4: t("servicos.content.tab4.list.li4"),
            li5: t("servicos.content.tab4.list.li5"),
        });
        setAereo({
            p1: t("servicos.content.tab2.p1"),
            li1: t("servicos.content.tab2.list.li1.titulo"),
            texto1: t("servicos.content.tab2.list.li1.texto"),
            li2: t("servicos.content.tab2.list.li2.titulo"),
            texto2: t("servicos.content.tab2.list.li2.texto"),
            li3: t("servicos.content.tab2.list.li3.titulo"),
            texto3: t("servicos.content.tab2.list.li3.texto"),
        });
        setMaritimo({
            p1: t("servicos.content.tab3.p1"),
            p2: t("servicos.content.tab3.p2"),
            li1: t("servicos.content.tab3.list.li1.titulo"),
            texto1: t("servicos.content.tab3.list.li1.texto"),
            li2: t("servicos.content.tab3.list.li2.titulo"),
            texto2: t("servicos.content.tab3.list.li2.texto"),
            li3: t("servicos.content.tab3.list.li3.titulo"),
            texto3: t("servicos.content.tab3.list.li3.texto"),
        });
    }, [query]);

    return (
        <div className="w-full overflow-hidden">
            <div
                className={
                    "w-full mt-3 lg:mt-8 px-[6%] mx-auto text-brand-blue"
                }
            >
                <Tab.Group>
                    <div className={"flex flex-col lg:flex-row lg:items-end"}>
                        <Tab.List
                            className={
                                "flex flex-col items-stretch space-y-3 lg:space-y-0 lg:flex-row lg:space-x-9"
                            }
                        >
                            <Tab
                                className={({ selected }) =>
                                    selected
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
                            </Tab>
                            <Tab className={"focus:outline-none"}>
                                {({ selected }) => (
                                    <BtnServicos
                                        src={"/icons/aviao.svg"}
                                        alt={"ícone de uma avião"}
                                        height={46}
                                        width={53}
                                        text={t("servicos.tabs.tab1")}
                                        className={
                                            selected
                                                ? "border-brand-blue bg-brand-orange-hover"
                                                : "border-brand-blue hover:bg-brand-orange-hover"
                                        }
                                    />
                                )}
                            </Tab>
                            <Tab className={"focus:outline-none"}>
                                {({ selected }) => (
                                    <BtnServicos
                                        src={"/icons/navio.svg"}
                                        alt={"ícone de um navio"}
                                        height={46}
                                        width={53}
                                        text={t("servicos.tabs.tab2")}
                                        className={
                                            selected
                                                ? "border-brand-blue bg-brand-orange-hover"
                                                : "border-brand-blue hover:bg-brand-orange-hover"
                                        }
                                    />
                                )}
                            </Tab>
                            <Tab className={"focus:outline-none"}>
                                {({ selected }) => (
                                    <>
                                        <span className={"hidden lg:block"}>
                                            <BtnServicos
                                                src={"/icons/caminhao.svg"}
                                                alt={"ícone de um caminhão"}
                                                height={46}
                                                width={74}
                                                text={t("servicos.tabs.tab3")}
                                                className={
                                                    selected
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
                                                    selected
                                                        ? "border-brand-blue bg-brand-orange-hover"
                                                        : "border-brand-blue hover:bg-brand-orange-hover"
                                                }
                                            />
                                        </span>
                                    </>
                                )}
                            </Tab>
                        </Tab.List>
                    </div>
                    <Tab.Panels className={"mt-8"}>
                        <Tab.Panel>
                            <TabServicos servico={servico} />
                        </Tab.Panel>
                        <Tab.Panel>
                            <TabAereo servico={aereo} />
                        </Tab.Panel>
                        <Tab.Panel>
                            <TabMaritimo servico={maritimo} />
                        </Tab.Panel>
                        <Tab.Panel>
                            <TabRodoviario servico={rodoviario} />
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    );
}

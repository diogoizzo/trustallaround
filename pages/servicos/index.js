import { useLanguageQuery, useTranslation } from "next-export-i18n";
import TabServicos from "../../components/TabServicos";
import { useEffect, useState } from "react";
import NavServicos from "../../components/NavServicos";
import Image from "next/image";

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
        li5: t("servicos.content.tab1.list.li5"),
        li6: t("servicos.content.tab1.list.li6"),
    });

    useEffect(() => {
        setServico({
            p1: t("servicos.content.tab1.p1"),
            p2: t("servicos.content.tab1.p2"),
            li1: t("servicos.content.tab1.list.li1"),
            li2: t("servicos.content.tab1.list.li2"),
            li3: t("servicos.content.tab1.list.li3"),
            li4: t("servicos.content.tab1.list.li4"),
            li5: t("servicos.content.tab1.list.li5"),
            li6: t("servicos.content.tab1.list.li6"),
        });
    }, [query]);

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
                        <TabServicos servico={servico} />
                    </div>
                </div>
            </div>
        </div>
    );
}

import NavServicos from "../../../components/NavServicos";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import TabRodoviario from "../../../components/TabRodoviario";
import { useEffect, useState } from "react";

export default function Servicos() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    const [rodoviario, setRodoviario] = useState({
        p1: t("servicos.content.tab4.p1"),
        li1: t("servicos.content.tab4.list.li1"),
        li2: t("servicos.content.tab4.list.li2"),
        li3: t("servicos.content.tab4.list.li3"),
        li4: t("servicos.content.tab4.list.li4"),
        li5: t("servicos.content.tab4.list.li5"),
    });

    useEffect(() => {
        setRodoviario({
            p1: t("servicos.content.tab4.p1"),
            li1: t("servicos.content.tab4.list.li1"),
            li2: t("servicos.content.tab4.list.li2"),
            li3: t("servicos.content.tab4.list.li3"),
            li4: t("servicos.content.tab4.list.li4"),
            li5: t("servicos.content.tab4.list.li5"),
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
                        <TabRodoviario servico={rodoviario} />
                    </div>
                </div>
            </div>
        </div>
    );
}

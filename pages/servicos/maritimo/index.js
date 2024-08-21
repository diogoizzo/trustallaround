import { useLanguageQuery, useTranslation } from "next-export-i18n";
import NavServicos from "../../../components/NavServicos";
import TabMaritimo from "../../../components/TabMaritimo";
import { useEffect, useState } from "react";

export default function Servicos() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    const [maritimo, setMaritimo] = useState({});

    useEffect(() => {
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
                <div>
                    <div className={"flex flex-col lg:flex-row lg:items-end"}>
                        <NavServicos />
                    </div>
                    <div className={"mt-8"}>
                        <TabMaritimo servico={maritimo} />
                    </div>
                </div>
            </div>
        </div>
    );
}

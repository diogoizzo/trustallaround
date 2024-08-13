import ToolsOptions from "./ToolsOptions";
import ToolsOptions2 from "./ToolsOptions2";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import { useEffect, useState } from "react";
import Incoterms from "./Incoterms";
import Containers from "./Containers";

export default function DisplayTools() {
    const { t } = useTranslation();
    const [option, setOption] = useState(null);
    const [query] = useLanguageQuery();
    const [title, setTitle] = useState(t("ferramentas.tabs.tab1"));

    useEffect(() => {
        setTitle(t("ferramentas.tabs.tab1"));
    }, [query]);

    return (
        <div>
            {option === null ? (
                <h1 className="text-brand-orange text-5xl font-semibold text-center lg:text-left lg:ml-12 px-[6%] mb-8 lg:mb-0 mt-3 lg:mt-8">
                    {t("ferramentas.titulo")}
                </h1>
            ) : null}
            <div className="flex justify-center mx-auto sm:min-h-[638px] px-[6%] sm:px-5">
                {option === null ? (
                    <div className="flex flex-col sm:flex-row items-center sm:space-x-3 lg:space-x-[5%]">
                        <ToolsOptions2
                            title={"Incoterms"}
                            src={"/images/incoterms.svg"}
                            alt={"Ilustração de uma navio, avião e caminhão"}
                            width={402}
                            height={339}
                            onClick={() => {
                                setOption(true);
                            }}
                        />
                        <ToolsOptions
                            title={t("ferramentas.tipos")}
                            src={"/images/Containers.svg"}
                            alt={"Ilustração de dois containers"}
                            width={382}
                            height={246}
                            onClick={() => setOption(false)}
                        />
                    </div>
                ) : (
                    <>
                        {option ? (
                            <Incoterms
                                setOption={setOption}
                                btnVoltar={t("ferramentas.btn-voltar")}
                            />
                        ) : (
                            <Containers
                                title={title}
                                setTitle={setTitle}
                                setOption={setOption}
                                btnVoltar={t("ferramentas.btn-voltar")}
                                tab1={t("ferramentas.tabs.tab1")}
                                tab2={t("ferramentas.tabs.tab2")}
                                tab3={t("ferramentas.tabs.tab3")}
                                tab4={t("ferramentas.tabs.tab4")}
                                vizualizacao={t("ferramentas.vizualizacao")}
                            />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

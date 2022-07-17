import ToolsOptions from "./ToolsOptions";
import { useTranslation } from "next-export-i18n";
import { useState } from "react";
import Incoterms from "./Incoterms";
import Containers from "./Containers";

export default function DisplayTools() {
    const { t } = useTranslation();
    const [option, setOption] = useState(null);

    return (
        <div>
            {option === null ? (
                <h1 className="text-brand-orange text-5xl font-semibold ml-12 px-[6%] mt-8">
                    {t("ferramentas.titulo")}
                </h1>
            ) : null}
            <div className="flex justify-center mx-auto min-h-[638px]  ">
                {option === null ? (
                    <div className="flex items-center space-x-[8%]">
                        <ToolsOptions
                            title={"Incoterms"}
                            src={"/images/incoterms.png"}
                            alt={"Ilustração de uma navio, avião e caminhão"}
                            width={402}
                            height={339}
                            onClick={() => {
                                setOption(true);
                            }}
                        />
                        <ToolsOptions
                            title={t("ferramentas.tipos")}
                            src={"/images/Containers.png"}
                            alt={"Ilustração de dois containers"}
                            width={382}
                            height={246}
                            onClick={() => setOption(false)}
                        />
                    </div>
                ) : (
                    <>
                        {option ? (
                            <Incoterms setOption={setOption} />
                        ) : (
                            <Containers setOption={setOption} />
                        )}
                    </>
                )}
            </div>
        </div>
    );
}

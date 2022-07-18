import Image from "next/image";
import { useTranslation } from "next-export-i18n";

export default function Incoterms({ setOption }) {
    const { t } = useTranslation();
    return (
        <div className={"my-3 sm:my-8 sm:px-[6%] sm:ml-12 "}>
            <div>
                <h1 className={"text-5xl font-semibold text-brand-orange "}>
                    Incoterms
                </h1>
                <button
                    className={
                        "text-xl text-brand-blue mt-2 hover:text-brand-orange transition-colors mb-8"
                    }
                    onClick={() => setOption(null)}
                >
                    &#129044; {t("ferramentas.btn-voltar")}
                </button>
            </div>
            <Image
                src={"/images/incotermsTable.png"}
                alt={"tabela com os tipos de incoterms"}
                width={1557}
                height={771}
                layout={"intrinsic"}
            />
        </div>
    );
}

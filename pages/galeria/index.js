import { useLanguageQuery, useTranslation } from "next-export-i18n";
import NavGaleria from "../../components/NavGaleria";

export default function Servicos() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    return (
        <div className="w-full overflow-hidden">
            <div
                className={
                    "w-full mt-3 lg:mt-8 px-[6%] mx-auto text-brand-blue"
                }
            >
                <div>
                    <div className={"flex flex-col lg:flex-row lg:items-end"}>
                        <NavGaleria />
                    </div>
                    <div className={"mt-8"}>
                        <div className="relative">
                            <div
                                className={
                                    "border-l-4 border-brand-orange pl-8 lg:pl-12 pb-8 text-lg md:text-xl lg:text-2xl font-normal mt-5 lg:mt-12 "
                                }
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

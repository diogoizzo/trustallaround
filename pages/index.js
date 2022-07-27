import Slider from "../components/Slider";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";
import Ballons from "../components/Ballons";

export default function Home() {
    const { t } = useTranslation();
    return (
        <>
            <Slider />
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 px-[6%] py-10">
                <div className="flex flex-col sm:flex-row justify-center max-w-[420px] mx-auto items-center sm:space-x-9">
                    <span className="mb-1">
                        <Ballons arq={["valores", "values", "valors"]} />
                    </span>
                    <span className={"hidden sm:block"}>
                        <Image
                            alt="seta"
                            src="/images/seta.png"
                            width={28}
                            height={96}
                            layout={"fixed"}
                        />
                    </span>
                    <span className={"sm:hidden"}>
                        <Image
                            alt="seta"
                            src="/images/setab.png"
                            width={125}
                            height={38}
                            layout={"fixed"}
                        />
                    </span>
                    <div>
                        <ul className="list-disc ml-4 mt-3 sm:mt-0 text-brand-blue text-lg md:min-w-[140px]">
                            <li>{t("bullets.valores.seguranca")}</li>
                            <li>{t("bullets.valores.confianca")}</li>
                            <li>{t("bullets.valores.comprometimento")}</li>
                            <li>{t("bullets.valores.inteligencia")}</li>
                            <li>{t("bullets.valores.singularidade")}</li>
                        </ul>
                    </div>
                </div>
                <div className="flex max-w-[420px] mt-3 sm:mt-0 flex-col sm:flex-row mx-auto items-center sm:space-x-9">
                    <span className="mb-1">
                        <Ballons arq={["visao", "visione", "vision"]} />
                    </span>
                    <span className="hidden sm:block">
                        <Image
                            alt="seta"
                            src="/images/seta.png"
                            width={28}
                            height={96}
                            layout={"fixed"}
                        />
                    </span>
                    <span className={"sm:hidden"}>
                        <Image
                            alt="seta"
                            src="/images/setab.png"
                            width={125}
                            height={38}
                            layout={"fixed"}
                        />
                    </span>
                    <div>
                        <p className="text-brand-blue text-center sm:text-left text-lg md:min-w-[140px]">
                            {t("bullets.visao")}
                        </p>
                    </div>
                </div>
                <div className="flex max-w-[420px] flex-col mt-3 sm:mt-0 sm:flex-row mx-auto items-center sm:space-x-9">
                    <span className="mb-1">
                        <Ballons arq={["missao", "mission", "mision"]} />
                    </span>
                    <span className="hidden sm:block">
                        <Image
                            alt="seta"
                            src="/images/seta.png"
                            width={28}
                            height={96}
                            layout={"fixed"}
                        />
                    </span>
                    <span className={"sm:hidden"}>
                        <Image
                            alt="seta"
                            src="/images/setab.png"
                            width={125}
                            height={38}
                            layout={"fixed"}
                        />
                    </span>
                    <div>
                        <p className="text-brand-blue text-center sm:text-left text-lg md:min-w-[140px]">
                            {t("bullets.missao")}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

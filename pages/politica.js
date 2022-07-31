import { useTranslation } from "next-export-i18n";
import Image from "next/image";

export default function Sobre() {
    const { t } = useTranslation();
    return (
        <main>
            <div className="px-[6%] mt-3 lg:mt-8">
                <div className={"mb-6"}>
                    <h1 className="inline mr-6 text-brand-orange text-5xl font-semibold text-center lg:text-left lg:ml-12">
                        {t("politica.titulo")}
                    </h1>
                    <span className={"mb-6"}>
                        <Image
                            src={"/images/cadeado.png"}
                            alt={"cadeado"}
                            width={46}
                            height={64}
                            layout={"fixed"}
                        />
                    </span>
                </div>

                <div className={" lg:ml-12 mb-16 text-brand-blue"}>
                    <p className={"md:text-xl mb-6"}>{t("politica.p1")}</p>
                    <h2 className={"mb-2 font-semibold md:text-xl "}>
                        {t("politica.sb1")}
                    </h2>
                    <p className={"md:text-xl mb-6"}>{t("politica.p2")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p3")}</p>
                    <h2 className={"mb-2 font-semibold md:text-xl "}>
                        {t("politica.sb2")}
                    </h2>
                    <p className={"md:text-xl mb-6"}>{t("politica.p4")}</p>
                    <h2 className={"mb-2 font-semibold md:text-xl "}>
                        {t("politica.sb3")}
                    </h2>
                    <p className={"md:text-xl mb-6"}>{t("politica.p5")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p6")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p7")}</p>
                    <h2 className={"mb-2 font-semibold md:text-xl "}>
                        {t("politica.sb4")}
                    </h2>
                    <p className={"md:text-xl mb-6"}>{t("politica.p8")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p9")}</p>
                    <h2 className={"mb-2 font-semibold md:text-xl "}>
                        {t("politica.sb5")}
                    </h2>
                    <p className={"md:text-xl mb-6"}>{t("politica.p10")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p11")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p12")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p13")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p14")}</p>
                    <h2 className={"mb-2 font-semibold md:text-xl "}>
                        {t("politica.sb6")}
                    </h2>
                    <p className={"md:text-xl mb-6"}>{t("politica.p15")}</p>
                    <h2 className={"mb-2 font-semibold md:text-xl "}>
                        {t("politica.sb7")}
                    </h2>
                    <p className={"md:text-xl mb-6"}>{t("politica.p16")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p17")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p18")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p19")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p20")}</p>
                    <h2 className={"mb-2 font-semibold md:text-xl "}>
                        {t("politica.sb8")}
                    </h2>
                    <p className={"md:text-xl mb-6"}>{t("politica.p21")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p22")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p23")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p24")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p25")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p26")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p27")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p28")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p29")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p30")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p31")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p32")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p33")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p34")}</p>
                    <h2 className={"mb-2 font-semibold md:text-xl "}>
                        {t("politica.sb9")}
                    </h2>
                    <p className={"md:text-xl mb-6"}>{t("politica.p35")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p36")}</p>
                    <h2 className={"mb-2 font-semibold md:text-xl "}>
                        {t("politica.sb10")}
                    </h2>
                    <p className={"md:text-xl mb-6"}>{t("politica.p37")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p38")}</p>
                    <h2 className={"mb-2 font-semibold md:text-xl "}>
                        {t("politica.sb11")}
                    </h2>
                    <p className={"md:text-xl mb-6"}>{t("politica.p39")}</p>
                    <h2 className={"mb-2 font-semibold md:text-xl "}>
                        {t("politica.sb12")}
                    </h2>
                    <p className={"md:text-xl mb-6"}>{t("politica.p40")}</p>
                    <h2 className={"mb-2 font-semibold md:text-xl "}>
                        {t("politica.sb13")}
                    </h2>
                    <p className={"md:text-xl mb-6"}>{t("politica.p41")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p42")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p43")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p44")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p45")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p46")}</p>
                    <h2 className={"mb-2 font-semibold md:text-xl "}>
                        {t("politica.sb14")}
                    </h2>
                    <p className={"md:text-xl mb-6"}>{t("politica.p47")}</p>
                    <p className={"md:text-xl mb-6"}>{t("politica.p48")}</p>
                    <h2 className={"mb-2 font-semibold md:text-xl "}>
                        {t("politica.sb15")}
                    </h2>
                    <p className={"md:text-xl mb-6"}>{t("politica.p49")}</p>
                    <h2 className={"mb-2 font-semibold md:text-xl "}>
                        {t("politica.sb16")}
                    </h2>
                    <p className={"md:text-xl mb-6"}>{t("politica.p50")}</p>
                </div>
            </div>
            <div className={"w-full h-96 relative"}>
                <Image
                    src={"/images/polices.png"}
                    layout={"fill"}
                    objectFit={"cover"}
                    objectPosition={"center"}
                />
            </div>
        </main>
    );
}

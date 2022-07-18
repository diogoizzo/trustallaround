import Image from "next/image";
import { useTranslation } from "next-export-i18n";

export default function TabAereo() {
    const { t } = useTranslation();
    return (
        <div>
            <div>
                <div className="sm:hidden -mr-36">
                    <Image
                        src={"/images/aviao.png"}
                        alt={"avião de carga pesada"}
                        width={1022}
                        height={379}
                        layout={"intrinsic"}
                    />
                </div>
                <div
                    className={
                        "border-l-4 border-brand-orange pl-8 sm:pl-12 text-lg lg:text-2xl font-normal mt-5 sm:mt-12"
                    }
                >
                    <p>{t("servicos.content.tab2.p1")}</p>
                </div>
                <div className={"my-8 sm:mt-12 sm:mb-0"}>
                    <div className="hidden sm:block sm:float-right -mr-96">
                        <Image
                            src={"/images/aviao.png"}
                            alt={"avião de carga pesada"}
                            width={1122}
                            height={479}
                            layout={"intrinsic"}
                        />
                    </div>
                    <ul className="text-lg lg:text-2xl font-semibold">
                        <li className={"flex items-start mt-7"}>
                            <span className={"mr-7 shrink-0"}>
                                <Image
                                    src={"/icons/seta.svg"}
                                    alt={"seta"}
                                    width={55}
                                    height={55}
                                    layout={"intrinsic"}
                                />
                            </span>
                            <span>
                                <h3>
                                    {t("servicos.content.tab2.list.li1.titulo")}
                                </h3>
                                <p className={"font-normal mt-3"}>
                                    {t("servicos.content.tab2.list.li1.texto")}
                                </p>
                            </span>
                        </li>
                        <li className={"flex items-start mt-7"}>
                            <span className={"mr-7 shrink-0"}>
                                <Image
                                    src={"/icons/seta.svg"}
                                    alt={"seta"}
                                    width={55}
                                    height={55}
                                    layout={"intrinsic"}
                                />
                            </span>
                            <span>
                                <h3>
                                    {t("servicos.content.tab2.list.li2.titulo")}
                                </h3>
                                <p className={"font-normal mt-3"}>
                                    {t("servicos.content.tab2.list.li2.texto")}
                                </p>
                            </span>
                        </li>
                        <li className={"flex items-start mt-7"}>
                            <span className={"mr-7 shrink-0"}>
                                <Image
                                    src={"/icons/seta.svg"}
                                    alt={"seta"}
                                    width={55}
                                    height={55}
                                    layout={"intrinsic"}
                                />
                            </span>
                            <span>
                                <h3>
                                    {t("servicos.content.tab2.list.li3.titulo")}
                                </h3>
                                <p className={"font-normal mt-3"}>
                                    {t("servicos.content.tab2.list.li3.texto")}
                                </p>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

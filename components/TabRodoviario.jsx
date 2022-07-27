import Image from "next/image";
import { useTranslation } from "next-export-i18n";

export default function TabRodoviario() {
    const { t } = useTranslation();
    return (
        <div>
            <div>
                <div className="lg:hidden">
                    <Image
                        src={"/images/caminhao.png"}
                        alt={"caminhão de carga pesada"}
                        width={793}
                        height={464}
                        layout={"intrinsic"}
                    />
                </div>
                <div
                    className={
                        "border-l-4 border-brand-orange pl-8 lg:pl-12 text-lg lg:text-2xl font-normal mt-5 md:text-xl lg:mt-12"
                    }
                >
                    <p>{t("servicos.content.tab4.p1")}</p>
                </div>
                <div className={"my-8 lg:mt-12 lg:mb-0"}>
                    <div className="hidden lg:block float-right ml-6 mb-14">
                        <Image
                            src={"/images/caminhao.png"}
                            alt={"caminhão de carga pesada"}
                            width={793}
                            height={464}
                            layout={"intrinsic"}
                        />
                    </div>
                    <ul className="text-lg md:text-xl lg:text-2xl font-semibold">
                        <li className={"flex items-center mt-7"}>
                            <span className={"mr-7 shrink-0"}>
                                <Image
                                    src={"/icons/seta.svg"}
                                    alt={"seta"}
                                    width={55}
                                    height={55}
                                    layout={"intrinsic"}
                                />
                            </span>
                            <span className={"-mt-2"}>
                                <h3>{t("servicos.content.tab4.list.li1")}</h3>
                            </span>
                        </li>
                        <li className={"flex items-center mt-7"}>
                            <span className={"mr-7 shrink-0"}>
                                <Image
                                    src={"/icons/seta.svg"}
                                    alt={"seta"}
                                    width={55}
                                    height={55}
                                    layout={"intrinsic"}
                                />
                            </span>
                            <span className={"-mt-2"}>
                                <h3>{t("servicos.content.tab4.list.li2")}</h3>
                            </span>
                        </li>
                        <li className={"flex items-center mt-7"}>
                            <span className={"mr-7 shrink-0"}>
                                <Image
                                    src={"/icons/seta.svg"}
                                    alt={"seta"}
                                    width={55}
                                    height={55}
                                    layout={"intrinsic"}
                                />
                            </span>
                            <span className={"-mt-2"}>
                                <h3>{t("servicos.content.tab4.list.li3")}</h3>
                            </span>
                        </li>
                        <li className={"flex items-center mt-7"}>
                            <span className={"mr-7 shrink-0"}>
                                <Image
                                    src={"/icons/seta.svg"}
                                    alt={"seta"}
                                    width={55}
                                    height={55}
                                    layout={"intrinsic"}
                                />
                            </span>
                            <span className={"-mt-2"}>
                                <h3>{t("servicos.content.tab4.list.li4")}</h3>
                            </span>
                        </li>
                        <li className={"flex items-center mt-7"}>
                            <span className={"mr-7 shrink-0"}>
                                <Image
                                    src={"/icons/seta.svg"}
                                    alt={"seta"}
                                    width={55}
                                    height={55}
                                    layout={"intrinsic"}
                                />
                            </span>
                            <span className={"-mt-2"}>
                                <h3>{t("servicos.content.tab4.list.li5")}</h3>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

import Image from "next/image";
import { useTranslation } from "next-export-i18n";

export default function TabServicos({ servico }) {
    const { t } = useTranslation();
    return (
        <div className={"h-fit"}>
            <div
                className={"flex flex-col lg:flex-row relative justify-between"}
            >
                <div className={"w-full order-2 lg:order-1 lg:w-[55%]"}>
                    <div
                        className={
                            "border-l-4 border-brand-orange pl-8 lg:pl-12 text-lg md:text-xl lg:text-2xl font-normal mt-5 lg:mt-12"
                        }
                    >
                        <p>{servico.p1}</p>
                        <p className="mt-3">{servico.p2}</p>
                    </div>
                    <div className={"mt-12"}>
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
                                <span className={"-mt-2"}>{servico.li1}</span>
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
                                <span className={"-mt-2"}>{servico.li2}</span>
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
                                <span className={"-mt-2"}>{servico.li3}</span>
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
                                <span className={"-mt-2"}>{servico.li4}</span>
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
                                <span className={"-mt-2"}>{servico.li5}</span>
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
                                <span className={"-mt-2"}>{servico.li6}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="my-6 md:mt-12 lg:order-2 order-1 lg:w-[45%] desktop:w-[33%]   relative ">
                    <Image
                        className={"max-w-full object-contain "}
                        src={"/images/circulo-servicos.svg"}
                        alt={
                            "circulo com vários ícones, mostrando todos os serviços possíveis"
                        }
                        width={654}
                        height={599}
                        layout={"responsive"}
                    />
                </div>
            </div>

            <div className="w-full md:w-[80%] desktop:w-[70%] mx-auto relative flex flex-col md:flex-row justify-center py-14 md:py-20">
                <div className="md:absolute flex flex-col items-center right-[3rem] top-[2rem]  lg:right-[14rem] desktop:right-[28rem] lg:top-20">
                    <h3 className="text-4xl md:text-5xl desktop:text-7xl text-brand-blue">
                        {t("servicos.content.tab1.map")}
                    </h3>
                    <h3 className="text-2xl mb-4 md:text-3xl desktop:text-4xl mt-1 text-brand-orange">
                        Brazil Map
                    </h3>
                </div>
                <div
                    className={
                        "w-full mb-12 md:mb-0 mx-auto relative lg:h-[700px] "
                    }
                >
                    <Image
                        className="object-contain max-w-full "
                        src={"/images/brasil-servicos.svg"}
                        alt={"mapa do brasil com rotas comerciais"}
                        width={1037}
                        height={569}
                        layout={"responsive"}
                    />
                </div>
            </div>
        </div>
    );
}

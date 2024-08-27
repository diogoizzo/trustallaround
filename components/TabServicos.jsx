import Image from "next/image";

export default function TabServicos({ servico }) {
    return (
        <div>
            <div className="lg:float-right lg:mb-12">
                <Image
                    src={"/images/circulo-servicos.svg"}
                    alt={
                        "circulo com vários ícones, mostrando todos os serviços possíveis"
                    }
                    width={654}
                    height={599}
                    layout={"intrinsic"}
                />
            </div>
            <div
                className={
                    "border-l-4 border-brand-orange pl-8 lg:pl-12 text-lg md:text-xl lg:text-2xl font-normal mt-5 lg:mt-12"
                }
            >
                <p>{servico.p1}</p>
                <p className="mt-3">{servico.p2}</p>
            </div>
            <div className={"mt-6 lg:mt-12"}>
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
            <div className="clear-both"></div>
            <div className="w-fit mx-auto relative flex justify-center py-20">
                <div className="absolute flex flex-col items-center right-[14rem] top-20">
                    <h3 className="text-5xl text-brand-blue">Mapa do Brasil</h3>
                    <h3 className="text-3xl mt-1 text-brand-orange">
                        Brazil Map
                    </h3>
                </div>
                <Image
                    className=" mx-auto"
                    src={"/images/brasil-servicos.svg"}
                    alt={"mapa do brasil com rotas comerciais"}
                    width={1037}
                    height={569}
                    layout={"intrinsic"}
                />
            </div>
        </div>
    );
}

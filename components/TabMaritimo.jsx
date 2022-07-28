import Image from "next/image";

export default function TabMaritimo({ servico }) {
    return (
        <div>
            <div>
                <div className="lg:hidden text-center">
                    <Image
                        src={"/images/navio.png"}
                        alt={"navio de carga com vários containers"}
                        width={666}
                        height={446}
                        layout={"intrinsic"}
                        unoptimized={true}
                    />
                </div>
                <div
                    className={
                        "border-l-4 border-brand-orange pl-8 lg:pl-12 text-lg md:text-xl lg:text-2xl font-normal mt-5 lg:mt-12"
                    }
                >
                    <p>{servico.p1}</p>
                    <p className={"mt-3"}>{servico.p2}</p>
                </div>
                <div className={"my-8 lg:mt-12 lg:mb-0"}>
                    <div className="hidden lg:block lg:float-right ml-6 mb-14">
                        <Image
                            src={"/images/navio.png"}
                            alt={"navio de carga com vários containers"}
                            width={666}
                            height={446}
                            layout={"intrinsic"}
                        />
                    </div>
                    <ul className="text-lg md:text-xl lg:text-2xl font-semibold">
                        <li className={"flex items-start lg:mt-7"}>
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
                                <h3>{servico.li1}</h3>
                                <p className={"font-normal mt-3"}>
                                    {servico.texto1}
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
                                <h3>{servico.li2}</h3>
                                <p className={"font-normal mt-3"}>
                                    {servico.texto2}
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
                                <h3>{servico.li3}</h3>
                                <p className={"font-normal mt-3"}>
                                    {servico.texto3}
                                </p>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

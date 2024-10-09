import Image from "next/image";

export default function TabRodoviario({ servico }) {
    return (
        <div>
            <div className={"flex flex-col md:flex-row justify-between"}>
                <div className={"w-full md:w-[65%] pb-20 order-2 md:order-1"}>
                    <div
                        className={
                            "border-l-4 border-brand-orange pl-8 lg:pl-12 text-lg lg:text-2xl font-normal mt-5 md:text-xl lg:mt-12"
                        }
                    >
                        <p>{servico.p1}</p>
                    </div>
                    <div className={"my-8 lg:mt-12 lg:mb-0"}>
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
                                    <h3>{servico.li1}</h3>
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
                                    <h3>{servico.li2}</h3>
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
                                    <h3>{servico.li3}</h3>
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
                                    <h3>{servico.li4}</h3>
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
                                    <h3>{servico.li5}</h3>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="md:order-2">
                    {/* <div className="lg:hidden">
                        <Image
                            src={"/images/caminhao.png"}
                            alt={"caminhão de carga pesada"}
                            width={793}
                            height={464}
                            layout={"intrinsic"}
                        />
                    </div> */}
                    <div className="md:mt-12 pb-5">
                        <Image
                            src={"/images/caminhao.png"}
                            alt={"caminhão de carga pesada"}
                            width={793}
                            height={464}
                            layout={"intrinsic"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

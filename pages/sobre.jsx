import Image from "next/image";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import NextLink from "../components/NextLink";

export default function Sobre() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    return (
        <>
            <div className="px-[6%] mt-3 lg:mt-8">
                <h1 className="text-brand-orange text-5xl font-semibold text-center lg:text-left lg:ml-12">
                    {t("sobre.titulo")}
                </h1>

                <div className="mt-8 lg:mt-12 w-full relative text-center">
                    <div className="md:float-right   relative inline-block w-[325px] h-[200px]  md:w-[570px] md:h-[350px] md:ml-6 md:mb-4">
                        <Image
                            alt={"mapa mundi com as rotas de transporte"}
                            src="/images/mapa-sobre.svg"
                            // width={506}
                            // height={323}
                            layout="fill"
                        />
                    </div>
                    <div
                        className={
                            "border-l-4 border-brand-orange text-left  mt-8 lg:mt-0 text-brand-blue pr-4 lg:pr-8 order-2 lg:order-1"
                        }
                    >
                        <p
                            className="text-lg lg:text-2xl font-normal ml-8 lg:ml-12"
                            dangerouslySetInnerHTML={{
                                __html: t("sobre.p1"),
                            }}
                        ></p>
                        <p
                            className="text-lg lg:text-2xl font-normal ml-8 lg:ml-12 mt-4 lg:mt-8"
                            dangerouslySetInnerHTML={{
                                __html: t("sobre.p2"),
                            }}
                        ></p>
                        <p
                            className="text-lg lg:text-2xl font-normal ml-8 lg:ml-12 mt-4 lg:mt-8"
                            dangerouslySetInnerHTML={{
                                __html: t("sobre.p3"),
                            }}
                        ></p>
                        <p
                            className="text-lg lg:text-2xl font-normal ml-8 lg:ml-12 mt-4 lg:mt-8"
                            dangerouslySetInnerHTML={{
                                __html: t("sobre.p4"),
                            }}
                        ></p>
                        <p
                            className="text-lg lg:text-2xl font-normal ml-8 lg:ml-12 mt-4 lg:mt-8"
                            dangerouslySetInnerHTML={{
                                __html: t("sobre.p5"),
                            }}
                        ></p>
                    </div>
                    <div className="clear-both"></div>
                    <div className="relative h-[12rem] mt-12 md:h-[30rem] md:mt-20">
                        {query?.lang === "pt" ? (
                            <Image
                                src="/images/quadro-fale-pt.svg"
                                layout="fill"
                                alt="Quadro com possíveis perguntas para contato"
                            />
                        ) : query?.lang === "en" ? (
                            <Image
                                src="/images/quadro-fale-en.svg"
                                layout="fill"
                                alt="Quadro com possíveis perguntas para contato"
                            />
                        ) : (
                            <Image
                                src="/images/quadro-fale-es.svg"
                                layout="fill"
                                alt="Quadro com possíveis perguntas para contato"
                            />
                        )}
                    </div>
                    <div className="w-full text-center mt-10">
                        <NextLink
                            className={`inline-flex px-4 py-2 items-center  border rounded-xl transition-colors border-brand-blue hover:bg-brand-orange-hover text-brand-blue`}
                            href={{ pathname: "/contato", query: query }}
                            as={t("nav.paths.contato")}
                        >
                            <Image
                                className=""
                                src={"/icons/contact.svg"}
                                alt={"icone de contato pelo whatsapp"}
                                width={40}
                                height={40}
                                layout="fixed"
                            />
                            <p
                                className={
                                    "ml-3 w-full text-center  sm:w-fit uppercase  "
                                }
                            >
                                {t("sobre.btn")}
                            </p>
                        </NextLink>
                    </div>

                    {/* <div className="w-full lg:min-w-[45%] lg:order-2">
                        <Image
                            alt={"mapa mundi com as rotas de transporte"}
                            src="/images/mapa-sobre.svg"
                            width={506}
                            height={323}
                            layout={"responsive"}
                        />
                    </div> */}
                </div>
            </div>
            <div className="relative mt-12 w-full min-h-[170px] md:min-h-[200px] lg:mt-24">
                <Image
                    src="/images/juntos.png"
                    alt={"várias mãos segurando a logo do trust all around"}
                    layout={"fill"}
                    objectFit={"cover"}
                    objectPosition={"center"}
                    priority={true}
                />
            </div>
        </>
    );
}

import Image from "next/image";
import AdressItem from "../components/AdressItem";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import NextLink from "../components/NextLink";

export default function Contato() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    return (
        //todo solicitar e-mail para o qual será enviado o formulário desta página
        <div className={"flex flex-col lg:flex-row px-[6%] mt-3 lg:mt-8"}>
            <div className={"relative flex flex-col w-full lg:w-[55%]"}>
                <h1
                    className={
                        "text-5xl font-semibold text-brand-orange text-center lg:text-left lg:ml-12"
                    }
                >
                    {t("contato.titulo")}
                </h1>
                <div
                    className={
                        "relative h-[300px] md:h-[500px] min-w-[100%] lg:w-full lg:h-full mt-8 lg:mt-12"
                    }
                >
                    <Image
                        src={"/images/moca_sem_fundo.png"}
                        alt={"mulher oferecendo um aperto de mão"}
                        priority={true}
                        layout={"fill"}
                        objectFit={"cover"}
                        objectPosition={"center"}
                    />
                </div>
            </div>
            <div className={"lg:w-[45%] flex flex-col mt-8 lg:mt-0"}>
                <div>
                    <div className="relative h-[670px] lg:h-fit w-full lg:min-h-[623px] lg:min-w-[677px] ">
                        <Image
                            src={"/images/quadro-branco-contato.png"}
                            alt={"moldura do formulário de contato"}
                            layout={"fill"}
                        />

                        <form
                            className={
                                "absolute flex space-y-6 flex-col top-0 left-1/2 transform -translate-x-1/2 mt-16 w-[90%]"
                            }
                            action=""
                        >
                            <input
                                type="text"
                                id={"nome"}
                                placeholder={t("contato.form.nome") + "*"}
                                name="nome"
                                className={
                                    "h-12 placeholder:text-xl text-lg text-brand-gray rounded-xl border-gray-400 border-1 focus:outline-none focus:border-brand-orange focus:border-1 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
                                }
                            />
                            <input
                                type="email"
                                id={"email"}
                                placeholder={t("contato.form.email") + "*"}
                                name="email"
                                className={
                                    "h-12 placeholder:text-xl text-lg text-brand-gray rounded-xl border-gray-400  border-1 focus:outline-none focus:border-brand-orange focus:border-1 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
                                }
                            />
                            <input
                                type="text"
                                id={"assunto"}
                                placeholder={t("contato.form.assunto") + "*"}
                                name="assunto"
                                className={
                                    "h-12 placeholder:text-xl text-lg text-brand-gray rounded-xl border-gray-400  border-1 focus:outline-none focus:border-brand-orange focus:border-1 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
                                }
                            />
                            <textarea
                                name="corpo"
                                id="corpo"
                                cols="30"
                                rows="7"
                                placeholder={t("contato.form.ajuda") + "*"}
                                className={
                                    "placeholder:text-xl text-lg text-brand-gray rounded-xl border-gray-400  border-1 focus:outline-none focus:border-brand-orange focus:border-1 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 resize-none"
                                }
                            ></textarea>
                            <div
                                className={
                                    "flex flex-col lg:flex-row justify-between"
                                }
                            >
                                <button
                                    type={"submit"}
                                    className={
                                        "h-14 bg-brand-gray self-center  hover:bg-[#888888] font-medium text-white w-40 rounded-xl text-xl focus:outline-none focus:border-brand-orange focus:border-1 focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
                                    }
                                >
                                    {t("contato.form.btnEnviar")}
                                </button>
                                <div
                                    className={"flex items-center mt-4 lg:mt-0"}
                                >
                                    <Image
                                        src="/icons/relogio.svg"
                                        alt="relógio"
                                        height={45}
                                        width={45}
                                        layout={"intrinsic"}
                                    />
                                    <p className={"ml-4 text-brand-gray"}>
                                        {t("contato.form.atendimento")}
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div
                    className={
                        "flex flex-col lg:flex-row w-full my-6 justify-between lg:min-w-[677px] "
                    }
                >
                    <div
                        className={
                            "flex flex-col text-brand-gray text-lg order-2 lg:order-1"
                        }
                    >
                        <h2
                            className={
                                "text-2xl text-center lg:text-left font-medium mt-2 lg:mt-0 mb-3 "
                            }
                        >
                            Trust Gestão em Assessoria Logística LTDA.
                        </h2>
                        {/*todo não consigo retirar os ícones corretos dos contatos no XD*/}
                        <AdressItem
                            src="/icons/e-mail.svg"
                            alt="email"
                            text={"contato@trustgestao.com.br"}
                        />
                        <AdressItem
                            src={"/icons/telefone.svg"}
                            alt={"Telefones"}
                            text={"+55 (11) 3796-1845 / +55 (11) 98628-5531"}
                        />
                        <AdressItem
                            src={"/icons/site.svg"}
                            alt={"Site"}
                            text={"www.trustallaround.com.br"}
                        />
                        <AdressItem
                            src={"/icons/endereco.svg"}
                            alt={"Endereço"}
                            text={
                                "Rua Umuarama, nº. 382, Vila Prudente, São Paulo, BR"
                            }
                        />
                    </div>
                    <div
                        className={
                            "w-[174px] h-[167px] relative self-center order-1 lg:order-2 "
                        }
                    >
                        {/*todo logo vertical enviada não esta em svg*/}
                        <NextLink
                            href={{ pathname: "/", query: query }}
                            as="/"
                            className={"cursor-pointer"}
                        >
                            <Image
                                src={"/images/logoVertical.svg"}
                                alt={"Logo vertical da trust all around"}
                                layout={"fill"}
                            />
                        </NextLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

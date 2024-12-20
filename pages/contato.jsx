import Image from "next/image";
import AdressItem from "../components/AdressItem";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import NextLink from "../components/NextLink";
import Email from "../components/Email";
import { useRef, useState } from "react";

function wait(tempo) {
    return new Promise((resolve) => setTimeout(resolve, tempo));
}

export default function Contato() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    const quadro = useRef(null);
    const confirmation = useRef(null);
    const alert = useRef(null);
    const nameInput = useRef(null);
    const emailInput = useRef(null);
    const subjectInput = useRef(null);
    const messageInput = useRef(null);
    const [form, setForm] = useState({
        nome: "",
        email: "",
        assunto: "",
        corpo: "",
    });

    async function handleSubmit(e) {
        e.preventDefault();
        confirmation.current.style.display = "none";
        alert.current.style.display = "none";
        if (screen.width < 800) {
            quadro.current.style.height = "720px";
        } else {
            quadro.current.style.height = "660px";
        }
        if (form.nome == "") {
            nameInput.current.focus();
            alert.current.style.display = "block";
            return;
        }
        if (form.email == "") {
            emailInput.current.focus();
            alert.current.style.display = "block";
            return;
        }
        if (form.assunto == "") {
            subjectInput.current.focus();
            alert.current.style.display = "block";
            return;
        }
        if (form.corpo == "") {
            messageInput.current.focus();
            alert.current.style.display = "block";
            return;
        }
        confirmation.current.style.display = "block";
        setForm({
            nome: "",
            email: "",
            assunto: "",
            corpo: "",
        });
    }

    return (
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
                    <div
                        ref={quadro}
                        className="relative h-[670px] lg:h-fit w-full lg:min-h-[623px] lg:min-w-[677px] border-2 border-brand-gray/20 rounded-md shadow-lg "
                    >
                        <div className="absolute -top-[1px] -left-[1px] rounded-tl-md w-0 h-0 border-t-[70px] border-t-brand-orange border-r-[70px] border-r-transparent"></div>

                        <form
                            className={
                                "relative flex space-y-6 flex-col top-0 left-1/2 transform -translate-x-1/2 mt-16 w-[90%]"
                            }
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                ref={nameInput}
                                id={"nome"}
                                placeholder={t("contato.form.nome") + "*"}
                                name="nome"
                                className={
                                    "h-12 placeholder:text-xl placeholder:text-brand-gray/60 text-lg text-brand-gray rounded-xl border-brand-gray/40 border focus:outline-none focus:border-brand-orange focus:border-1 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
                                }
                                value={form.nome}
                                onChange={(e) => {
                                    setForm({ ...form, nome: e.target.value });
                                    console.log(form);
                                }}
                            />
                            <input
                                ref={emailInput}
                                type="email"
                                id={"email"}
                                placeholder={t("contato.form.email") + "*"}
                                name="email"
                                className={
                                    "h-12 placeholder:text-xl text-lg placeholder:text-brand-gray/60  text-brand-gray rounded-xl border-brand-gray/40  border-1 focus:outline-none focus:border-brand-orange focus:border-1 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
                                }
                                value={form.email}
                                onChange={(e) => {
                                    setForm({ ...form, email: e.target.value });
                                    console.log(form);
                                }}
                            />
                            <input
                                type="text"
                                ref={subjectInput}
                                id={"assunto"}
                                placeholder={t("contato.form.assunto") + "*"}
                                name="assunto"
                                className={
                                    "h-12 placeholder:text-xl text-lg placeholder:text-brand-gray/60  text-brand-gray rounded-xl border-brand-gray/40   border-1 focus:outline-none focus:border-brand-orange focus:border-1 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
                                }
                                value={form.assunto}
                                onChange={(e) => {
                                    setForm({
                                        ...form,
                                        assunto: e.target.value,
                                    });
                                    console.log(form);
                                }}
                            />
                            <textarea
                                ref={messageInput}
                                name="corpo"
                                id="corpo"
                                cols="30"
                                rows="7"
                                placeholder={t("contato.form.ajuda") + "*"}
                                className={
                                    "placeholder:text-xl text-lg placeholder:text-brand-gray/60 text-brand-gray rounded-xl border-brand-gray/40  border-1 focus:outline-none focus:border-brand-orange focus:border-1 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 resize-none"
                                }
                                value={form.corpo}
                                onChange={(e) => {
                                    setForm({ ...form, corpo: e.target.value });
                                    console.log(form);
                                }}
                            ></textarea>
                            <div
                                className={
                                    "flex flex-col lg:flex-row justify-between"
                                }
                            >
                                <button
                                    type={"submit"}
                                    className={
                                        "h-14 bg-brand-orange self-center  hover:bg-brand-orange/80 font-medium text-white w-40 rounded-xl text-xl focus:outline-none focus:border-brand-orange focus:border-1 focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
                                    }
                                >
                                    {t("contato.form.btnEnviar")}
                                </button>
                                <div
                                    className={
                                        "flex items-center justify-center ml-3 mt-4 lg:mt-0"
                                    }
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
                            <div>
                                <p
                                    ref={confirmation}
                                    className={
                                        "font-semibold text-center text-green-600 hidden"
                                    }
                                >
                                    {t("contato.form.feedBack")}
                                </p>
                                <p
                                    ref={alert}
                                    className={
                                        "font-semibold text-center text-brand-orange hidden"
                                    }
                                >
                                    {t("contato.form.alert")}
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
                <div
                    className={
                        "flex flex-col lg:flex-row w-full my-6 justify-between lg:min-w-[677px] pb-8 md:pb-20 lg:pb-6 "
                    }
                >
                    <div
                        className={
                            "flex flex-col text-center text-brand-gray text-lg order-2 lg:order-1 lg:pr-[16px] "
                        }
                    >
                        <h2
                            className={
                                "hidden lg:block text-2xl lg:text-left uppercase font-bold mt-2 lg:mt-2 mb-1 "
                            }
                        >
                            Trust all around
                        </h2>
                        <p className="text-xl lg:text-left mt-3 lg:mt-0 mb-2">
                            {t("contato.info")}
                        </p>
                        <Email
                            src="/icons/e-mail.svg"
                            alt="email"
                            text={"comercial@trustgestao.log.br"}
                        />
                        <AdressItem
                            src={"/icons/telefone.svg"}
                            alt={"Telefones"}
                            text={"+55 (11) 2021-3894 / +55 (11) 96597-8823"}
                        />
                        <AdressItem
                            src={"/icons/site.svg"}
                            alt={"Site"}
                            text={"www.trustallaround.com.br"}
                        />
                        <AdressItem
                            src={"/icons/endereco.svg"}
                            alt={"Endereço"}
                            text={t("contato.end")}
                        />
                    </div>
                    <div
                        className={
                            "w-[174px] h-[167px] relative self-center mt-6 order-1  lg:order-2 "
                        }
                    >
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

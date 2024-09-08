import { useTranslation } from "next-export-i18n";
import NavGaleria from "../../../components/NavGaleria";
import TriviaDisplay from "../../../components/TriviaDisplay";

export default function Servicos() {
    const { t } = useTranslation();
    return (
        <div className="w-full overflow-hidden">
            <div
                className={
                    "w-full mt-3 lg:mt-8 px-[6%] mx-auto text-brand-blue"
                }
            >
                <div>
                    <div className={"flex flex-col lg:flex-row lg:items-end"}>
                        <NavGaleria />
                    </div>
                    <div className={"my-12 "}>
                        <div
                            className={
                                "border-l-4 border-brand-orange space-y-8 pl-8 lg:pl-12 pb-8 text-lg md:text-xl lg:text-2xl font-normal mt-5 lg:mt-12 "
                            }
                        >
                            <TriviaDisplay
                                title={t("galeria.comex.trivia1.title")}
                                imgAlt={"caminhão em uma rodovia"}
                                imgSrc={"/images/caminhao.jpg"}
                                text={t("galeria.comex.trivia1.content")}
                            />
                            <TriviaDisplay
                                title={t("galeria.comex.trivia2.title")}
                                imgAlt={"bandeira do Brasil e da China"}
                                imgSrc={"/images/bandeira.jpg"}
                                text={t("galeria.comex.trivia2.content")}
                            />
                            <TriviaDisplay
                                title={t("galeria.comex.trivia3.title")}
                                imgAlt={
                                    "imagem mostrando um home de negócios com conexões no mundo inteiro"
                                }
                                imgSrc={"/images/conexoes.jpg"}
                                text={t("galeria.comex.trivia3.content")}
                            />
                            <TriviaDisplay
                                title={t("galeria.comex.trivia4.title")}
                                imgAlt={
                                    "imagem com uma tabela mostrando os icoterms"
                                }
                                imgSrc={"/images/icoterms.jpg"}
                                text={t("galeria.comex.trivia4.content")}
                            />
                            <TriviaDisplay
                                title={t("galeria.comex.trivia5.title")}
                                imgAlt={
                                    "imagem mostrando containers em um porto"
                                }
                                imgSrc={"/images/porto.jpg"}
                                text={t("galeria.comex.trivia5.content")}
                            />
                            <TriviaDisplay
                                title={t("galeria.comex.trivia6.title")}
                                imgAlt={
                                    "imagem mostrando duas pessoas apertando as mãos"
                                }
                                imgSrc={"/images/acordo.jpg"}
                                text={t("galeria.comex.trivia6.content")}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

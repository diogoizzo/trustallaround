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
                    <div className={"my-12"}>
                        <div
                            className={
                                "border-l-4 border-brand-orange space-y-8 pl-8 lg:pl-12 pb-8 text-lg md:text-xl lg:text-2xl font-normal mt-5 lg:mt-12 "
                            }
                        >
                            <TriviaDisplay
                                title={"Teste de título"}
                                imgAlt={"caminhão em uma rodovia"}
                                imgSrc={"/images/caminhao.jpg"}
                                text={
                                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sint id nulla numquam hic in quibusdam doloribus ut aliquid, fugit beatae iste tenetur quas neque labore sed architecto ad aliquam dicta ullam corrupti alias laudantiumaspernatur incidunt. Inventore animi earum recusandae  consequatur voluptatem optio voluptate tenetur facilis provident nesciunt. Natus a sequi molestiae aliquid tenetur voluptate quia harum in est?"
                                }
                            />
                            <TriviaDisplay
                                title={"Teste de título"}
                                imgAlt={"bandeira do Brasil e da China"}
                                imgSrc={"/images/bandeira.jpg"}
                                text={
                                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sint id nulla numquam hic in quibusdam doloribus ut aliquid, fugit beatae iste tenetur quas neque labore sed architecto ad aliquam dicta ullam corrupti alias laudantiumaspernatur incidunt. Inventore animi earum recusandae  consequatur voluptatem optio voluptate tenetur facilis provident nesciunt. Natus a sequi molestiae aliquid tenetur voluptate quia harum in est?"
                                }
                            />
                            <TriviaDisplay
                                title={"Teste de título"}
                                imgAlt={
                                    "imagem mostrando um home de negócios com conexões no mundo inteiro"
                                }
                                imgSrc={"/images/conexoes.jpg"}
                                text={
                                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sint id nulla numquam hic in quibusdam doloribus ut aliquid, fugit beatae iste tenetur quas neque labore sed architecto ad aliquam dicta ullam corrupti alias laudantiumaspernatur incidunt. Inventore animi earum recusandae  consequatur voluptatem optio voluptate tenetur facilis provident nesciunt. Natus a sequi molestiae aliquid tenetur voluptate quia harum in est?"
                                }
                            />
                            <TriviaDisplay
                                title={"Teste de título"}
                                imgAlt={
                                    "imagem com uma tabela mostrando os icoterms"
                                }
                                imgSrc={"/images/icoterms.jpg"}
                                text={
                                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sint id nulla numquam hic in quibusdam doloribus ut aliquid, fugit beatae iste tenetur quas neque labore sed architecto ad aliquam dicta ullam corrupti alias laudantiumaspernatur incidunt. Inventore animi earum recusandae  consequatur voluptatem optio voluptate tenetur facilis provident nesciunt. Natus a sequi molestiae aliquid tenetur voluptate quia harum in est?"
                                }
                            />
                            <TriviaDisplay
                                title={"Teste de título"}
                                imgAlt={
                                    "imagem mostrando containers em um porto"
                                }
                                imgSrc={"/images/porto.jpg"}
                                text={
                                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sint id nulla numquam hic in quibusdam doloribus ut aliquid, fugit beatae iste tenetur quas neque labore sed architecto ad aliquam dicta ullam corrupti alias laudantiumaspernatur incidunt. Inventore animi earum recusandae  consequatur voluptatem optio voluptate tenetur facilis provident nesciunt. Natus a sequi molestiae aliquid tenetur voluptate quia harum in est?"
                                }
                            />
                            <TriviaDisplay
                                title={"Teste de título"}
                                imgAlt={
                                    "imagem mostrando duas pessoas apertando as mãos"
                                }
                                imgSrc={"/images/acordo.jpg"}
                                text={
                                    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius sint id nulla numquam hic in quibusdam doloribus ut aliquid, fugit beatae iste tenetur quas neque labore sed architecto ad aliquam dicta ullam corrupti alias laudantiumaspernatur incidunt. Inventore animi earum recusandae  consequatur voluptatem optio voluptate tenetur facilis provident nesciunt. Natus a sequi molestiae aliquid tenetur voluptate quia harum in est?"
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

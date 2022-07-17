import Image from "next/image";
import { useTranslation } from "next-export-i18n";
import { useState } from "react";
import DialogPainel from "../components/DialogPainel";
import BtnPais from "../components/BtnPais";

export default function Portos() {
    const { t } = useTranslation();
    const DialogContent = {
        americaDoNorte: {
            titulo: t("portos.continentes.americaDoNorte"),
            paises: [
                {
                    nome: t("portos.paises.mexico"),
                    bandeira: "/images/flags/Mexico.png",
                    portos: "Altamira, Tampico e Veracruz.",
                },
                {
                    nome: t("portos.paises.eua"),
                    bandeira: "/images/flags/USA.png",
                    portos:
                        "Baltimore, Boston, Browsville, Cape Canaveral, Charleston," +
                        "Fernandinha Beach, Freeport, Galveston, Houston, Jacksonville, Mobile, New Haven, New Orleans, New York, Norfolk, Oakland, Port Everglades, Portland, San Francisco, Savannah, Seattle, Philadelphia, Tacomã, Tampa e Wilmongton.",
                },
                {
                    nome: t("portos.paises.canada"),
                    bandeira: "/images/flags/Canada.png",
                    portos: "Halifax, Hamilton, Montreal, St John's, Toronto e Vancouver.",
                },
            ],
        },
        americaCentral: {
            titulo: t("portos.continentes.americaCentral"),
            paises: [
                {
                    nome: t("portos.paises.costaRica"),
                    bandeira: "/images/flags/costa-rica.png",
                    portos: "Puerto Caldera e Puerto Limon",
                },
                {
                    nome: t("portos.paises.guatemala"),
                    bandeira: "/images/flags/guatemala.png",
                    portos: "Puerto Quetzal e Sto Tomás de Castilha",
                },
                {
                    nome: t("portos.paises.jamaica"),
                    bandeira: "/images/flags/Jamaica.png",
                    portos: "Kingston",
                },
                {
                    nome: t("portos.paises.nicaragua"),
                    bandeira: "/images/flags/Nicaragua.png",
                    portos: "Corinto e Manágua",
                },
            ],
        },
        americaDoSul: {
            titulo: t("portos.continentes.americaDoSul"),
            paises: [
                {
                    nome: t("portos.paises.argentina"),
                    bandeira: "/images/flags/Argentina.png",
                    portos: "Buenos Aires e Rosário",
                },
                {
                    nome: t("portos.paises.brasil"),
                    bandeira: "/images/flags/Brasil.png",
                    portos: "Belém, Fortaleza, Itajaí, Rio Grande, Rio de Janeiro, Itaguaí, Manaus, Maceió, Natal, Paranaguá, Recife, Salvador, Santos, Vitória, Itapoá, Navegantes, Suape",
                },
                {
                    nome: t("portos.paises.colombia"),
                    bandeira: "/images/flags/Colombia.png",
                    portos: "Barranquilla, Buenaventura, Cartagena ",
                },
                {
                    nome: t("portos.paises.chile"),
                    bandeira: "/images/flags/Chile.png",
                    portos: "San Antonio,, Santiago e  Valparaiso",
                },
            ],
        },
        africa: {
            titulo: t("portos.continentes.africa"),
            paises: [
                {
                    nome: t("portos.paises.africaDoSul"),
                    bandeira: "/images/flags/africa-do-sul.png",
                    portos: "Cape Town, Durban, Johannesburg, Port Elizabeth e Luanda",
                },
                {
                    nome: t("portos.paises.quenia"),
                    bandeira: "/images/flags/Quenia.png",
                    portos: "Mombasa e Nairobi",
                },
                {
                    nome: t("portos.paises.mocambique"),
                    bandeira: "/images/flags/Mocambique.png",
                    portos: "Beira e Maputo",
                },
                {
                    nome: t("portos.paises.nigeria"),
                    bandeira: "/images/flags/Nigeria.png",
                    portos: "Lagos",
                },
            ],
        },
        mediterraneo: {
            titulo: t("portos.continentes.mediterraneo"),
            paises: [
                {
                    nome: t("portos.paises.egito"),
                    bandeira: "/images/flags/egito.png",
                    portos: "Alexandria e Port Said",
                },
                {
                    nome: t("portos.paises.italia"),
                    bandeira: "/images/flags/Italia.png",
                    portos: "Genova, La Spezia, Livorno, Nápoles",
                },
                {
                    nome: t("portos.paises.israel"),
                    bandeira: "/images/flags/israel.png",
                    portos: "Asdobe e Haifa",
                },
                {
                    nome: t("portos.paises.turquia"),
                    bandeira: "/images/flags/Turquia.png",
                    portos: "Istambul e Mersin",
                },
            ],
        },
        europa: {
            titulo: t("portos.continentes.europa"),
            paises: [
                {
                    nome: t("portos.paises.alemanha"),
                    bandeira: "/images/flags/Alemanha.png",
                    portos: "Bremenhaven, Hamburgo ",
                },
                {
                    nome: t("portos.paises.belgica"),
                    bandeira: "/images/flags/Belgica.png",
                    portos: "Antuérpia",
                },
                {
                    nome: t("portos.paises.espanha"),
                    bandeira: "/images/flags/Espanha.png",
                    portos: "Algeciras, Barcelona, Valencia, Bibao",
                },
                {
                    nome: t("portos.paises.inglaterra"),
                    bandeira: "/images/flags/Inglaterra.png",
                    portos: "Felixstowe, Liverpool, Londres,  Manchester, Portmouth e Tilbury",
                },
            ],
        },
        asia: {
            titulo: t("portos.continentes.asia"),
            paises: [
                {
                    nome: t("portos.paises.china"),
                    bandeira: "/images/flags/China.png",
                    portos: "Dalian Guangzhou, Shanghai, Ningbo, Shenzhen,  Quingdao,  e Tianjin",
                },
                {
                    nome: t("portos.paises.japao"),
                    bandeira: "/images/flags/Japao.png",
                    portos: "Kobe, Nagoya, Osaka, Tokyo e Yokohama",
                },
                {
                    nome: t("portos.paises.coreiaDoSul"),
                    bandeira: "/images/flags/Coreia.png",
                    portos: "Buan, Incheon, Yeosu e Ulsan",
                },
                {
                    nome: t("portos.paises.taiwan"),
                    bandeira: "/images/flags/Tawain.png",
                    portos: "Kaohsiung, Keelung e Taichung",
                },
            ],
        },
        extremoOriente: {
            titulo: t("portos.continentes.extremoOriente"),
            paises: [
                {
                    nome: t("portos.paises.bangladesh"),
                    bandeira: "/images/flags/Bangladesh.png",
                    portos: "Chalna, Chittagong e Dhaka",
                },
                {
                    nome: t("portos.paises.emiradosArabes"),
                    bandeira: "/images/flags/emirados-arabes.png",
                    portos: "Abu Dhabi, Dubai e Sharjah",
                },
                {
                    nome: t("portos.paises.india"),
                    bandeira: "/images/flags/india.png",
                    portos: "Calcutá, Cochin, Madras, Mumbai e Jawaharlal",
                },
                {
                    nome: t("portos.paises.paquistao"),
                    bandeira: "/images/flags/Paquistao.png",
                    portos: "Karachi e Port Qasim",
                },
            ],
        },
        australia: {
            titulo: t("portos.continentes.australia"),
            paises: [
                {
                    nome: t("portos.paises.australia"),
                    bandeira: "/images/flags/Australia.png",
                    portos: "Adelaide, Brisbane, Melbourne e Sidney",
                },
                {
                    nome: t("portos.paises.novaZelandia"),
                    bandeira: "/images/flags/novazelandia.png",
                    portos: "Auckland e Tauranga",
                },
            ],
        },
    };

    let [isOpen, setIsOpen] = useState(false);
    let [content, setContent] = useState(DialogContent.americaDoNorte);

    function openModal() {
        setIsOpen(true);
    }

    return (
        <main>
            <div className="relative px-[6%] my-8">
                <DialogPainel
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                    content={content}
                />
                <h1 className="text-brand-orange text-5xl font-semibold ml-12">
                    {t("portos.titulo")}
                </h1>
                <div className="relative max-w-screen-2xl mx-auto text-center mt-4">
                    <Image
                        src={"/images/mapa_portos.png"}
                        alt={
                            "mapa mundi com a localização dos portos da trust all around"
                        }
                        height={700}
                        width={1556}
                        layout={"intrinsic"}
                        priority
                    />
                    <span
                        className={"absolute top-[16%] left-[-5%]"}
                        onClick={() => {
                            setContent(DialogContent.americaDoNorte);
                            openModal();
                        }}
                    >
                        <BtnPais
                            pais={t("portos.continentes.americaDoNorte")}
                        />
                    </span>

                    <span
                        className={"absolute top-[48%] left-[4%] "}
                        onClick={() => {
                            setContent(DialogContent.americaCentral);
                            openModal();
                        }}
                    >
                        <BtnPais
                            pais={t("portos.continentes.americaCentral")}
                        />
                    </span>
                    <span
                        className={"absolute top-[78%] left-[32%] "}
                        onClick={() => {
                            setContent(DialogContent.americaDoSul);
                            openModal();
                        }}
                    >
                        <BtnPais pais={t("portos.continentes.americaDoSul")} />
                    </span>
                    <span
                        className={"absolute top-[60%] left-[43%] "}
                        onClick={() => {
                            setContent(DialogContent.africa);
                            openModal();
                        }}
                    >
                        <BtnPais pais={t("portos.continentes.africa")} />
                    </span>
                    <span
                        className={"absolute top-[23%] left-[30%] "}
                        onClick={() => {
                            setContent(DialogContent.mediterraneo);
                            openModal();
                        }}
                    >
                        <BtnPais pais={t("portos.continentes.mediterraneo")} />
                    </span>
                    <span
                        className={"absolute top-[7%] left-[43%] "}
                        onClick={() => {
                            setContent(DialogContent.europa);
                            openModal();
                        }}
                    >
                        <BtnPais pais={t("portos.continentes.europa")} />
                    </span>
                    <span
                        className={"absolute top-[-4%] left-[75%] "}
                        onClick={() => {
                            setContent(DialogContent.asia);
                            openModal();
                        }}
                    >
                        <BtnPais pais={t("portos.continentes.asia")} />
                    </span>
                    <span
                        className={"absolute top-[33%] left-[86%] "}
                        onClick={() => {
                            setContent(DialogContent.extremoOriente);
                            openModal();
                        }}
                    >
                        <BtnPais
                            pais={t("portos.continentes.extremoOriente")}
                        />
                    </span>
                    <span
                        className={"absolute top-[73%] left-[70%] "}
                        onClick={() => {
                            setContent(DialogContent.australia);
                            openModal();
                        }}
                    >
                        <BtnPais pais={t("portos.continentes.australia")} />
                    </span>
                </div>
            </div>
        </main>
    );
}

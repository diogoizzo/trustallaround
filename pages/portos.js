import Image from "next/image";
import {useTranslation} from "next-export-i18n";
import {useState} from "react";
import DialogPainel from "../components/DialogPainel";
import BtnPais from "../components/BtnPais";

export default function Portos() {
    const {t} = useTranslation();
    const DialogContent = {
        americaDoNorte: {
            titulo: t('portos.continentes.americaDoNorte'),
            paises: [{
                nome: t('portos.paises.mexico'),
                bandeira: '/images/flags/bandeira_mexico.png',
                portos: 'Altamira, Tampico e Veracruz.'
            }, {
                nome: t('portos.paises.eua'),
                bandeira: '/images/flags/bandeira_eua.png',
                portos: "Baltimore, Boston, Browsville, Cape Canaveral, Charleston," +
                    "Fernandinha Beach, Freeport, Galveston, Houston, Jacksonville, Mobile, New Haven, New Orleans, New York, Norfolk, Oakland, Port Everglades, Portland, San Francisco, Savannah, Seattle, Philadelphia, Tacomã, Tampa e Wilmongton."
            }, {
                nome: t('portos.paises.canada'),
                bandeira: "/images/flags/bandeira_canada.png",
                portos: "Halifax, Hamilton, Montreal, St John's, Toronto e Vancouver."
            }
            ]
        },
        americaCentral: {
            titulo: t('portos.continentes.americaCentral'),
            paises: [{
                nome: t('portos.paises.costaRica'),
                bandeira: '/images/flags/Flag_of_Costa_Rica_(state).svg',
                portos: 'Puerto Caldera e Puerto Limon'
            }, {
                nome: t('portos.paises.guatemala'),
                bandeira: '/images/flags/Flag_of_Guatemala.svg',
                portos: "Puerto Quetzal e Sto Tomás de Castilha"
            }, {
                nome: t('portos.paises.jamaica'),
                bandeira: "/images/flags/Flag_of_Jamaica.svg",
                portos: "Kingston"
            }, {
                nome: t('portos.paises.nicaragua'),
                bandeira: "/images/flags/Flag_of_Nicaragua.svg",
                portos: "Corinto e Manágua"
            }
            ]
        },
        americaDoSul: {
            titulo: t('portos.continentes.americaDoSul'),
            paises: [{
                nome: t('portos.paises.argentina'),
                bandeira: '/images/flags/Flag_of_Argentina.svg',
                portos: 'Buenos Aires e Rosário'
            }, {
                nome: t('portos.paises.brasil'),
                bandeira: '/images/flags/Flag_of_Brazil.svg',
                portos: "Belém, Fortaleza, Itajaí, Rio Grande, Rio de Janeiro, Itaguaí, Manaus, Maceió, Natal, Paranaguá, Recife, Salvador, Santos, Vitória, Itapoá, Navegantes, Suape"
            }, {
                nome: t('portos.paises.colombia'),
                bandeira: "/images/flags/Flag_of_Colombia.svg",
                portos: "Barranquilla, Buenaventura, Cartagena "
            }, {
                nome: t('portos.paises.chile'),
                bandeira: "/images/flags/Flag_of_Chile.svg",
                portos: "San Antonio,, Santiago e  Valparaiso"
            }
            ]
        },
        africa: {
            titulo: t('portos.continentes.africa'),
            paises: [{
                nome: t('portos.paises.africaDoSul'),
                bandeira: '/images/flags/Flag_of_South_Africa.svg',
                portos: 'Cape Town, Durban, Johannesburg, Port Elizabeth e Luanda'
            }, {
                nome: t('portos.paises.quenia'),
                bandeira: '/images/flags/Flag_of_Kenya.svg',
                portos: "Mombasa e Nairobi"
            }, {
                nome: t('portos.paises.mocambique'),
                bandeira: "/images/flags/Flag_of_Mozambique.svg",
                portos: "Beira e Maputo"
            }, {
                nome: t('portos.paises.nigeria'),
                bandeira: "/images/flags/Flag_of_Nigeria.svg",
                portos: "Lagos"
            }
            ]
        },
        mediterraneo: {
            titulo: t('portos.continentes.mediterraneo'),
            paises: [{
                nome: t('portos.paises.egito'),
                bandeira: '/images/flags/Flag_of_Egypt.svg',
                portos: 'Alexandria e Port Said'
            }, {
                nome: t('portos.paises.italia'),
                bandeira: '/images/flags/Flag_of_Italy.svg',
                portos: "Genova, La Spezia, Livorno, Nápoles"
            }, {
                nome: t('portos.paises.israel'),
                bandeira: "/images/flags/Flag_of_Israel.svg",
                portos: "Asdobe e Haifa"
            }, {
                nome: t('portos.paises.turquia'),
                bandeira: "/images/flags/Flag_of_Turkey.svg",
                portos: "Istambul e Mersin"
            }
            ]
        },
        europa: {
            titulo: t('portos.continentes.europa'),
            paises: [{
                nome: t('portos.paises.alemanha'),
                bandeira: '/images/flags/Flag_of_Germany.svg',
                portos: 'Bremenhaven, Hamburgo '
            }, {
                nome: t('portos.paises.belgica'),
                bandeira: '/images/flags/Flag_of_Belgium.svg',
                portos: "Antuérpia"
            }, {
                nome: t('portos.paises.espanha'),
                bandeira: "/images/flags/Flag_of_Spain.svg",
                portos: "Algeciras, Barcelona, Valencia, Bibao"
            }, {
                nome: t('portos.paises.inglaterra'),
                bandeira: "/images/flags/Flag_of_England.svg",
                portos: "Felixstowe, Liverpool, Londres,  Manchester, Portmouth e Tilbury"
            }
            ]
        },
        asia: {
            titulo: t('portos.continentes.asia'),
            paises: [{
                nome: t('portos.paises.china'),
                bandeira: '/images/flags/Flag_of_Republic_of_China.svg',
                portos: 'Dalian Guangzhou, Shanghai, Ningbo, Shenzhen,  Quingdao,  e Tianjin'
            }, {
                nome: t('portos.paises.japao'),
                bandeira: '/images/flags/Flag_of_Japan.svg',
                portos: "Kobe, Nagoya, Osaka, Tokyo e Yokohama"
            }, {
                nome: t('portos.paises.coreiaDoSul'),
                bandeira: "/images/flags/Flag_of_South_Korea.svg",
                portos: "Buan, Incheon, Yeosu e Ulsan"
            }, {
                nome: t('portos.paises.taiwan'),
                bandeira: "/images/flags/Flag_of_taiwan.svg",
                portos: "Kaohsiung, Keelung e Taichung"
            }
            ]
        },
        extremoOriente: {
            titulo: t('portos.continentes.extremoOriente'),
            paises: [{
                nome: t('portos.paises.bangladesh'),
                bandeira: '/images/flags/Flag_of_Bangladesh.svg',
                portos: 'Chalna, Chittagong e Dhaka'
            }, {
                nome: t('portos.paises.emiradosArabes'),
                bandeira: '/images/flags/Flag_of_the_United_Arab_Emirates.svg',
                portos: "Abu Dhabi, Dubai e Sharjah"
            }, {
                nome: t('portos.paises.india'),
                bandeira: "/images/flags/Flag_of_India.svg",
                portos: "Calcutá, Cochin, Madras, Mumbai e Jawaharlal"
            }, {
                nome: t('portos.paises.paquistao'),
                bandeira: "/images/flags/Flag_of_Pakistan.svg",
                portos: "Karachi e Port Qasim"
            }
            ]
        },
        australia: {
            titulo: t('portos.continentes.australia'),
            paises: [{
                nome: t('portos.paises.australia'),
                bandeira: '/images/flags/Flag_of_Australia.svg',
                portos: 'Adelaide, Brisbane, Melbourne e Sidney'
            }, {
                nome: t('portos.paises.novaZelandia'),
                bandeira: '/images/flags/Flag_of_New_Zealand.svg',
                portos: "Auckland e Tauranga"
            }
            ]
        }
    }

    let [isOpen, setIsOpen] = useState(false)
    let [content, setContent] = useState(DialogContent.americaDoNorte);

    function openModal() {
        setIsOpen(true)
    }

    return (
        <main>
            <div className="relative px-[6%] my-8 max-w-[1920px] mx-auto ">
                <DialogPainel setIsOpen={setIsOpen} isOpen={isOpen} content={content}/>
                <h1 className="text-brand-orange text-5xl font-semibold ml-12">{t('portos.titulo')}</h1>
                <div className="relative text-center mt-4">
                    <Image src={'/images/mapa_portos.png'}
                           alt={'mapa mundi com a localização dos portos da trust all around'} height={700}
                           width={1556}
                           layout={'intrinsic'} priority/>
                    <span className={'absolute top-[16%] left-0 Bfullhd:-ml-6'} onClick={() => {
                        setContent(DialogContent.americaDoNorte);
                        openModal();
                    }}>
                    <BtnPais pais='AMÉRICA DO NORTE'/>
                </span>
                </div>

                <span className={'absolute top-[50%] left-[12%] '} onClick={() => {
                    setContent(DialogContent.americaCentral);
                    openModal();
                }}>
                    <BtnPais pais='AMÉRICA CENTRAL E CARIBE'/>
                </span>
                <span className={'absolute top-[80%] left-[35%] '} onClick={() => {
                    setContent(DialogContent.americaDoSul);
                    openModal();
                }}>
                    <BtnPais pais='AMÉRICA DO SUL'/>
                </span>
                <span className={'absolute top-[60%] left-[44%] '} onClick={() => {
                    setContent(DialogContent.africa);
                    openModal();
                }}>
                    <BtnPais pais='ÁFRICA'/>
                </span>
                <span className={'absolute top-[28%] left-[34%] '} onClick={() => {
                    setContent(DialogContent.mediterraneo);
                    openModal();
                }}>
                    <BtnPais pais='MEDITERRÂNEO E NORTE DA ÁFRICA'/>
                </span>
                <span className={'absolute top-[15%] left-[45%] '} onClick={() => {
                    setContent(DialogContent.europa);
                    openModal();
                }}>
                    <BtnPais pais='EUROPA'/>
                </span>
                <span className={'absolute top-[6%] left-[71%] '} onClick={() => {
                    setContent(DialogContent.asia);
                    openModal();
                }}>
                    <BtnPais pais='ÁSIA'/>
                </span>
                <span className={'absolute top-[39%] left-[79%] '} onClick={() => {
                    setContent(DialogContent.extremoOriente);
                    openModal();
                }}>
                    <BtnPais pais='EXTREMO ORIENTE E SUBCONTINENTE'/>
                </span>
                <span className={'absolute top-[82%] left-[67%] '} onClick={() => {
                    setContent(DialogContent.australia);
                    openModal();
                }}>
                    <BtnPais pais='AUSTRÁLIA E OCEANIA'/>
                </span>
            </div>

        </main>
    )
}
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import NavGaleria from "../../../components/NavGaleria";
import { useState } from "react";
import ImageDialog from "../../../components/ImageDialog";
import Image from "next/image";

export default function Servicos() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    let [isOpen, setIsOpen] = useState(false);
    let [content, setContent] = useState("");

    const images = {
        1: {
            alt: "pessoa com flores",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t1.jpg",
        },
        2: {
            alt: "varias pessoas em um escritório",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t2.jpg",
        },
        3: {
            alt: "pessoas comemorando com champagne",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t3.jpg",
        },
        4: {
            alt: "pessoas em um barco",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t4.jpg",
        },
        5: {
            alt: "colagem de fotos",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t5.jpg",
        },
        6: {
            alt: "container com pegunta estampada",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t6.jpg",
        },
        7: {
            alt: "foto do cartão da trustallaround",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t7.jpg",
        },
        8: {
            alt: "foto de caixas embaladas para transporte",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t8.jpg",
        },
        9: {
            alt: "foto de vários caminhões na estrada",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t9.jpg",
        },
        10: {
            alt: "foto de pessoa entregando uma caixa da trustallaround para outra",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t10.jpg",
        },
        11: {
            alt: "foto do cartão da trustallaround com um porto de fundo",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t11.jpg",
        },
        12: {
            alt: "foto de uma caminhão pegando um container no porto",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t12.jpg",
        },
        13: {
            alt: "foto de uma caminhão pegando mercadoria em um depósito",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t13.jpg",
        },
        14: {
            alt: "foto de um funcionário da trustallaround segurando a bandeira do brasil",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t14.jpg",
        },
        15: {
            alt: "foto de um prêmio recebido pela trustallaround",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t15.jpg",
        },
        16: {
            alt: "foto de uma pessoa com vários produtos importados pela trustallaround",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t16.jpg",
        },
        17: {
            alt: "foto da festa de Halloween da trustallaround",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t17.jpg",
        },
        18: {
            alt: "outra foto da festa de Halloween da trustallaround",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t18.jpg",
        },
        19: {
            alt: "foto de palestra na trustallaround",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t19.jpg",
        },
        20: {
            alt: "foto de vários impressos da trustallaround sobre uma mesa",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t20.jpg",
        },
        21: {
            alt: "foto de várias pessoas na recepção da trustallaround",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t21.jpg",
        },
        22: {
            alt: "foto de vários funcionários da trustallaround",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t22.jpg",
        },
        23: {
            alt: "foto da CEO da trustallaround com vários clientes da empresa",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t23.jpg",
        },
        24: {
            alt: "funcionários da trustallaround no boliche",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t24.jpg",
        },
        25: {
            alt: "funcionários da trustallaround na festa de natal/ano novo",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t25.jpg",
        },
        26: {
            alt: "foto de mural da trustallaround",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t26.jpg",
        },
        27: {
            alt: "foto dos funcionários e da CEO da trustallaround em um conferência ",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t27.jpg",
        },
        28: {
            alt: "foto de reunião de planejamento do trustallaround",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t28.jpg",
        },
        29: {
            alt: "foto da CEO da trustallaround com cliente",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t29.jpg",
        },
        30: {
            alt: "foto de reunião da trustallaround",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t30.jpg",
        },
        31: {
            alt: "foto da trustallaround em uma conferência em Berlim",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t31.jpg",
        },
        32: {
            alt: "foto dos funcionários de trustallaround em outra conferência",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t32.jpg",
        },
        33: {
            alt: "foto dos funcionários de trustallaround em um stand",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t33.jpg",
        },
        34: {
            alt: "foto da CEO da trustallaround em um stand de conferência",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t34.jpg",
        },
        35: {
            alt: "foto de várias mãos juntas, segurando o símbolo da trustallaround",
            height: "600px",
            width: "900px",
            src: "/images/galeria/t35.jpg",
        },
    };

    function openModal() {
        setIsOpen(true);
    }
    return (
        <>
            <ImageDialog
                setIsOpen={setIsOpen}
                isOpen={isOpen}
                content={content}
            />
            <div className="w-full overflow-hidden">
                <div
                    className={
                        "w-full mt-3 lg:mt-8 px-[6%] mx-auto text-brand-blue"
                    }
                >
                    <div>
                        <div
                            className={"flex flex-col lg:flex-row lg:items-end"}
                        >
                            <NavGaleria />
                        </div>
                        <div className={"my-12"}>
                            <div
                                className={
                                    "grid grid-cols-4 gap-4 auto-rows-[200px] "
                                }
                            >
                                <div
                                    className="cursor-pointer col-span-2 row-span-2 rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[1]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[1].src}
                                        width={900}
                                        height={600}
                                        alt={images[1].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className=" cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[2]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[2].src}
                                        width={900}
                                        height={600}
                                        alt={images[2].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className=" cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[3]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[3].src}
                                        width={900}
                                        height={600}
                                        alt={images[3].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[4]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[4].src}
                                        width={900}
                                        height={600}
                                        alt={images[4].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className=" cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[5]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[5].src}
                                        width={900}
                                        height={600}
                                        alt={images[5].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className=" cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[6]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[6].src}
                                        width={900}
                                        height={600}
                                        alt={images[6].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[7]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[7].src}
                                        width={900}
                                        height={600}
                                        alt={images[7].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden col-span-2 row-span-2"
                                    onClick={() => {
                                        setContent(images[8]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[8].src}
                                        width={900}
                                        height={600}
                                        alt={images[8].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className=" cursor-pointer rounded-md relative overflow-hidden "
                                    onClick={() => {
                                        setContent(images[9]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[9].src}
                                        width={900}
                                        height={600}
                                        alt={images[9].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className=" cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[10]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[10].src}
                                        width={900}
                                        height={600}
                                        alt={images[10].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className=" cursor-pointer rounded-md relative overflow-hidden col-span-2 row-span-2"
                                    onClick={() => {
                                        setContent(images[11]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[11].src}
                                        width={900}
                                        height={600}
                                        alt={images[11].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[12]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[12].src}
                                        width={900}
                                        height={600}
                                        alt={images[12].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[13]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[13].src}
                                        width={900}
                                        height={600}
                                        alt={images[13].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[14]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[14].src}
                                        width={900}
                                        height={600}
                                        alt={images[14].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[15]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[15].src}
                                        width={900}
                                        height={600}
                                        alt={images[15].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[16]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[16].src}
                                        width={900}
                                        height={600}
                                        alt={images[16].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden "
                                    onClick={() => {
                                        setContent(images[17]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[17].src}
                                        width={900}
                                        height={600}
                                        alt={images[17].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden col-span-2 row-span-2"
                                    onClick={() => {
                                        setContent(images[18]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[18].src}
                                        width={900}
                                        height={600}
                                        alt={images[18].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[19]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[19].src}
                                        width={900}
                                        height={600}
                                        alt={images[19].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[20]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[20].src}
                                        width={900}
                                        height={600}
                                        alt={images[20].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden col-span-2 row-span-2"
                                    onClick={() => {
                                        setContent(images[21]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[21].src}
                                        width={900}
                                        height={600}
                                        alt={images[21].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className=" cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[22]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[22].src}
                                        width={900}
                                        height={600}
                                        alt={images[22].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[23]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[23].src}
                                        width={900}
                                        height={600}
                                        alt={images[23].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[24]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[24].src}
                                        width={900}
                                        height={600}
                                        alt={images[24].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden "
                                    onClick={() => {
                                        setContent(images[25]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[25].src}
                                        width={900}
                                        height={600}
                                        alt={images[25].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[26]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[26].src}
                                        width={900}
                                        height={600}
                                        alt={images[26].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[27]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[27].src}
                                        width={900}
                                        height={600}
                                        alt={images[27].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md col-span-2 row-span-2 relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[28]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[28].src}
                                        width={900}
                                        height={600}
                                        alt={images[28].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[29]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[29].src}
                                        width={900}
                                        height={600}
                                        alt={images[29].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[30]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[30].src}
                                        width={900}
                                        height={600}
                                        alt={images[30].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[31]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[31].src}
                                        width={900}
                                        height={600}
                                        alt={images[31].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[32]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[32].src}
                                        width={900}
                                        height={600}
                                        alt={images[32].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[33]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[33].src}
                                        width={900}
                                        height={600}
                                        alt={images[33].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[34]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[34].src}
                                        width={900}
                                        height={600}
                                        alt={images[34].alt}
                                        layout="fill"
                                    />
                                </div>
                                <div
                                    className="cursor-pointer rounded-md relative overflow-hidden"
                                    onClick={() => {
                                        setContent(images[35]);
                                        openModal();
                                    }}
                                >
                                    <Image
                                        src={images[35].src}
                                        width={900}
                                        height={600}
                                        alt={images[35].alt}
                                        layout="fill"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

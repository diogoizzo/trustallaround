import { useTranslation, useLanguageQuery } from "next-export-i18n";
import NavServicos from "../../../components/NavServicos";
import NextLink from "../../../components/NextLink";
import Image from "next/image";

export default function Servicos() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    // const images = [
    //     "/icons/grid/001.svg",
    //     "/icons/grid/002.svg",
    //     "/icons/grid/003.svg",
    //     "/icons/grid/004.svg",
    //     "/icons/grid/005.svg",
    //     "/icons/grid/006.svg",
    //     "/icons/grid/007.svg",
    //     "/icons/grid/008.svg",
    //     "/icons/grid/009.svg",
    //     "/icons/grid/010.svg",
    //     "/icons/grid/011.svg",
    //     "/icons/grid/012.svg",
    // ];
    const imageAndText = [
        {
            img: "/icons/grid/001.svg",
            text: t("servicos.content.tab5.grid.item1"),
        },
        {
            img: "/icons/grid/002.svg",
            text: t("servicos.content.tab5.grid.item2"),
        },
        {
            img: "/icons/grid/003.svg",
            text: t("servicos.content.tab5.grid.item3"),
        },
        {
            img: "/icons/grid/004.svg",
            text: t("servicos.content.tab5.grid.item4"),
        },
        {
            img: "/icons/grid/005.svg",
            text: t("servicos.content.tab5.grid.item5"),
        },
        {
            img: "/icons/grid/006.svg",
            text: t("servicos.content.tab5.grid.item6"),
        },
        {
            img: "/icons/grid/007.svg",
            text: t("servicos.content.tab5.grid.item7"),
        },
        {
            img: "/icons/grid/008.svg",
            text: t("servicos.content.tab5.grid.item8"),
        },
        {
            img: "/icons/grid/009.svg",
            text: t("servicos.content.tab5.grid.item9"),
        },
        {
            img: "/icons/grid/010.svg",
            text: t("servicos.content.tab5.grid.item10"),
        },
        {
            img: "/icons/grid/011.svg",
            text: t("servicos.content.tab5.grid.item11"),
        },
        {
            img: "/icons/grid/012.svg",
            text: t("servicos.content.tab5.grid.item12"),
        },
    ];

    return (
        <div className="w-full overflow-hidden">
            <div
                className={
                    "w-full mt-3 lg:mt-8 px-[6%] mx-auto pb-24 text-brand-blue"
                }
            >
                <div>
                    <div className={"flex flex-col lg:flex-row lg:items-end"}>
                        <NavServicos />
                    </div>
                    <div className={"mt-8"}>
                        <div className="relative">
                            <div
                                className={
                                    "border-l-4 border-brand-orange pl-8 lg:pl-12 text-lg md:text-xl lg:text-2xl font-normal mt-5 lg:mt-12 "
                                }
                            >
                                <p
                                    className=""
                                    dangerouslySetInnerHTML={{
                                        __html: t("servicos.content.tab5.p1"),
                                    }}
                                ></p>
                                <div className="float-right w-1/2 mt-20 mb-10 ml-4">
                                    <Image
                                        src={"/images/china-container.jpg"}
                                        alt={
                                            "imagem mostrando um container vindo da china com vários produtos"
                                        }
                                        width={738}
                                        height={335}
                                        layout={"responsive"}
                                    />
                                </div>
                                <p
                                    className="mt-4 lg:mt-8"
                                    dangerouslySetInnerHTML={{
                                        __html: t("servicos.content.tab5.p2"),
                                    }}
                                ></p>
                                <p
                                    className="mt-4 lg:mt-8"
                                    dangerouslySetInnerHTML={{
                                        __html: t("servicos.content.tab5.p3"),
                                    }}
                                ></p>
                                <p
                                    className="mt-4 lg:mt-8 "
                                    dangerouslySetInnerHTML={{
                                        __html: t("servicos.content.tab5.p4"),
                                    }}
                                ></p>
                                <p
                                    className="mt-4 lg:mt-8"
                                    dangerouslySetInnerHTML={{
                                        __html: t("servicos.content.tab5.p5"),
                                    }}
                                ></p>
                                <p
                                    className="mt-4 lg:mt-8 mb-24"
                                    dangerouslySetInnerHTML={{
                                        __html: t("servicos.content.tab5.p6"),
                                    }}
                                ></p>
                            </div>
                        </div>
                    </div>
                    <div className=" mx-auto w-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                        {imageAndText.map((imgAndText, index) => (
                            <div
                                key={index}
                                className="relative flex flex-col items-center p-4 justify-center border border-brand-blue/15 w-[450px] h-[350px] "
                            >
                                <Image
                                    src={imgAndText.img}
                                    alt={`Image ${index + 1}`}
                                    layout="intrinsic"
                                    height={250}
                                    width={250}
                                />
                                <div
                                    className={
                                        "pt-5 font-medium pb-3 text-xl text-center"
                                    }
                                >
                                    {imgAndText.text}
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={"w-full text-center mt-14"}>
                        <NextLink
                            className={`inline-flex   px-4   py-2 items-center  border rounded-xl transition-colors border-brand-blue hover:bg-brand-orange-hover text-brand-blue`}
                            href={{
                                pathname: "/contato",
                                query: query,
                            }}
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
                                    "ml-3 w-full text-center text-[16px]  sm:w-fit uppercase  "
                                }
                            >
                                {t("sobre.btn")}
                            </p>
                        </NextLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

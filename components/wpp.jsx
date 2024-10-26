import { useTranslation } from "next-export-i18n";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Wpp() {
    const { t } = useTranslation();
    const [isVibrating, setIsVibrating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVibrating((prev) => !prev);
        }, 1200); // Ajuste o tempo conforme necessário

        return () => clearInterval(interval);
    }, []);

    return (
        <a
            href="https://api.whatsapp.com/send?phone=5511965978823"
            className="group"
        >
            <div
                className={
                    " w-0 h-0 fixed bottom-12 flex items-center right-12 z-40 bg-gray-100 border border-gray-200 shadow-md rounded-md transition-all duration-500 ease-in-out overflow-hidden group-hover:w-64 group-hover:h-20 group-hover:bottom-12 group-hover:right-12"
                }
            >
                <div className={"ml-5 text-brand-blue"}>
                    <h3
                        className={
                            "font-bold opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100"
                        }
                    >
                        {t("atendimento.titulo")}
                    </h3>
                    <p>{t("atendimento.texto")}</p>
                </div>
            </div>
            <div
                className={`fixed  inline-flex justify-center items-center z-50 bottom-3 right-3 h-14 w-14  bg-gray-100 border border-gray-200 shadow-md rounded-full ${
                    isVibrating ? "vibrate" : ""
                }`}
            >
                <Image
                    className=""
                    src={"/icons/contact.svg"}
                    alt={"icone de contato pelo whatsapp"}
                    width={40}
                    height={40}
                    layout="fixed"
                />
            </div>
        </a>
    );
}

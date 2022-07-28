import Image from "next/image";
import { useTranslation } from "next-export-i18n";

export default function Sobre() {
    const { t } = useTranslation();
    return (
        <>
            <div className="px-[6%] mt-3 lg:mt-8">
                <h1 className="text-brand-orange text-5xl font-semibold text-center lg:text-left lg:ml-12">
                    {t("sobre.titulo")}
                </h1>
                <div className="flex flex-col lg:flex-row mt-8 lg:mt-12  items-start relative">
                    <div
                        className={
                            "border-l-4 border-brand-orange mt-8 lg:mt-0 text-brand-blue pr-4 lg:pr-8 order-2 lg:order-1"
                        }
                    >
                        <p className="text-lg lg:text-2xl font-normal ml-8 lg:ml-12">
                            {t("sobre.p1")}
                        </p>
                        <p className="text-lg lg:text-2xl font-normal ml-8 lg:ml-12 mt-4 lg:mt-8">
                            {t("sobre.p2")}
                        </p>
                        <p className="text-lg lg:text-2xl font-normal ml-8 lg:ml-12 mt-4 lg:mt-8">
                            {t("sobre.p3")}
                        </p>
                    </div>
                    <div className="w-full lg:min-w-[45%] lg:order-2">
                        <Image
                            alt={"mapa mundi com as rotas de transporte"}
                            src="/images/mapa-sobre.svg"
                            width={506}
                            height={323}
                            layout={"responsive"}
                            unoptimized={true}
                        />
                    </div>
                </div>
            </div>
            <div className="relative mt-12 w-full min-h-[200px] lg:mt-24">
                <Image
                    src="/images/juntos.png"
                    alt={"várias mãos segurando a logo do trust all around"}
                    layout={"fill"}
                    objectFit={"cover"}
                    objectPosition={"center"}
                    priority={true}
                    unoptimized={true}
                />
            </div>
        </>
    );
}

import Image from "next/image";
import { useTranslation } from "next-export-i18n";

export default function Sobre() {
    const { t } = useTranslation();
    return (
        <main>
            <div className="px-[6%] mt-3 sm:mt-8">
                <h1 className="text-brand-orange text-5xl font-semibold text-center sm:text-left sm:ml-12">
                    {t("sobre.titulo")}
                </h1>
                <div className="flex flex-col sm:flex-row mt-8 sm:mt-12  items-start relative">
                    <div
                        className={
                            "border-l-4 border-brand-orange mt-8 sm:mt-0 text-brand-blue pr-4 sm:pr-8 order-2 sm:order-1"
                        }
                    >
                        <p className="text-lg lg:text-2xl font-normal ml-8 sm:ml-12">
                            {t("sobre.p1")}
                        </p>
                        <p className="text-lg lg:text-2xl font-normal ml-8 sm:ml-12 mt-4 sm:mt-8">
                            {t("sobre.p2")}
                        </p>
                        <p className="text-lg lg:text-2xl font-normal ml-8 sm:ml-12 mt-4 sm:mt-8">
                            {t("sobre.p3")}
                        </p>
                    </div>
                    <div className="w-full sm:min-w-[45%] sm:order-2">
                        <Image
                            alt={
                                "carta com um cartão dentro, da trust all around"
                            }
                            src="/images/mapa_sobre.jpg"
                            width={506}
                            height={323}
                            layout={"responsive"}
                        />
                    </div>
                </div>
            </div>
            <div className="relative mt-12 w-full min-h-[200px] sm:mt-24">
                <Image
                    src="/images/juntos.png"
                    alt={"várias mãos segurando a logo do trust all around"}
                    width="1920"
                    height="351"
                    layout={"fill"}
                    objectFit={"cover"}
                    onBlurPosition={"center"}
                />
            </div>
        </main>
    );
}

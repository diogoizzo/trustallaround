import Image from "next/image";
import { useTranslation } from "next-export-i18n";

export default function Sobre() {
    const { t } = useTranslation();
    return (
        <main>
            <div className="px-[6%] mt-8">
                <h1 className="text-brand-orange text-5xl font-semibold ml-12">
                    {t("sobre.titulo")}
                </h1>
                <div className="flex mt-12  items-start relative">
                    <div
                        className={
                            "border-l-4 border-brand-orange text-brand-blue pr-8"
                        }
                    >
                        <p className="text-lg lg:text-2xl font-normal ml-12">
                            {t("sobre.p1")}
                        </p>
                        <p className="text-lg lg:text-2xl font-normal ml-12 mt-8">
                            {t("sobre.p2")}
                        </p>
                        <p className="text-lg lg:text-2xl font-normal ml-12 mt-8">
                            {t("sobre.p3")}
                        </p>
                    </div>
                    <div className="min-w-[45%]">
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
                <div className="mt-24">
                    <Image
                        src="/images/juntos.png"
                        alt={"várias mãos segurando a logo do trust all around"}
                        width="1920"
                        height="351"
                        layout={"responsive"}
                    />
                </div>
            </div>
        </main>
    );
}

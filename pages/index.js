import Slider from "../components/Slider";
import Image from "next/image";
import {useTranslation} from "next-export-i18n";

export default function Home() {
    const {t} = useTranslation();
    return (
        <main>
            <Slider/>
            <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 px-[6%] my-12">
                <div className="flex justify-center max-w-[420px] mx-auto items-center space-x-9">
                <span className="mb-4">
                    <Image alt="nossos valores" src='/images/valores.png' width={144} height={143} layout={"fixed"}/>
                </span>
                    <span>
                    <Image alt="seta" src='/images/seta.png' width={28} height={96} layout={"fixed"}/>
                </span>

                    <div>
                        <ul className="list-disc ml-4 text-brand-blue text-lg">
                            <li>{t('bullets.valores.seguranca')}</li>
                            <li>{t('bullets.valores.confianca')}</li>
                            <li>{t('bullets.valores.comprometimento')}</li>
                            <li>{t('bullets.valores.inteligencia')}</li>
                            <li>{t('bullets.valores.singularidade')}</li>
                        </ul>
                    </div>
                </div>
                <div className="flex max-w-[420px] mx-auto items-center space-x-9">
                <span>
                    <Image alt="nossa visão" src='/images/visao.png' width={144} height={143} layout={"fixed"}/>
                </span>
                    <span>
                    <Image alt="seta" src='/images/seta.png' width={28} height={96} layout={"fixed"}/>
                </span>
                    <div>
                        <p className="text-brand-blue text-lg">{t('bullets.visao')}</p>
                    </div>
                </div>
                <div className="flex max-w-[420px] mx-auto items-center space-x-9">
                <span>
                    <Image alt="nossa missão" src='/images/missao.png' width={144} height={143} layout={"fixed"}/>
                </span>
                    <span>
                    <Image alt="seta" src='/images/seta.png' width={28} height={96} layout={"fixed"}/>
                </span>
                    <div>
                        <p className="text-brand-blue text-lg">{t('bullets.missao')}</p>
                    </div>
                </div>
            </div>
        </main>


    )
}

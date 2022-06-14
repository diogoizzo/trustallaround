import Slider from "../components/Slider";
import Image from "next/image";
import {useTranslation} from "next-export-i18n";

export default function Home() {
    const {t} = useTranslation();
  return (
      <main>
        <Slider/>
        <div className="grid gap-5 grid-cols-1 lg:grid-cols-3 px-[6%] my-12">
            <div className="flex items-center space-x-5">
                <span>
                    <Image alt="nossos valores" src='/images/valores.png' width={214} height={213} layout={"fixed"}/>
                </span>
                <span>
                    <Image alt="seta" src='/images/seta.png' width={38} height={106} layout={"fixed"}/>
                </span>

                <div>
                    <ul className="list-disc ml-4 text-[#094561] text-xl">
                        <li>{t('bullets.valores.seguranca')}</li>
                        <li>{t('bullets.valores.confianca')}</li>
                        <li>{t('bullets.valores.comprometimento')}</li>
                        <li>{t('bullets.valores.inteligencia')}</li>
                        <li>{t('bullets.valores.singularidade')}</li>
                    </ul>
                </div>
            </div>
            <div className="flex items-center space-x-5">
                <span>
                    <Image alt="nossa visão" src='/images/visao.png' width={214} height={213} layout={"fixed"}/>
                </span>
                <span>
                    <Image alt="seta" src='/images/seta.png' width={38} height={106} layout={"fixed"}/>
                </span>
                <div>
                    <p className="text-[#094561] text-xl">{t('bullets.visao')}</p>
                </div>
            </div>
            <div className="flex items-center space-x-5">
                <span>
                    <Image alt="nossa missão" src='/images/missao.png' width={214} height={213} layout={"fixed"}/>
                </span>
                <span>
                    <Image alt="seta" src='/images/seta.png' width={38} height={106} layout={"fixed"}/>
                </span>
                <div>
                    <p className="text-[#094561] text-xl">{t('bullets.missao')}</p>
                </div>
            </div>
        </div>
      </main>


  )
}

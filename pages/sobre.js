import Image from "next/image";
import {useTranslation} from "next-export-i18n";

export default function Sobre() {
    const {t} = useTranslation();
    return (
        <main>
            <div className="px-[6%] mt-8">
                <h1 className="text-brand-orange text-4xl font-semibold ml-12">{t('sobre.titulo')}</h1>
                <div className="flex mt-12  items-start">
                    <div className={'border-l-4 border-brand-orange pr-8'}>
                        <p className="text-lg lg:text-2xl font-normal ml-12">{t('sobre.p1')}</p>
                        <p className="text-lg lg:text-2xl font-normal ml-12 mt-3">{t('sobre.p2')}</p>
                    </div>
                    <div className="w-[45%] min-w-[35%]">
                        <Image alt={'carta com um cartão dentro, da trust all around'} src="/images/trust.png"
                               width={479} height={319} layout={'responsive'}/>
                    </div>
                </div>
                <div className="mt-24">
                    <Image src="/images/juntos.png" alt={'várias mãos segurando a logo do trust all around'}
                           width="1920" height="351" layout={'responsive'}/>
                </div>

            </div>

        </main>

    )
}
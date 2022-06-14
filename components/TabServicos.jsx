import Image from "next/image";
import {useTranslation} from "next-export-i18n";

export default function TabServicos() {
    const {t} = useTranslation();

    return (
        <div>
            <div className="float-right mb-12">
                <Image src={'/images/circulo-servicos.png'}
                       alt={'circulo com vários ícones, mostrando todos os serviços possíveis'} width={754} height={699}
                       layout={"intrinsic"}/>
            </div>
            <div className={'border-l-4 border-brand-orange pl-12 text-lg lg:text-2xl font-normal mt-12'}>
                <p>{t('servicos.content.tab1.p1')}</p>
                <p className="mt-3">{t('servicos.content.tab1.p2')}</p>
            </div>
            <div className={'mt-12'}>
                <ul className="text-lg lg:text-2xl font-semibold">
                    <li className={'flex items-center mt-7'}>
                        <span className={'mr-7'}>
                            <Image src={'/icons/seta.svg'} alt={'seta'} width={55} height={55} layout={"intrinsic"}/>
                        </span>
                        {t('servicos.content.tab1.list.li1')}
                    </li>
                    <li className={'flex items-center mt-7'}>
                        <span className={'mr-7'}>
                            <Image src={'/icons/seta.svg'} alt={'seta'} width={55} height={55} layout={"intrinsic"}/>
                        </span>
                        {t('servicos.content.tab1.list.li2')}
                    </li>
                    <li className={'flex items-center mt-7'}>
                        <span className={'mr-7'}>
                            <Image src={'/icons/seta.svg'} alt={'seta'} width={55} height={55} layout={"intrinsic"}/>
                        </span>
                        {t('servicos.content.tab1.list.li3')}
                    </li>
                    <li className={'flex items-center mt-7'}>
                        <span className={'mr-7 shrink-0'}>
                            <Image src={'/icons/seta.svg'} alt={'seta'} width={55} height={55} layout={"intrinsic"}/>
                        </span>
                        {t('servicos.content.tab1.list.li4')}
                    </li>
                </ul>
            </div>
        </div>
    )
}
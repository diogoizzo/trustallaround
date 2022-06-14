import Image from "next/image";
import {useTranslation} from "next-export-i18n";

export default function TabMaritimo() {
    const {t} = useTranslation();

    return (
        <div>
            <div>
                <div className={'border-l-4 border-brand-orange pl-12 text-lg lg:text-2xl font-normal mt-12'}>
                    <p>{t('servicos.content.tab3.p1')}</p>
                    <p className={'mt-3'}>{t('servicos.content.tab3.p2')}</p>
                </div>
                <div className={'mt-12'}>
                    <div className="float-right ml-6 mb-14">
                        <Image src={'/images/navio.png'}
                               alt={'navio de carga com vários containers'} width={666}
                               height={446}
                               layout={"intrinsic"}/>
                    </div>
                    <ul className="text-lg lg:text-2xl font-semibold">
                        <li className={'flex items-start mt-7'}>
                            <span className={'mr-7 shrink-0'}>
                            <Image src={'/icons/seta.svg'} alt={'seta'} width={55} height={55} layout={"intrinsic"}/>
                            </span>
                            <span>
                                <h3>{t('servicos.content.tab3.list.li1.titulo')}</h3>
                                 <p className={'font-normal mt-3'}>{t('servicos.content.tab3.list.li1.texto')}</p>
                            </span>
                        </li>
                        <li className={'flex items-start mt-7'}>
                            <span className={'mr-7 shrink-0'}>
                            <Image src={'/icons/seta.svg'} alt={'seta'} width={55} height={55} layout={"intrinsic"}/>
                            </span>
                            <span>
                                <h3>{t('servicos.content.tab3.list.li2.titulo')}</h3>
                                 <p className={'font-normal mt-3'}>{t('servicos.content.tab3.list.li2.texto')}</p>
                            </span>
                        </li>
                        <li className={'flex items-start mt-7'}>
                            <span className={'mr-7 shrink-0'}>
                            <Image src={'/icons/seta.svg'} alt={'seta'} width={55} height={55} layout={"intrinsic"}/>
                            </span>
                            <span>
                                <h3>{t('servicos.content.tab3.list.li3.titulo')}</h3>
                                 <p className={'font-normal mt-3'}>{t('servicos.content.tab3.list.li3.texto')}</p>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
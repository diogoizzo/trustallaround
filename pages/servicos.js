import {Tab} from "@headlessui/react";
import {useTranslation} from "next-export-i18n";
import BtnServicos from "../components/BtnServicos";
import TabServicos from "../components/TabServicos";
import TabAereo from "../components/TabAereo";
import TabMaritimo from "../components/TabMaritimo";
import TabRodoviario from "../components/TabRodoviario";

export default function Servicos() {
    const {t} = useTranslation();

    return (
        <div className={'w-full mt-8 px-[6%] mx-auto'}>
            <Tab.Group>
                <div className={'flex items-end'}>
                    <Tab.List className={'flex space-x-9'}>
                        <Tab className={({selected}) =>
                            selected ? 'text-brand-orange focus:outline-none' : 'text-brand-blue'
                        }>
                            <h1 className={'text-5xl font-semibold focus:outline-none ml-12'}>{t('servicos.titulo')}</h1>
                        </Tab>
                        <Tab className={'focus:outline-none'}>
                            {({selected}) => (

                                <BtnServicos src={'/icons/aviao.svg'} alt={'ícone de uma avião'} height={46} width={53}
                                             text={t('servicos.tabs.tab1')}
                                             className={selected ? 'border-brand-orange hover:bg-brand-orange-hover' : 'border-brand-blue hover:bg-brand-blue-hover'}/>
                            )}

                        </Tab>
                        <Tab className={'focus:outline-none'}>
                            {({selected}) => (
                                <BtnServicos src={'/icons/navio.svg'} alt={'ícone de um navio'} height={46} width={50}
                                             text={t('servicos.tabs.tab2')}
                                             className={selected ? 'border-brand-orange hover:bg-brand-orange-hover' : 'border-brand-blue hover:bg-brand-blue-hover'}/>
                            )}
                        </Tab>
                        <Tab className={'focus:outline-none'}>
                            {({selected}) => (
                                <BtnServicos src={'/icons/caminhao.svg'} alt={'ícone de um caminhão'} height={46}
                                             width={74}
                                             text={t('servicos.tabs.tab3')}
                                             className={selected ? 'border-brand-orange hover:bg-brand-orange-hover' : 'border-brand-blue hover:bg-brand-blue-hover'}/>
                            )}

                        </Tab>
                    </Tab.List>
                </div>
                <Tab.Panels className={'mt-8'}>
                    <Tab.Panel>
                        <TabServicos/>
                    </Tab.Panel>
                    <Tab.Panel>
                        <TabAereo/>
                    </Tab.Panel>
                    <Tab.Panel>
                        <TabMaritimo/>
                    </Tab.Panel>
                    <Tab.Panel>
                        <TabRodoviario/>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
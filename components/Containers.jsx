import {Tab} from '@headlessui/react'
import {useTranslation} from "next-export-i18n";
import Image from "next/image";
import Tabs from "./Tabs";
import {useState} from "react";

export default function Containers() {
    const {t} = useTranslation();
    const [title, setTitle] = useState(t('ferramentas.tabs.tab1'));

    return (
        <div className={'w-full mt-8'}>
            <Tab.Group>
                <div className={'flex justify-between items-end'}>
                    <div className={'flex flex-col'}>
                        <h1 className={'text-5xl font-semibold text-brand-orange ml-12'}>{t('ferramentas.titulo')}</h1>
                        <h2 className={'mt-4 ml-12 text-3xl text-brand-blue'}>{title}</h2>
                    </div>
                    <Tab.List className={'flex space-x-9'}>
                        <Tab onClick={() => setTitle(t('ferramentas.tabs.tab1'))} className={({selected}) =>
                            selected ? 'hidden' : null
                        }>
                            <Tabs text={t('ferramentas.tabs.tab1')}/>
                        </Tab>
                        <Tab onClick={() => setTitle(t('ferramentas.tabs.tab2'))} className={({selected}) =>
                            selected ? 'hidden' : null
                        }>
                            <Tabs text={t('ferramentas.tabs.tab2')}/>
                        </Tab>
                        <Tab onClick={() => setTitle(t('ferramentas.tabs.tab3'))} className={({selected}) =>
                            selected ? 'hidden' : null
                        }>
                            <Tabs text={t('ferramentas.tabs.tab3')}/>
                        </Tab>
                        <Tab onClick={() => setTitle(t('ferramentas.tabs.tab4'))} className={({selected}) =>
                            selected ? 'hidden' : null
                        }>
                            <Tabs text={t('ferramentas.tabs.tab4')}/>
                        </Tab>
                    </Tab.List>
                </div>
                <Tab.Panels className={'flex justify-center mt-8'}>
                    <Tab.Panel>
                        <Image src={'/images/containersPadrao.png'} alt={"Containers padrão"} width={1657} height={667}
                               layout={"intrinsic"}/>
                    </Tab.Panel>
                    <Tab.Panel>
                        <Image src={'/images/cont_refrigerado.png'} alt={"Containers refrigerados"} width={1657}
                               height={672}
                               layout={"intrinsic"}/>
                    </Tab.Panel>
                    <Tab.Panel>
                        <Image src={'/images/cont_especiais01.png'} alt={"Containers especiais"} width={1664}
                               height={476}
                               layout={"intrinsic"}/></Tab.Panel>
                    <Tab.Panel>
                        <Image src={'/images/cont_especiais02.png'} alt={"Containers especiais"} width={1357}
                               height={689}
                               layout={"intrinsic"}/>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}
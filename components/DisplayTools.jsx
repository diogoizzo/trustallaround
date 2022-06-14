import ToolsOptions from "./ToolsOptions";
import {useTranslation} from "next-export-i18n";
import {useState} from "react";
import Incoterms from "./Incoterms";
import Containers from "./Containers";

export default function DisplayTools() {
    const {t} = useTranslation();
    const [option, setOption] = useState(null);


    return (

        <div className="flex justify-center px-[6%] mx-auto min-h-[718px]  ">
            {option === null ? <div className="flex items-center space-x-[8%]">
                <ToolsOptions title={'Incoterms'} src={'/images/incoterms.png'}
                              alt={'Ilustração de uma navio, avião e caminhão'} width={502}
                              height={439} onClick={() => {
                    setOption(true);
                }
                }/>
                <ToolsOptions title={t('ferramentas.tipos')} src={'/images/Containers.png'}
                              alt={'Ilustração de dois containers'} width={482}
                              height={346} onClick={() => setOption(false)}/>
            </div> : <>
                {option ? <Incoterms/> : <Containers/>}
            </>}
        </div>

    )
}
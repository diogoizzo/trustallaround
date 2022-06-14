import Image from "next/image";

export default function Incoterms() {
    return (
        <div className={'py-7 mt-8'}>
            <Image src={'/images/incotermsTable.png'} alt={'tabela com os tipos de incoterms'} width={1557} height={771}
                   layout={"intrinsic"}/>
        </div>
    )
}
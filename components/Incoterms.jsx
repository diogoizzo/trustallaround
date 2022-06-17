import Image from "next/image";

export default function Incoterms() {
    return (
        <div className={'mt-8'}>
            <h1 className={'text-5xl font-semibold text-brand-orange mb-8 ml-12'}>Incoterms</h1>
            <Image src={'/images/incotermsTable.png'} alt={'tabela com os tipos de incoterms'} width={1557} height={771}
                   layout={"intrinsic"}/>
        </div>
    )
}
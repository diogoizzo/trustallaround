import Image from "next/image";

export default function PortosPais({bandeira, pais, portos}) {
    return (
        <div className={'mt-3'}>
            <div className={'flex items-center space-x-5'}>
                <div className={'w-[181px] flex flex-col'}>
                    <Image src={bandeira} alt={`bandeira do ${pais}`}
                           height={105} width={181} layout={'fixed'}/>
                    <h4 className={'mt-2 text-lg text-center'}>{pais}</h4>
                </div>
                <p className={'-mt-8'}>
                    {portos}
                </p>
            </div>

        </div>
    )
}
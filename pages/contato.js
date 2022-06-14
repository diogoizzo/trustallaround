import Image from "next/image";
import AdressItem from "../components/AdressItem";


export default function Contato() {
    return (
        <main>
            <div className={'flex px-[6%] mt-8'}>
                <div className={'flex flex-col w-[55%]'}>
                    <h1 className={'text-4xl font-semibold text-brand-orange ml-12'}>Contato</h1>
                    <div className={'mt-12'}>
                        <Image src={'/images/Apertodemao.png'} alt={'mulher oferecendo um aperto de mão'} width={839}
                               height={725} layout={'responsive'}/>
                    </div>
                </div>
                <div className={'w-[45%] flex flex-col'}>
                    <div>
                        <div className="relative h-fit min-h-[623px] min-w-[677px] ">
                            <Image src={'/images/quadro-branco-contato.png'} alt={'moldura do formulário de contato'}
                                   layout={'fill'}/>

                            <form
                                className={'absolute flex space-y-6 flex-col top-0 left-1/2 transform -translate-x-1/2 mt-16 w-[90%]'}
                                action="">
                                <input type="text" id={'nome'} placeholder={"Nome*"} name="nome"
                                       className={'h-12 placeholder:text-xl text-lg text-brand-gray rounded-xl border-gray-400 border-1 focus:outline-none focus:border-brand-orange focus:border-1 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:ring-offset-2'}/>
                                <input type="email" id={'email'} placeholder={"E-mail*"} name="email"
                                       className={'h-12 placeholder:text-xl text-lg text-brand-gray rounded-xl border-gray-400  border-1 focus:outline-none focus:border-brand-orange focus:border-1 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:ring-offset-2'}/>
                                <input type="text" id={'assunto'} placeholder={"Assunto*"} name="assunto"
                                       className={'h-12 placeholder:text-xl text-lg text-brand-gray rounded-xl border-gray-400  border-1 focus:outline-none focus:border-brand-orange focus:border-1 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:ring-offset-2'}/>
                                <textarea name="corpo" id="corpo" cols="30" rows="7"
                                          placeholder={'Como podemos ajudar você?*'}
                                          className={'placeholder:text-xl text-lg text-brand-gray rounded-xl border-gray-400  border-1 focus:outline-none focus:border-brand-orange focus:border-1 focus:bg-white focus:ring-2 focus:ring-brand-orange focus:ring-offset-2 resize-none'}></textarea>
                                <div className={'flex justify-between'}>
                                    <button type={'submit'}
                                            className={'h-14 bg-brand-gray hover:bg-[#888888] font-medium text-white w-40 rounded-xl text-xl focus:outline-none focus:border-brand-orange focus:border-1 focus:ring-2 focus:ring-brand-orange focus:ring-offset-2'}>Enviar
                                    </button>
                                    <div className={'flex items-center'}>
                                        <Image src="/icons/relogio.svg" alt="relógio" height={45} width={45}
                                               layout={'intrinsic'}/>
                                        <p className={'ml-4 text-brand-gray'}>Atendimento de segunda a sexta das 08:45
                                            às 18h15.</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={'flex w-full my-6 justify-between min-w-[677px] '}>
                        <div className={'flex flex-col text-brand-gray text-lg'}>
                            <h2 className={'text-2xl font-medium mb-3 '}>Trust Gestão em Assessoria Logística LTDA.</h2>
                            <AdressItem src="/icons/envelope-regular.svg" alt="email"
                                        text={'contato@trustgestao.com.br'}/>
                            <AdressItem src={'/icons/mobile-screen-button-solid.svg'} alt={'Telefones'}
                                        text={'+55 (11) 3796-1845 / +55 (11) 98628-5531'}/>
                            <AdressItem src={'/icons/globe-solid.svg'} alt={'Site'} text={'www.trustallaround.com.br'}/>
                            <AdressItem src={'/icons/location-dot-solid.svg'} alt={'Endereço'}
                                        text={'Rua Umuarama, nº. 382, Vila Prudente, São Paulo, BR'}/>
                        </div>
                        <div className={'w-[174px] h-[167px] relative '}>
                            <Image src={'/images/Logo_Trust_FINAL_Vertical_PNG.png'}
                                   alt={'Logo vertical da trust all around'} height={132} width={139}
                                   layout={'fill'}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}
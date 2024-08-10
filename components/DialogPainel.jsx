import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import PortosPais from "./PortosPais";
import BtnSaibaMais from "./BtnSaibaMais";
import { Portal } from "@reach/portal";

export default function DialogPainel({ isOpen, setIsOpen, content }) {
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Portal>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-40" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-10 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel
                                    as={"div"}
                                    className="w-full bg-gray-100 rounded-lg border border-gray-200 relative flex max-h-[1300px] sm:h-fit flex-col max-w-[44rem] transform overflow-hidden p-8 pb-14 md:p-10 align-middle text-left transition-all shadow-xl shadow-black/20"
                                >
                                    {/* <span className={"hidden md:block"}>
                                        <Image
                                            src={
                                                "/images/quadro-branco-contato.png"
                                            }
                                            layout={"fill"}
                                            alt={"quadro branco da modal"}
                                        />
                                    </span>
                                    <span className={"md:hidden"}>
                                        <Image
                                            src={
                                                "/images/quadro-branco-mobile.png"
                                            }
                                            layout={"fill"}
                                            alt={"quadro branco da modal"}
                                        />
                                    </span> */}

                                    <div
                                        className={
                                            "flex justify-between items-center mt-6 pl-[1%] sm:pl-4  xl:pl-0 xl:ml-6 z-11"
                                        }
                                    >
                                        <Dialog.Title
                                            as="h3"
                                            className="text-3xl md:text-3xl font-medium w-[80%] text-brand-blue relative z-15"
                                        >
                                            {content.titulo}
                                        </Dialog.Title>
                                        <button
                                            type="button"
                                            className="inline-flex absolute top-14 right-[9%] md:right-9 rounded-md border border-brand-blue  px-2 py-1 text-2xl text-brand-orange font-medium  hover:bg-brand-orange-hover focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            <Image
                                                src={"/icons/xmark-solid.svg"}
                                                height={32}
                                                width={32}
                                                alt={"icone de sair"}
                                                layout={"intrinsic"}
                                            />
                                        </button>
                                    </div>
                                    <div className=" relative w-full mx-auto z-11 text-center md:text-left md:mt-8 mb-7">
                                        {content.paises?.map((pais) => (
                                            <PortosPais
                                                key={pais.nome}
                                                bandeira={pais.bandeira}
                                                portos={pais.portos}
                                                pais={pais.nome}
                                            />
                                        ))}
                                    </div>
                                    <BtnSaibaMais />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </Portal>
    );
}

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
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
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
                                    className="w-full relative flex flex-col max-w-3xl transform overflow-hidden p-8 md:p-12 align-middle text-left transition-all"
                                >
                                    <Image
                                        src={
                                            "/images/quadro-branco-contato.png"
                                        }
                                        layout={"fill"}
                                        alt={"quadro branco da modal"}
                                    />
                                    <div
                                        className={
                                            "flex justify-between items-center mt-6 md:ml-6 relative z-11"
                                        }
                                    >
                                        <Dialog.Title
                                            as="h3"
                                            className="text-3xl md:text-4xl font-medium  text-brand-blue z-15"
                                        >
                                            {content.titulo}
                                        </Dialog.Title>
                                        <button
                                            type="button"
                                            className="inline-flex shrink-0 rounded-md border border-brand-blue md:ml-5 px-2 py-1 text-2xl text-brand-orange font-medium  hover:bg-brand-blue-hover focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
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
                                    <div className=" relative w-[92%] mx-auto z-11 text-center md:text-left md:mt-14 mb-7">
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

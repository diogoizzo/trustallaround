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
                                    className="w-full bg-gray-100 rounded-lg border border-brand-orange relative flex max-h-[1300px] sm:h-fit flex-col max-w-[44rem]  p-8 pb-14 md:p-10 align-middle text-left transition-all shadow-xl shadow-black/20"
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
                                            "flex justify-between items-center mt-2  z-11"
                                        }
                                    >
                                        <Dialog.Title
                                            as="h3"
                                            className="text-3xl md:text-3xl text-center font-semibold w-full text-brand-blue relative z-15"
                                        >
                                            {content.titulo}
                                            <div className="w-24 mx-auto mt-3 h-1 bg-brand-orange rounded-md"></div>
                                        </Dialog.Title>
                                        <button
                                            type="button"
                                            className="inline-flex absolute -top-5 -right-5 rounded-full  p-3 text-2xl bg-brand-orange font-medium  focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            <svg
                                                className="w-5 h-5 text-gray-100 "
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 384 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                                                />
                                            </svg>
                                            {/* <Image
                                                src={"/icons/xmark-solid.svg"}
                                                height={32}
                                                width={32}
                                                alt={"icone de sair"}
                                                layout={"intrinsic"}
                                            /> */}
                                        </button>
                                    </div>
                                    <div className=" relative w-full mx-auto z-11 text-center md:text-left md:mt-4 mb-7">
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

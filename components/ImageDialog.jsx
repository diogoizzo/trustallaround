import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Image from "next/image";
import PortosPais from "./PortosPais";
import BtnSaibaMais from "./BtnSaibaMais";
import { Portal } from "@reach/portal";

export default function ImageDialog({ isOpen, setIsOpen, content }) {
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
                        <div className="fixed inset-0 bg-black bg-opacity-80">
                            <div
                                onClick={closeModal}
                                className="cursor-pointer"
                            >
                                <svg
                                    className="w-10 h-10 absolute top-4 right-4 text-gray-100 "
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                >
                                    <path
                                        fill="currentColor"
                                        d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                                    />
                                </svg>
                            </div>
                        </div>
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
                                    className="w-fit h-fit max-w-[90%]   rounded-lg overflow-hidden  bg-transparent  relative flex transition-all shadow-xl shadow-black/20"
                                >
                                    <Image
                                        src={content.src}
                                        width={content.width}
                                        height={content.height}
                                        alt={content.alt}
                                        layout="intrinsic"
                                    />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </Portal>
    );
}

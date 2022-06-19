import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import { MenuIcon } from "@heroicons/react/solid";
import NextLink from "./NextLink";
import ChangeLanguage from "./ChangeLanguage";
import Image from "next/image";

export default function DropdownMenu() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    return (
        <Menu as="div" className="inline-block text-center tm:hidden ml-6 ">
            <div>
                <Menu.Button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-amber-500">
                    <MenuIcon className="h-6 w-6" />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 mt-7 w-[88%] mx-[6%] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                    <div className="pt-2">
                        <Menu.Item>
                            {({ active }) => (
                                <NextLink
                                    href={{ pathname: "/", query: query }}
                                    as="/"
                                    className={`${
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700"
                                    } flex justify-center w-full px-4 py-2 text-sm leading-5`}
                                >
                                    {t("nav.home").toUpperCase()}
                                </NextLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NextLink
                                    href={{ pathname: "/sobre", query: query }}
                                    as={t("nav.paths.sobre")}
                                    className={`${
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700"
                                    } flex justify-center w-full px-4 py-2 text-sm leading-5 text-left`}
                                >
                                    {t("nav.sobre").toUpperCase()}
                                </NextLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NextLink
                                    href={{
                                        pathname: "/servicos",
                                        query: query,
                                    }}
                                    as={t("nav.paths.servicos")}
                                    className={`${
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700"
                                    } flex justify-center w-full px-4 py-2 text-sm leading-5 text-left`}
                                >
                                    {t("nav.servicos").toUpperCase()}
                                </NextLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NextLink
                                    href={{ pathname: "/portos", query: query }}
                                    as={t("nav.paths.portos")}
                                    className={`${
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700"
                                    } flex justify-center w-full px-4 py-2 text-sm leading-5 text-left`}
                                >
                                    {t("nav.portos").toUpperCase()}
                                </NextLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NextLink
                                    href={{
                                        pathname: "/ferramentas",
                                        query: query,
                                    }}
                                    as={t("nav.paths.ferramentas")}
                                    className={`${
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700"
                                    } flex justify-center w-full px-4 py-2 text-sm leading-5 text-left`}
                                >
                                    {t("nav.ferramentas").toUpperCase()}
                                </NextLink>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <NextLink
                                    href={{
                                        pathname: "/contato",
                                        query: query,
                                    }}
                                    as={t("nav.paths.contato")}
                                    className={`${
                                        active
                                            ? "bg-gray-100 text-gray-900"
                                            : "text-gray-700"
                                    } flex justify-center w-full px-4 py-2 text-sm leading-5 text-left`}
                                >
                                    {t("nav.contato").toUpperCase()}
                                </NextLink>
                            )}
                        </Menu.Item>
                        <span className="flex justify-center items-center  h-12 space-x-3">
                            <Menu.Item>
                                <ChangeLanguage lang="en">
                                    <Image
                                        alt="bandeira dos Estados Unidos"
                                        src="/icons/BandeiraEUA.svg"
                                        height="20px"
                                        width="37px"
                                    ></Image>
                                </ChangeLanguage>
                            </Menu.Item>
                            <Menu.Item>
                                <ChangeLanguage lang="es">
                                    <Image
                                        alt="bandeira da Espanha"
                                        src="/icons/BandeiraESP.svg"
                                        height="20px"
                                        width="37px"
                                    ></Image>
                                </ChangeLanguage>
                            </Menu.Item>
                            <Menu.Item>
                                <ChangeLanguage lang="pt">
                                    <Image
                                        alt="bandeira do Brasil"
                                        src="/icons/BandeiraBRA.svg"
                                        height="20px"
                                        width="37px"
                                    ></Image>
                                </ChangeLanguage>
                            </Menu.Item>
                        </span>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}

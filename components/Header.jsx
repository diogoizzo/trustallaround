import Image from "next/image";
import Nav from "./Nav";
import LanguageIcons from "./LanguageIcons";
import DropdownMenu from "./DropdownMenu";
import HeaderBanner from "./HeaderBanner";
import { useLanguageQuery } from "next-export-i18n";
import NextLink from "./NextLink";

export default function Header() {
    const [query] = useLanguageQuery();
    return (
        <header>
            <HeaderBanner />
            <div className="h-45 relative px-[6%] mx-auto py-6 flex justify-between items-center overflow-y-visible">
                <NextLink
                    href={{ pathname: "/", query: query }}
                    as="/"
                    className={"cursor-pointer"}
                >
                    <Image
                        alt="Logo da trust all around"
                        src="/images/Logo_Trust_FINAL_Horizontal_Original_JPG.jpg"
                        height={91}
                        width={273}
                    />
                </NextLink>
                <Nav className="hidden tm:contents" />
                <LanguageIcons />
                <DropdownMenu />
            </div>
        </header>
    );
}

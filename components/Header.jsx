import Image from "next/image";
import Nav from "./Nav";
import LanguageIcons from "./LanguageIcons";
import DropdownMenu from "./DropdownMenu";
import HeaderBanner from "./HeaderBanner";

export default function Header() {
    return (
        <header>
            <HeaderBanner />
            <div className="h-45 relative px-[6%] mx-auto py-6 flex justify-between items-center overflow-y-visible">
                <Image
                    alt="Logo da trust all around"
                    src="/images/Logo_Trust_FINAL_Horizontal_Original_JPG.jpg"
                    height="91px"
                    width="273px"
                />
                <Nav className="hidden tm:contents" />
                <LanguageIcons />
                <DropdownMenu />
            </div>
        </header>
    );
}
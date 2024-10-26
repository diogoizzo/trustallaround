import Image from "next/image";

export default function HeaderBanner() {
    return (
        //todo pegar links das redes sociais para colocar nos respectivos botões
        <div className="bg-[#808080] h-10 overflow-hidden ">
            <div className="h-full flex px-[6%] justify-center sm:justify-end items-center shrink space-x-3">
                <a
                    href="https://www.linkedin.com/company/trustallaround/"
                    className="relative h-6 w-6"
                >
                    <Image
                        alt="ícone do linkedin"
                        src="/icons/Linkedin.svg"
                        layout="fill"
                    />
                </a>
                <a
                    href="https://www.instagram.com/trustallaround/"
                    className="relative h-6 w-6"
                >
                    <Image
                        className="fill-white"
                        alt="ícone do instagram"
                        src="/icons/Instagram.svg"
                        layout="fill"
                    />
                </a>
                <a
                    href="https://www.youtube.com/@TRUSTALLAROUND"
                    className="relative h-7 w-7"
                >
                    <Image
                        alt="ícone do youtube"
                        src="/icons/youtube.svg"
                        layout="fill"
                    />
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=5511965978823"
                    className="relative h-6 w-6"
                >
                    <Image
                        alt="ícone do whatsapp"
                        src="/icons/whatsapp.svg"
                        layout="fill"
                    />
                </a>
                <a
                    href="https://linktr.ee/trustallaround"
                    className="relative text-2xl text-white -left-1 font-medium"
                >
                    <span className="mr-1">/</span>trustallaround
                </a>
            </div>
        </div>
    );
}

import Image from "next/image";

export default function HeaderBanner() {
    return (
        //todo pegar links das redes sociais para colocar nos respectivos botões
        <div className="bg-[#808080] h-10 ">
            <div className="h-full flex px-[6%] justify-center sm:justify-end items-center shrink space-x-3">
                <a
                    href="https://www.linkedin.com/in/trust-all-around-2387b7240/"
                    className="relative h-7 w-7"
                >
                    <Image
                        alt="ícone do linkedin"
                        src="/icons/Linkedin.svg"
                        layout="fill"
                    />
                </a>
                <a
                    href="https://www.instagram.com/trustallaround/"
                    className="relative h-7 w-7"
                >
                    <Image
                        className="fill-white"
                        alt="ícone do instagram"
                        src="/icons/Instagram.svg"
                        layout="fill"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/trust-all-around-2387b7240/"
                    className="relative h-7 w-7"
                >
                    <Image
                        alt="ícone do youtube"
                        src="/icons/youtube.svg"
                        layout="fill"
                    />
                </a>
                <a
                    href="https://api.whatsapp.com/send?phone=5511986285531"
                    className="relative h-7 w-7 mr-6"
                >
                    <Image
                        alt="ícone do whatsapp"
                        src="/icons/whatsapp.svg"
                        layout="fill"
                    />
                </a>
                <a
                    href="https://linktr.ee/trustallaround"
                    className="relative h-28 w-44 "
                >
                    <Image
                        alt="nome da empresa"
                        src="/icons/trust.svg"
                        layout="fill"
                    />
                </a>
            </div>
        </div>
    );
}

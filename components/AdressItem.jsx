import Image from "next/image";

export default function AdressItem({ src, alt, text }) {
    return (
        <div className={"flex md:mx-auto lg:mx-0 mt-1"}>
            <span
                className={"inline-flex justify-center items-center shrink-0"}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={25}
                    height={25}
                    layout={"intrinsic"}
                />
            </span>
            <p className={"ml-3 text-left"}>{text}</p>
        </div>
    );
}

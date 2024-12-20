import Image from "next/image";

export default function Email({ src, alt, text }) {
    return (
        <div className={"flex md:mx-auto lg:mx-0 mt-1"}>
            <span className={"inline-flex ml-1 justify-center items-center"}>
                <Image
                    src={src}
                    alt={alt}
                    width={25}
                    height={25}
                    layout={"intrinsic"}
                />
            </span>
            <p className={"ml-2"}>{text}</p>
        </div>
    );
}

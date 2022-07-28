import Image from "next/image";

export default function AdressItem({ src, alt, text }) {
    return (
        <div className={"flex mt-1"}>
            <span className={"inline-flex justify-center items-center"}>
                <Image
                    src={src}
                    alt={alt}
                    width={25}
                    height={25}
                    layout={"intrinsic"}
                    unoptimized={true}
                />
            </span>
            <p className={"ml-3"}>{text}</p>
        </div>
    );
}

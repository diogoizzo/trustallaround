import Image from "next/image";

export default function AdressItem({ src, alt, text }) {
    return (
        <div className={"flex mt-1"}>
            <Image
                src={src}
                alt={alt}
                width={25}
                height={25}
                layout={"intrinsic"}
            />
            <p className={"ml-3"}>{text}</p>
        </div>
    );
}
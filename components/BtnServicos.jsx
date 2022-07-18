import Image from "next/image";

export default function BtnServicos({
    text,
    className,
    src,
    alt,
    width,
    height,
}) {
    return (
        <div
            className={`inline-flex h-15 w-full sm:w-[210px] px-2 py-1 items-center  border rounded-xl transition-colors ${className}`}
        >
            <Image
                src={src}
                alt={alt}
                height={height}
                width={width}
                layout={"fixed"}
            />
            <h2 className={"ml-2 w-full text-center  sm:w-fit "}>{text}</h2>
        </div>
    );
}

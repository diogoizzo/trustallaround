import Image from "next/image";

export default function BtnGaleria({
    text,
    className,
    src,
    alt,
    width,
    height,
}) {
    return (
        <div
            className={`inline-flex space-x-4 min-h-[57px] max-w-[217px]  px-6 py-1 items-center  border rounded-xl transition-colors ${className}`}
        >
            <Image
                className=""
                src={src}
                alt={alt}
                height={height}
                width={width}
                layout={"fixed"}
            />
            <h2 className={"w-full text-center  sm:w-fit "}>{text}</h2>
        </div>
    );
}

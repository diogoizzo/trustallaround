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
            className={`inline-flex space-x-4 min-h-[60px]  px-6 py-1 items-center  border rounded-xl transition-colors ${className}`}
        >
            <Image
                className=""
                src={src}
                alt={alt}
                height={height}
                width={width}
                layout={"fixed"}
            />
            <h2 className={"w-full text-center max-w-[90px]   sm:w-fit "}>
                {text}
            </h2>
        </div>
    );
}

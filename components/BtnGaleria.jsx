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
            className={`inline-flex space-x-4 h-[57px] w-full px-6 py-1 items-center   border rounded-xl transition-colors ${className}`}
        >
            <Image
                className=""
                src={src}
                alt={alt}
                height={height}
                width={width}
                layout={"fixed"}
            />
            <h2 className={"w-full  text-center lg:max-w-[90px]    "}>
                {text}
            </h2>
        </div>
    );
}

import Image from "next/image";

export default function ToolsOptions({
    src,
    alt,
    height,
    width,
    title,
    onClick,
}) {
    return (
        <div
            onClick={onClick}
            className="flex flex-col items-center w-[412px] h-[414px] border-2 border-brand-orange rounded-lg py-6 px-6 transition-colors hover:bg-brand-orange-hover"
        >
            <h2 className="text-5xl font-bold text-center text-brand-orange">
                {title}
            </h2>
            <div className="w-[300px] h-[300px] mt-9">
                <Image
                    src={src}
                    alt={alt}
                    height={height}
                    width={width}
                    layout={"responsive"}
                />
            </div>
        </div>
    );
}

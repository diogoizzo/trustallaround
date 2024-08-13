import Image from "next/image";

export default function ToolsOptions2({
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
            className="flex flex-col items-center w-full lg:w-[412px] sm:h-[414px] border-2 border-brand-orange rounded-lg py-6  transition-colors hover:bg-brand-orange-hover mb-8 sm:mb-0"
        >
            <h2 className="text-5xl font-bold text-center text-brand-orange">
                {title}
            </h2>
            <div className="w-full sm:w-[300px] sm:h-[300px] mt-9">
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

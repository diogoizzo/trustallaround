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
            className="flex flex-col cursor-pointer items-center w-full lg:w-[412px] sm:h-[414px] border-2 border-brand-orange rounded-lg py-6  transition-colors hover:bg-brand-orange-hover mb-8 sm:mb-0"
        >
            <h2 className="text-5xl font-bold text-center text-brand-orange">
                {title}
            </h2>
            <div className=" w-[280px] h-[240px] p-1 md:p-2 md:w-[350px] md:h-[300px] mt-7">
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

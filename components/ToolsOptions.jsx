import Image from "next/image";

export default function ToolsOptions({src, alt, height, width, title, onClick}) {
    return (
        <div onClick={onClick}
             className="w-[612px] h-[614px] border-2 border-brand-orange rounded-lg py-6 transition-colors hover:bg-brand-orange-hover">
            <h2 className="text-7xl font-bold text-center text-brand-orange">{title}</h2>
            <div className="text-center pt-9">
                <Image src={src} alt={alt} height={height}
                       width={width} layout={"intrinsic"}/>
            </div>

        </div>
    )
}
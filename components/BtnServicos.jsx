import Image from "next/image";

export default function BtnServicos({text, className, src, alt, width, height}) {
    return (
        <div
            className={`flex h-15 w-[187px] px-2 py-1 items-center  border rounded-xl transition-colors ${className}`}>
            <Image src={src} alt={alt} height={height} width={width}
                   layout={"intrinsic"}/>
            <h2>{text}</h2>
        </div>
    )
}
import Image from "next/image";

export default function Tabs({ text, className }) {
    return (
        <div
            className={`flex w-full md:w-80 items-center space-x-4 border rounded-xl border-brand-blue pl-4 pb-2 transition-colors hover:bg-brand-orange-hover ${className}`}
        >
            <Image
                src={"/icons/container.svg"}
                alt={"ícone de um container"}
                height={34}
                width={40}
                layout={"intrinsic"}
            />
            <h3 className={"mt-2 pl-3"}>{text}</h3>
        </div>
    );
}

import Image from "next/image";

export default function TriviaDisplay({ title, text, imgSrc, imgAlt }) {
    return (
        <div className={"w-full flex"}>
            <div
                className={
                    "w-[320px] h-[180px] desktop:w-[400px] desktop:h-[240px] bg-black relative"
                }
            >
                <Image src={imgSrc} alt={imgAlt} layout="fill" />
            </div>
            <div className={"flex-1  pl-6 inline-flex flex-col"}>
                <h3 className={"text-slate-600 text-3xl font-semibold"}>
                    {title}
                </h3>
                <div
                    className={
                        "w-16 my-2 shrink-0 border-b-4 border-brand-orange rounded-full"
                    }
                ></div>
                <p className={"text-slate-600/80 text-xl"}>{text}</p>
            </div>
        </div>
    );
}

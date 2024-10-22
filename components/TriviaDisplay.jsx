import Image from "next/image";

export default function TriviaDisplay({ title, text, imgSrc, imgAlt }) {
    return (
        <div className={"w-full flex flex-col lg:flex-row"}>
            <div
                className={
                    "w-full h-[200px] md:h-[360px] lg:w-[400px] lg:h-[240px] bg-black relative"
                }
            >
                <Image src={imgSrc} alt={imgAlt} layout="fill" />
            </div>
            <div className={"flex-1  lg:pl-6 inline-flex flex-col"}>
                <h3
                    className={
                        "text-slate-600 text-xl mt-4 lg:text-3xl font-semibold"
                    }
                >
                    {title}
                </h3>
                <div
                    className={
                        "w-16 my-2 shrink-0 border-b-4 border-brand-orange rounded-full"
                    }
                ></div>
                <p className={"text-slate-600/80 text-lg lg:text-xl"}>{text}</p>
            </div>
        </div>
    );
}

import Image from "next/image";

export default function TriviaDisplay({ title, text, imgSrc, imgAlt }) {
    return (
        <div className={"w-full flex"}>
            <div className={"w-[25%] h-[200px] bg-black relative"}>
                <Image src={imgSrc} alt={imgAlt} layout="fill" />
            </div>
            <div className={"flex-1  pl-6 inline-flex flex-col"}>
                <h3 className={"text-slate-600 text-3xl font-semibold"}>
                    {title}
                </h3>
                <div
                    className={"h-1 my-2 rounded-full  bg-brand-orange w-16"}
                ></div>
                <p className={"text-slate-600/80 text-xl"}>{text}</p>
            </div>
        </div>
    );
}

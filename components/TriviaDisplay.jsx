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
                <p className={"text-slate-600/80 text-xl"}>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eius sint id nulla numquam hic in quibusdam doloribus ut
                    aliquid, fugit beatae iste tenetur quas neque labore sed
                    architecto ad aliquam dicta ullam corrupti alias laudantium
                    aspernatur incidunt. Inventore animi earum recusandae
                    consequatur voluptatem optio voluptate tenetur facilis
                    provident nesciunt. Natus a sequi molestiae aliquid tenetur
                    voluptate quia harum in est?
                </p>
            </div>
        </div>
    );
}

import NavGaleria from "../../../components/NavGaleria";
import ReactPlayer from "react-player";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";

export default function Servicos() {
    const [activeVideo, setActiveVideo] = useState(
        "https://www.youtube.com/watch?v=7LqCj0FVtyY"
    );
    const [isHydrated, setIsHydrated] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    return (
        <div className="w-full overflow-hidden">
            <div className="w-full mt-3 lg:mt-8 px-[6%] mx-auto text-brand-blue">
                <div>
                    <div className="flex flex-col lg:flex-row lg:items-end">
                        <NavGaleria />
                    </div>
                    <div className="my-14 w-full max-w-[1350px] desktop:max-w-[1600px] mx-auto flex-col lg:flex-row flex lg:h-[550px] desktop:h-[650px]">
                        {/* Div para o vídeo */}
                        {isHydrated && (
                            <div className="w-full h-[250px] md:h-[380px] lg:w-[65%] lg:h-full">
                                <ReactPlayer
                                    className="react-player"
                                    url={activeVideo}
                                    width="100%"
                                    height="100%"
                                    controls={true}
                                    playing={true}
                                />
                            </div>
                        )}

                        {/* Grid de vídeos */}
                        {isHydrated && (
                            <div className="w-full lg:w-[35%] h-full flex flex-col">
                                <div className="h-[5px] rounded-full mb-8 mt-8 lg:mt-0 lg:ml-4 bg-brand-orange "></div>
                                <div className="lg:pl-4 flex-1 grid grid-cols-2 grid-rows-3 gap-4 h-full">
                                    {/* Vídeo 1 */}
                                    <div
                                        className="relative w-full h-[100px] md:h-[180px] lg:h-full cursor-pointer rounded-sm overflow-hidden"
                                        onClick={() => {
                                            setActiveVideo(
                                                "https://www.youtube.com/watch?v=7LqCj0FVtyY"
                                            );
                                        }}
                                    >
                                        <Image
                                            className="object-cover"
                                            src="/images/T001.jpg"
                                            layout="fill"
                                            alt=""
                                        />
                                    </div>

                                    {/* Vídeo 2 */}
                                    <div
                                        className="relative w-full h-full cursor-pointer rounded-sm overflow-hidden"
                                        onClick={() => {
                                            setActiveVideo(
                                                "https://www.youtube.com/watch?v=XQBq-sIGv24"
                                            );
                                        }}
                                    >
                                        <Image
                                            className="object-cover"
                                            src="/images/T002.jpg"
                                            layout="fill"
                                            alt=""
                                        />
                                    </div>

                                    {/* Vídeo 3 */}
                                    <div
                                        className="relative w-full h-full cursor-pointer rounded-sm overflow-hidden"
                                        onClick={() => {
                                            setActiveVideo(
                                                "https://www.youtube.com/watch?v=Bygx_JtNFYw"
                                            );
                                        }}
                                    >
                                        <Image
                                            className="object-cover"
                                            src="/images/T003.jpg"
                                            layout="fill"
                                            alt=""
                                        />
                                    </div>

                                    {/* Vídeo 4 */}
                                    <div
                                        className="relative w-full h-full cursor-pointer rounded-sm overflow-hidden"
                                        onClick={() => {
                                            setActiveVideo(
                                                "https://www.youtube.com/shorts/zT_BkfVf1Ks"
                                            );
                                        }}
                                    >
                                        <Image
                                            className="object-cover"
                                            src="/images/T004.jpg"
                                            layout="fill"
                                            alt=""
                                        />
                                    </div>

                                    {/* Vídeo 5 */}
                                    <div
                                        className="relative w-full h-full cursor-pointer rounded-sm overflow-hidden"
                                        onClick={() => {
                                            setActiveVideo(
                                                "https://www.youtube.com/shorts/sUmiXQxFFGk"
                                            );
                                        }}
                                    >
                                        <Image
                                            className="object-cover"
                                            src="/images/T005.jpg"
                                            layout="fill"
                                            alt=""
                                        />
                                    </div>
                                    <a
                                        href={
                                            "https://www.youtube.com/@TRUSTALLAROUND"
                                        }
                                        className={"flex justify-center"}
                                    >
                                        <div
                                            className={
                                                "flex flex-col justify-center lg:flex-row items-center lg:space-x-4"
                                            }
                                        >
                                            <Image
                                                className={"flex-0"}
                                                src="/icons/seta-videos.svg"
                                                layout="intrinsic"
                                                height={60}
                                                width={60}
                                                alt=""
                                            />
                                            <p
                                                className={
                                                    "mt-3 lg:mt-0 lg:text-2xl uppercase font-bold"
                                                }
                                            >
                                                {t("galeria.btnVideos")}
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="h-[5px] rounded-full mt-8 lg:ml-4 bg-brand-orange "></div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

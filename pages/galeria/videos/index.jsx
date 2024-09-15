import NavGaleria from "../../../components/NavGaleria";
import ReactPlayer from "react-player";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-export-i18n";

export default function Servicos() {
    let [activeVideo, setActiveVideo] = useState(
        "https://www.youtube.com/watch?v=7LqCj0FVtyY"
    );

    const { t } = useTranslation();
    return (
        <div className="w-full overflow-hidden">
            <div className="w-full mt-3 lg:mt-8 px-[6%] mx-auto text-brand-blue">
                <div>
                    <div className="flex flex-col lg:flex-row lg:items-end">
                        <NavGaleria />
                    </div>
                    <div className="my-12 w-full max-w-[1350px] desktop:max-w-[1600px] mx-auto flex h-[550px] desktop:h-[650px]">
                        {/* Div para o vídeo */}
                        <div className="w-[65%] h-full">
                            <ReactPlayer
                                className="react-player"
                                url={activeVideo}
                                width="100%"
                                height="100%"
                                controls={true}
                                playing={true}
                            />
                        </div>

                        {/* Grid de vídeos */}
                        <div className="w-[35%] h-full flex flex-col">
                            <div className="h-[5px] rounded-full mb-8 ml-4 bg-brand-orange "></div>
                            <div className="pl-4 flex-1 grid grid-cols-2 grid-rows-3 gap-4 h-full">
                                {/* Vídeo 1 */}
                                <div
                                    className="relative w-full h-full cursor-pointer rounded-sm overflow-hidden"
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
                                            "https://www.youtube.com/shorts/sUmiXQxFFGk"
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
                                            "https://www.youtube.com/watch?v=XQBq-sIGv24"
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
                                            "https://www.youtube.com/watch?v=Bygx_JtNFYw"
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
                                            "flex flex-row items-center space-x-4"
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
                                                "text-2xl uppercase font-bold"
                                            }
                                        >
                                            {t("galeria.btnVideos")}
                                        </p>
                                    </div>
                                </a>
                            </div>
                            <div className="h-[5px] rounded-full mt-8 ml-4 bg-brand-orange "></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

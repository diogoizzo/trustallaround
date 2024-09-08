import NavGaleria from "../../../components/NavGaleria";
import ReactPlayer from "react-player";
import { useState } from "react";
import Image from "next/image";

export default function Servicos() {
    let [activeVideo, setActiveVideo] = useState(
        "https://www.youtube.com/watch?v=7LqCj0FVtyY"
    );
    return (
        <div className="w-full overflow-hidden">
            <div
                className={
                    "w-full mt-3 lg:mt-8 px-[6%] mx-auto text-brand-blue"
                }
            >
                <div>
                    <div className={"flex flex-col lg:flex-row lg:items-end"}>
                        <NavGaleria />
                    </div>
                    <div
                        className={
                            "my-12 w-full max-w-[1350px] desktop:max-w-[1600px] mx-auto flex h-[550px] desktop:h-[650px]"
                        }
                    >
                        <div className={"w-[65%]"}>
                            <ReactPlayer
                                className="react-player"
                                url={activeVideo}
                                width="100%"
                                height="100%"
                                controls={true}
                                playing={true}
                            />
                        </div>
                        <div
                            className={
                                "flex-1 pl-4 grid grid-cols-2 grid-rows-4 gap-4"
                            }
                        >
                            <div
                                className=" p-4 relative w-full overflow-clip cursor-pointer rounded-sm "
                                onClick={() => {
                                    setActiveVideo(
                                        "https://www.youtube.com/watch?v=7LqCj0FVtyY"
                                    );
                                }}
                            >
                                <Image
                                    className={"mx-w-full object-cover"}
                                    src={"/images/video1.jpg"}
                                    width={1080}
                                    height={1920}
                                    layout="fill"
                                    alt={""}
                                />
                            </div>
                            <div
                                className=" p-4 relative w-full overflow-clip cursor-pointer rounded-sm  "
                                onClick={() => {
                                    setActiveVideo(
                                        "https://www.youtube.com/shorts/sUmiXQxFFGk"
                                    );
                                }}
                            >
                                <Image
                                    className={"mx-w-full object-cover"}
                                    src={"/images/video2.jpg"}
                                    width={1080}
                                    height={1920}
                                    layout="fill"
                                    alt={""}
                                />
                            </div>
                            <div
                                className=" p-4 relative w-full overflow-clip cursor-pointer rounded-sm  "
                                onClick={() => {
                                    setActiveVideo(
                                        "https://www.youtube.com/watch?v=XQBq-sIGv24"
                                    );
                                }}
                            >
                                <Image
                                    className={"mx-w-full object-cover"}
                                    src={"/images/video3.jpeg"}
                                    width={1080}
                                    height={1920}
                                    layout="fill"
                                    alt={""}
                                />
                            </div>
                            <div
                                className=" p-4 relative w-full overflow-clip cursor-pointer rounded-sm  "
                                onClick={() => {
                                    setActiveVideo(
                                        "https://www.youtube.com/shorts/zT_BkfVf1Ks"
                                    );
                                }}
                            >
                                <Image
                                    className={"mx-w-full object-cover"}
                                    src={"/images/video4.jpeg"}
                                    width={1080}
                                    height={1920}
                                    layout="fill"
                                    alt={""}
                                />
                            </div>
                            <div
                                className=" p-4 relative w-full overflow-clip cursor-pointer rounded-sm  "
                                onClick={() => {
                                    setActiveVideo(
                                        "https://www.youtube.com/watch?v=Bygx_JtNFYw"
                                    );
                                }}
                            >
                                <Image
                                    className={"mx-w-full object-cover"}
                                    src={"/images/video5.jpg"}
                                    width={1080}
                                    height={1920}
                                    layout="fill"
                                    alt={""}
                                />
                            </div>
                            {/* <div className="bg-pink-500 p-4">Item 6</div>
                            <div className="bg-indigo-500 p-4">Item 7</div>
                            <div className="bg-teal-500 p-4">Item 8</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

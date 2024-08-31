import { useLanguageQuery, useTranslation } from "next-export-i18n";
import NavGaleria from "../../../components/NavGaleria";
import ReactPlayer from "react-player";

export default function Servicos() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
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
                    <div className={"my-12 w-full flex h-[550px]"}>
                        <div className={"w-[65%]"}>
                            <ReactPlayer
                                className="react-player"
                                url="https://www.youtube.com/watch?v=7LqCj0FVtyY"
                                width="100%"
                                height="100%"
                                controls={true}
                                playing={true}
                            />
                        </div>
                        <div
                            className={
                                "flex-1 pl-3 grid grid-cols-2 grid-rows-4 gap-4"
                            }
                        >
                            <div className="bg-blue-500 p-4">Item 1</div>
                            <div className="bg-green-500 p-4">Item 2</div>
                            <div className="bg-red-500 p-4">Item 3</div>
                            <div className="bg-yellow-500 p-4">Item 4</div>
                            <div className="bg-purple-500 p-4">Item 5</div>
                            <div className="bg-pink-500 p-4">Item 6</div>
                            <div className="bg-indigo-500 p-4">Item 7</div>
                            <div className="bg-teal-500 p-4">Item 8</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

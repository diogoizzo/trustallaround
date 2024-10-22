"use client";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import NavGaleria from "../../components/NavGaleria";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

export default function Servicos() {
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        setIsHydrated(true);
    }, []);

    return (
        <div className="w-full overflow-hidden">
            <div
                className={
                    "w-full mt-3 lg:mt-8 px-[6%] mx-auto text-brand-blue relative"
                }
            >
                <div>
                    <div className={"flex flex-col lg:flex-row lg:items-end"}>
                        <NavGaleria />
                    </div>
                    <div
                        className={
                            "my-14 w-full max-w-[890px] mx-auto h-[250px] md:h-[500px] desktop:max-w-[1300px] desktop:h-[680px]"
                        }
                    >
                        {isHydrated && (
                            <ReactPlayer
                                className="react-player"
                                url="https://www.youtube.com/watch?v=7LqCj0FVtyY"
                                width="100%"
                                height="100%"
                                controls={true}
                                playing={true}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

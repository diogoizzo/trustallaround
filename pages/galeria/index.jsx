import { useLanguageQuery, useTranslation } from "next-export-i18n";
import NavGaleria from "../../components/NavGaleria";
import ReactPlayer from "react-player";

export default function Servicos() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
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
                            "my-12 w-[60%] max-w-[890px] mx-auto h-[500px] desktop:max-w-[1300px] desktop:h-[680px]"
                        }
                    >
                        <ReactPlayer
                            className="react-player"
                            url="https://www.youtube.com/watch?v=7LqCj0FVtyY"
                            width="100%"
                            height="100%"
                            controls={true}
                            playing={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

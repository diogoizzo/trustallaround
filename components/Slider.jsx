import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import BallonSlider from "./BallonSlide";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/a11y";
import Image from "next/image";
import { A11y, Autoplay, Navigation, Pagination } from "swiper";

export default function Slider() {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            }}
            pagination={{ type: "bullets", clickable: true }}
            autoplay={{ delay: 4000 }}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
        >
            <SwiperSlide>
                <div className={"h-[500px] lg:h-[600px] w-full relative"}>
                    <Image
                        src="/images/Slide1.jpg"
                        alt="Slide 1"
                        layout="fill"
                        objectFit={"cover"}
                        objectPosition={"80% 10%"}
                        priority={true}
                    />
                    <div className="relative flex flex-col lg:flex-row items-center justify-center h-full space-y-8 lg:space-x-12 px-[10%]">
                        <div className="relative block w-[200px] lg:min-w-[350px] shrink-0">
                            <BallonSlider
                                arq={["base", "base-en", "base-es"]}
                            />
                        </div>
                        <span className="relative z-12 text-center lg:text-left">
                            <p className="text-xl md:text-2xl xl:text-4xl text-white inline-block">
                                {t("slider.slider1.primeiro")}
                            </p>
                            <h1 className="text-xl md:text-2xl xl:text-4xl text-white inline">
                                <strong className="text-brand-orange">
                                    &nbsp;{t("slider.slider1.bold")}
                                </strong>
                            </h1>
                            <p className="text-xl md:text-2xl xl:text-4xl text-white inline">
                                {" "}
                                {t("slider.slider1.segundo")}
                            </p>
                            {query?.lang === "en" ? null : (
                                <p className="text-xl md:text-2xl xl:text-4xl text-brand-orange inline">
                                    {" "}
                                    {t("slider.slider1.terceiro")}
                                    <span className="text-white">.</span>
                                </p>
                            )}
                        </span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"h-[500px] lg:h-[600px] w-full relative"}>
                    <Image
                        src="/images/Slide2.jpg"
                        alt="Slide 2"
                        layout="fill"
                        objectFit={"cover"}
                        objectPosition={"0 90%"}
                    />
                    <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full space-y-8 lg:space-x-12 px-[10%]">
                        <div className="relative block w-[200px] lg:min-w-[350px] shrink-0">
                            <BallonSlider
                                arq={["base", "base-en", "base-es"]}
                            />
                        </div>
                        <span className="relative z-12 text-center lg:text-left">
                            <p className="text-xl md:text-2xl xl:text-4xl text-white inline">
                                {t("slider.slider2.primeiro")}
                            </p>
                            <p className="text-xl md:text-2xl xl:text-4xl text-brand-orange inline">
                                {" "}
                                {t("slider.slider2.segundo")}
                            </p>
                            <p className="text-xl md:text-2xl xl:text-4xl text-white inline">
                                {" "}
                                {t("slider.slider2.terceiro")}
                            </p>
                            <p className="text-xl md:text-2xl xl:text-4xl text-brand-orange inline">
                                {" "}
                                {t("slider.slider2.quarto")}
                            </p>
                            <p className="text-xl md:text-2xl xl:text-4xl text-white inline">
                                {" "}
                                {t("slider.slider2.quinto")}
                            </p>
                        </span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={"h-[500px] lg:h-[600px] w-full relative"}>
                    <Image
                        src="/images/Slide3.jpg"
                        alt="Slide 3"
                        layout="fill"
                        objectFit={"cover"}
                        objectPosition={"center"}
                    />
                    <div className="flex flex-col lg:flex-row items-center justify-center h-full space-y-8 lg:space-x-12 px-[10%]">
                        <div className="relative  w-[200px] lg:min-w-[350px] shrink-0">
                            <BallonSlider
                                arq={["base", "base-en", "base-es"]}
                            />
                        </div>
                        <span className="relative z-12 text-center lg:text-left">
                            <p className="text-xl md:text-2xl xl:text-4xl text-white inline">
                                {t("slider.slider3.primeiro")}
                            </p>
                            <p className="text-xl md:text-2xl xl:text-4xl text-brand-orange inline">
                                {" "}
                                {t("slider.slider3.segundo")}
                                <span className="text-white">.</span>
                            </p>
                        </span>
                    </div>
                </div>
            </SwiperSlide>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </Swiper>
    );
}

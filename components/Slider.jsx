import {Swiper, SwiperSlide} from 'swiper/react';
import {useTranslation} from "next-export-i18n";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/a11y';
import Image from "next/image";
import {A11y, Autoplay, Navigation, Pagination} from "swiper";

export default function Slider() {
    const {t} = useTranslation();

    return (
        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            navigation={{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
            pagination={{type: 'bullets', clickable: true}}
            autoplay={{delay: 4000}}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
        >
            <SwiperSlide>
                <div>
                    <Image src="/images/Slide1.png" alt="Slide 1" layout="responsive" className="absolute xl:-top-16"
                           width="1450" height="500"/>
                    <span className="absolute inline-block top-[20%] left-[10%] w-[22%]">
                      <Image src="/images/base01.png" alt="como podemos facilitar sua vida hoje" width="387"
                             height="387" layout="intrinsic"/>
                  </span>
                    <span className="absolute inline-block top-[33%] right-[10%] w-[50%]">
                        <p className="md:text-2xl xl:text-4xl text-white inline-block">{t('slider.slider1.primeiro')}</p><h1
                        className="md:text-2xl xl:text-4xl text-white inline"><strong>&nbsp;{t('slider.slider1.bold')}</strong></h1><p
                        className="md:text-2xl xl:text-4xl text-white inline"> {t('slider.slider1.segundo')}</p>
                  </span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src="/images/Slide2.png" alt="Slide 1" layout="responsive" width="1450" height="500"/>
                    <span className="absolute inline-block top-[20%] left-[10%] w-[22%]">
                      <Image src="/images/base01.png" alt="como podemos facilitar sua vida hoje" width="387"
                             height="387" layout="intrinsic"/>
                  </span>
                    <span className="absolute inline-block top-[30%] right-[10%] w-[50%]">
                      <p className="md:text-2xl xl:text-4xl text-white">{t('slider.slider2')}</p>
                  </span>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div>
                    <Image src="/images/Slide3.png" alt="Slide 1" layout="responsive" width="1450" height="500"/>
                    <span className="absolute inline-block top-[20%] left-[10%] w-[22%]">
                      <Image src="/images/base01.png" alt="como podemos facilitar sua vida hoje" width="387"
                             height="387" layout="intrinsic"/>
                  </span>
                    <span className="absolute inline-block top-[30%] right-[10%] w-[50%]">
                      <p className="md:text-2xl xl:text-4xl text-white">{t('slider.slider3')}</p>
                  </span>
                </div>
            </SwiperSlide>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </Swiper>
    )
}
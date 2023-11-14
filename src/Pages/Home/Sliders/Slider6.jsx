import "./Slider.css"
import {register} from "swiper/element/bundle";
register()
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow} from "swiper/modules";

export default function Slider6() {
    const imgs = [
        {id: '1', image: 'img/projects/project6-1.jpg'},
        {id: '2', image: 'img/projects/project6-2.jpg'},
        {id: '3', image: 'img/projects/project6-3.jpg'},
    ]
    return (
        <div className="slider">
            <Swiper
            modules={[EffectCoverflow]}
            effect="coverflow"
            slidesPerView={1}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            speed={3000}
            >
            {imgs.map((item) => (
                <SwiperSlide key={item.id}>
                    <img
                    src={item.image}
                    alt="Slider"
                    className="slide--item"
                />
                </SwiperSlide>
            ))}
            </Swiper>
        </div>
    )
}
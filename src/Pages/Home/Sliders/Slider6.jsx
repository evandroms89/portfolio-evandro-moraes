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
        {id: '4', image: 'img/projects/project6-4.jpg'},
        {id: '5', image: 'img/projects/project6-5.jpg'},
    ]
    const imgsMob = [
        {id: '1', image: 'img/projects/project6m-1.jpg'},
        {id: '2', image: 'img/projects/project6m-2.jpg'},
        {id: '3', image: 'img/projects/project6m-3.jpg'},
        {id: '4', image: 'img/projects/project6m-4.jpg'},
        {id: '5', image: 'img/projects/project6m-5.jpg'},
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
            {window.innerWidth >= 700 ?
                imgs.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                        src={item.image}
                        alt="Slider"
                        className="slide--item"
                    />
                    </SwiperSlide>
                )) :
                imgsMob.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img
                        src={item.image}
                        alt="Slider"
                        className="slide--item"
                    />
                    </SwiperSlide>
                ))
            }
            </Swiper>
        </div>
    )
}
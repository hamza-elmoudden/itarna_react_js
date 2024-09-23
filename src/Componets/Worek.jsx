import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

export const Worek = () => {

  return (
    <section className="bg-[#4b4a54] py-10 overflow-hidden px-20" >
      <div className="py-2 flex justify-center">
        <div className="text-2xl uppercase hover:text-orange-600 font-bold cursor-pointer">
          <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
        </div>
      </div>
      <div className='px-3 py-5 container mx-auto overflow-hidden'>
        <div className="w-full h-[550px]">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="w-[400px]">
              <div className="h-[500px] py-4">
                <img className="h-full" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[400px]">
              <div className="h-[500px] py-4">
                <img className="h-full" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[400px]">
              <div className="h-[500px] py-4">
                <img className="h-full" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[400px]">
              <div className="h-[500px] py-4">
                <img className="h-full" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[400px]">
              <div className="h-[500px] py-4">
                <img className="h-full" src="https://swiperjs.com/demos/images/nature-1.jpg" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  )
}

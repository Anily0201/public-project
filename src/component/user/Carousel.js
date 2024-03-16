import React from 'react'
import {Swiper , SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../style/Main.css";
import {  Navigation, Pagination, Autoplay } from 'swiper/modules';
import "../../style/Main.css"
import "./Carousel.css"
import { get } from '../../axios/Fetchre';

const Carousel = () => {


  const [data, setData] = React.useState([]); 

  React.useEffect(() => {
    const fetchData = async () => {

      const responseData = await get('products?limit=10');
      console.log('data', responseData);
      setData(responseData)
    };
    fetchData();
  }, []);

  return (
    <>
    <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination,  Navigation]}
        className="mySwiper"
      >
        <div>
            {data?.map((item) => (
              <div key={item?.id}>
                <SwiperSlide>
                  <img src={item?.image} alt="no image" />
                </SwiperSlide>
              </div>
            ))}
          </div>
     
    </Swiper>
  </>
  )
}

export default Carousel

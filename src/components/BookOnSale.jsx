
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./BookOnSale.css"


import { Pagination, Navigation } from "swiper";

export default function BookOnSale() {
    let data = [
        {
          img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284203/cld-sample-5.jpg",
          id: 1
        },
        {
          img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284202/cld-sample-4.jpg",
          id: 2
        },
        {
          img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284201/cld-sample-3.jpg",
          id: 3
        },
        {
          img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284201/cld-sample-2.jpg",
          id: 4
        },
        {
          img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284200/cld-sample.jpg",
          id: 5
        },
        {
          img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284177/sample.jpg",
          id: 6
        },
        {
          img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284183/samples/sheep.jpg",
          id: 7
        },
        {
          img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284184/samples/bike.jpg",
          id: 8
        },
      ]
      const handleClick=(id)=>{
            console.log(id);
      }
  return (
    <div className="sale">
   
    <br />
      <Swiper 
        slidesPerView={6}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((item,i)=>{
            return(
                <SwiperSlide key={i} onClick={()=>handleClick(item.id)}>
                <img style={{height:"300px",width:"200px"}} src={item.img} alt="" />
            </SwiperSlide>
            )
            
        })}
        
      </Swiper>


      
      <div className="title_sale">
        <p>Book On Sale</p> 
    </div>
    </div>
  );
}
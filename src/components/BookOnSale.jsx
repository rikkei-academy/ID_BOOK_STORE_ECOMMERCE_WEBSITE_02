
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
        {
          img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284189/samples/imagecon-group.jpg",
          id: 9
        },
        {
          img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284190/samples/cloudinary-group.jpg",
          id: 10
        },
        {
          img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284184/samples/bike.jpg",
          id: 11
        },
        {
          img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284201/cld-sample-2.jpg",
          id: 12
        },
        {
          img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284201/cld-sample-3.jpg",
          id: 13
        },
        {
          img: "https://res.cloudinary.com/dhknvtaq2/image/upload/v1676284184/samples/bike.jpg",
          id: 14
        },
      ]
      const handleClick=(id)=>{
            console.log(id);
      }
  return (<>
   <div className="title_sale title_media ">
        <p>Book On Sale</p> 
        
    </div>
    <div className="sale">
   
    
      <Swiper 
        slidesPerView={6}
        freeMode={true}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper V6"
      >
        {data.map((item,i)=>{
            return(
                <SwiperSlide key={i} onClick={()=>handleClick(item.id)}>
                <img style={{height:"300px",width:"200px"}} src={item.img} alt="" />
            </SwiperSlide>
            )
            
        })}
        
      </Swiper>
      <Swiper 
        slidesPerView={5}
        freeMode={true}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper V5"
      >
        {data.map((item,i)=>{
            return(
                <SwiperSlide key={i} onClick={()=>handleClick(item.id)}>
                <img style={{height:"300px",width:"200px"}} src={item.img} alt="" />
            </SwiperSlide>
            )
            
        })}
        
      </Swiper>
      <Swiper 
        slidesPerView={4}
        freeMode={true}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper V4"
      >
        {data.map((item,i)=>{
            return(
                <SwiperSlide key={i} onClick={()=>handleClick(item.id)}>
                <img style={{height:"300px",width:"200px"}} src={item.img} alt="" />
            </SwiperSlide>
            )
            
        })}
        
      </Swiper>
      <Swiper 
        slidesPerView={3}
        freeMode={true}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper V3"
      >
        {data.map((item,i)=>{
            return(
                <SwiperSlide key={i} onClick={()=>handleClick(item.id)}>
                <img style={{height:"300px",width:"200px"}} src={item.img} alt="" />
            </SwiperSlide>
            )
            
        })}
        
      </Swiper>
      <Swiper 
        slidesPerView={2}
        freeMode={true}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper V2"
      >
        {data.map((item,i)=>{
            return(
                <SwiperSlide key={i} onClick={()=>handleClick(item.id)}>
                <img style={{height:"300px",width:"200px"}} src={item.img} alt="" />
            </SwiperSlide>
            )
            
        })}
      </Swiper>
 
      <div className="title_sale title_no_media">
        <p>Book On Sale</p> 
    </div>
    </div>
  </>
    
  );
}
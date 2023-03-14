
import Slider from "react-slick";

import "./FeatureProduct.css"





export default function FeatureProduct() {
  let data = [
    {
      img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_400,w_300/v1677125153/pq08ruuuett5svb0dczi.jpg",
      id: 1
    },
    {
      img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_400,w_300/v1676284202/cld-sample-4.jpg",
      id: 2
    },
    {
      img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_400,w_300/v1676284203/cld-sample-5.jpg",
      id: 3
    },
    {
      img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_400,w_300/v1676284203/cld-sample.jpg",
      id: 4
    },
    {
      img: "https://res.cloudinary.com/dhknvtaq2/image/upload/c_fill,h_400,w_300/v1676284201/cld-sample-2.jpg",
      id: 5
    },
    
]

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 4000,
      cssEase: "linear",
      responsive:[
        {
        breakpoint: 1380,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
          }
      }
    ]
    };
    return (
      <div className="my_products">
        <div className="title_product"></div>
        <Slider className="slide_no_media" {...settings}>
            {data.map((item,i)=>{
              return(
              <>
                <div key={i} className="product">
                  <div className="product_img"> 
                  <img  src={item.img} alt="" />
                  </div>
                 
                </div>
              </>)
            })}
        </Slider>

        
      
      </div>
    );
  
}

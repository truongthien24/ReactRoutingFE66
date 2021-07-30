import React from 'react'
import HomeCarousel from '../../Components/Carousel/HomeCarousel';
import SlickCarousel from '../../Components/SlickCarousel/SlickCarousel'

export default function Home(props) {
    console.log('propsRoute', props);
    return (
        <div>
            
            {/* <HomeCarousel/> */}

            {/* <SlickCarousel/> */}

            <button onClick={()=>{
                //Trở về trang trước
                props.history.goBack();
            }}>Go Back</button>
        </div>
    )
}

import React from 'react'
import { Carousel } from 'antd';

export default function HomeCarousel(props) {

    const contentStyle = {
        height: '360px',
        color: '#fff',
        lineHeight: '360px',
        textAlign: 'center',
        background: '#364d79',
    };

    const onChange = (a, b, c) => {
        console.log(a, b, c);
    }

    return (
        <div>
            <Carousel afterChange={onChange}>
                <div>
                    <img className="w-100" src="https://picsum.photos/id/77/200/200" style={contentStyle}></img>
                </div>
                <div>
                    <img className="w-100" src="https://picsum.photos/id/78/200/200" style={contentStyle}></img>
                </div>
                <div>
                    <img className="w-100" src="https://picsum.photos/id/79/200/200" style={contentStyle}></img>
                </div>
                <div>
                    <img className="w-100" src="https://picsum.photos/id/76/200/200" style={contentStyle}></img>
                </div>
            </Carousel>,
        </div>
    )
}

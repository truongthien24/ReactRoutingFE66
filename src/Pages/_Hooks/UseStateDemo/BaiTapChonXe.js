import React, {useState} from 'react'

export default function BaiTapChonXe() {

    const [img,setImg] = useState('./img/carBasic/red-car.jpg')

    const ChangeColor = (color) => {
        setImg(`./img/carBasic/${color}-car.jpg`)
    }

    return (
        <div className="row">
            <div className="col-6">
                <img src={img} alt="..." className="w-100"></img>
            </div>
            <div className="col-6">
                <div className="row">
                    <div className="col-3">
                        <button onClick={()=> {
                            ChangeColor('red')
                        }}>Red</button>
                    </div>
                    <div className="col-3">
                        <button onClick={()=> {
                            ChangeColor('black')
                        }}>Black</button>
                    </div>
                    <div className="col-3">
                        <button onClick={()=> {
                            ChangeColor('silver')
                        }}>Silver</button>
                    </div>
                    <div className="col-3">
                        <button onClick={()=> {
                            ChangeColor('steel')
                        }}>Steel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

import { useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

import './style_pages/home.css'
import carousel_img1 from '../assets/carousel_img1.jpeg'
import carousel_img2 from '../assets/carousel_img2.png'
import carousel_img3 from '../assets/carousel_img3.jpeg'
import carousel_img4 from '../assets/carousel_img4.jpeg'

export default function Home(){

    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide((slide + 1) % 4)
    }

    const prevSlide = () => {
        setSlide((slide - 1 + 4) % 4)
    }


    return (
        <div className="homepage">
            {/* <h1>Welcome to CraftsConnect</h1> */}
            <BsArrowLeftCircleFill className='arrow arrow-left' onClick={prevSlide} />
            <div className='carousel'>
                <img className="slides" src={carousel_img1} width={600} height={400} alt="img1" style={{ transform: `translateX(-${slide * 100}%)` }} />
                <img className="slides" src={carousel_img2} width={600} height={400} alt="img2" style={{ transform: `translateX(-${slide * 100}%)` }} />
                <img className="slides" src={carousel_img3} width={600} height={400} alt="img3" style={{ transform: `translateX(-${slide * 100}%)` }} />
                <img className="slides" src={carousel_img4} width={600} height={400} alt="img4" style={{ transform: `translateX(-${slide * 100}%)` }} />
            </div>
            <BsArrowRightCircleFill className='arrow arrow-right' onClick={nextSlide} />
            <span className='indicators'>
                <button className={`indicator ${slide === 0 ? 'active' : ''}`} onClick={() => setSlide(0)} ></button>
                <button className={`indicator ${slide === 1 ? 'active' : ''}`} onClick={() => setSlide(1)} ></button>
                <button className={`indicator ${slide === 2 ? 'active' : ''}`} onClick={() => setSlide(2)} ></button>
                <button className={`indicator ${slide === 3 ? 'active' : ''}`} onClick={() => setSlide(3)} ></button>
            </span>
            <div className='homepage-description'>
                <h1>Welcome to Crafts-Connect</h1>
                <i>"Thoughts ideate into actions"</i>
            </div>
        </div>
    )
}
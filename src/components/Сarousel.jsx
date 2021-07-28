import React, {useState} from 'react';
import './Carousel.css'

const Carousel = ({images, isOpen, isOpenChange}) => {
    const [currentImage, setCurrentImage] = useState(0)
    return (
        <div>
            {isOpen && <div className="modal">

                <img
                    src={images[currentImage]}
                    alt="portfolio-subImage"
                    className="modal-body"
                    onClick={()=>{setCurrentImage(currentImage => (currentImage + 1) % images.length)}}
                />
                <div className="close">
                    <button onClick={() => {
                        isOpenChange()
                        setCurrentImage(0)
                    }}>x
                    </button>
                </div>

            </div>}

        </div>

    )
};

export default Carousel;
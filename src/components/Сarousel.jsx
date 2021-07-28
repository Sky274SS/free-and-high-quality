import React, {useState} from 'react';
import './Carousel.css'

const Carousel = ({images, isOpen, isOpenChange}) => {
    const [currentImage, setCurrentImage] = useState(0)
    return (
        <div>
            {isOpen && <div className="modal">
                <div className="modal-body">
                    <div className="close">
                        <button onClick={() => {
                            isOpenChange()
                            setCurrentImage(0)
                        }}>x
                        </button>
                    </div>
                    <img
                        src={images[currentImage]}
                        alt="portfolio-subImage"
                        onClick={() => {
                            setCurrentImage(currentImage => (currentImage + 1) % images.length)
                        }}
                    />

                </div>
            </div>}

        </div>

    )
};

export default Carousel;
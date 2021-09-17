import React, {useState} from 'react'

const End = () => {
    return (
        <footer className='footer'>
            {/*<div>*/}
            {/*<h1>Контакты:</h1>*/}
            {/*<h1>8-953-107-07-77 - Владимир</h1>*/}
            {/*<h1>finishingofapartments23@gmail.com</h1>*/}
            {/*</div>*/}
            {/*<div >*/}

            {/*</div>*/}
            {/*<div>*/}
            {/*<h1>Сайт создан:</h1>*/}
            {/*<a className="inst" href="https://www.instagram.com/skymirs/">Сергей Мурашов</a>*/}
            {/*</div>*/}
            <div className="footer_top footer_general">
                <p>+7-953-107-07-77 - Владимир</p>
                <p>finishingofapartments23@gmail.com</p>
            </div>
            <div className="footer_middle footer_general">
                <span className="footer_img">
                     <a href="https://vk.com/id25725048/" target="_blank" rel="noreferrer">
                    <img src="images/vk.svg" alt="vk-logo"/>
                     </a>
                </span>
                <span className="footer_img">
                    <a href="https://mail.google.com/mail/" target="_blank" rel="noreferrer">
                        <img src="images/google.svg" alt="google-logo"/>
                    </a>
                </span>
                <span className="footer_img">
                    <a href="https://www.instagram.com/remont_vsem_krasnodar/" target="_blank" rel="noreferrer">
                        <img src="images/instagram.svg" alt="instagram-logo"/>
                    </a>
                </span>
            </div>
            <div className="footer_bottom footer_general">
                <p>© 2021 Ремонт квартир под ключ от эконом до элитных. Все права защищены.</p>
                <p className="developer"><p>Создатель сайта:</p>
                    <a href="https://www.instagram.com/skymirs/" target="_blank" rel="noreferrer">Сергей Мурашов</a>
                </p>
            </div>
        </footer>
)
}

export default End
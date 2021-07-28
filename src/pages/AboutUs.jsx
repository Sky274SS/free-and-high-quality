import React from 'react'
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className='about-container'>
            <div className='about'>
                О КОМПАНИИ
            </div>
            <div className="about-company">РЕМОНТ КВАРТИР ПОД КЛЮЧ ОТ ЭКОНОМ ДО ЭЛИТНЫХ</div>

            <div className='about-header'>Как проходит ремонт?</div>
            <div className="about-repair">
                <h1>заказ</h1>
                <h1>выезд</h1>
                <h1>составление сметы</h1>
                <h1>закупка материалов</h1>
                <h1>работа</h1>
                <h1>вывоз мусора</h1>
            </div>
            <div className='about-header'>наши преимущества</div>
            <div className="about-repair">
                <h1>уменьшение сроков в 2 раза (за 10 лет работы наша команда научилась оптимизировать все процессы
                    ремонта и отделки)</h1>
                <h1>точный расчет материалов</h1>
                <h1>работа без посредников (имеем в собственном арсенале все необходимое)</h1>
                <h1>скидки на материалы (прямые контакты с поставщиками)</h1>
                <h1>официальный договор </h1>
            </div>

        </div>
    )
}

export default AboutUs

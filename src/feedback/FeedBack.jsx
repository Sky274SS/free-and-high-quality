import React, {useState} from 'react';
import classes from './feedBack.module.css'

const FeedBack = () => {
    const [isOpen, setIsOpen] = useState(false)

    let newRequest ={}; let name; let description;let number;

    return (
        <div>
            <div className={classes.call} onClick={() => {
                setIsOpen(true)
            }}>
                Отправить заявку или задать вопрос
            </div>
            {isOpen && <div className={classes.modal}>
                <div className={classes.modalBody}>
                    <h1 className={classes.modalBodyTitle}>Введите необходимые данные и отправьте запрос</h1>
                    <form className={classes.formContainer}>
                        <label>Введите ваше имя</label> <input required type="text" onChange={e=>{name=e.target.value}}/>
                        <label>Введите ваш номер телефона или адрес электронной почты</label> <input required type="text" onChange={e=>{number=e.target.value}}/>
                        <select>
                            <option value="Change" disabled>Выбрать форму запроса</option>
                            <option value="Вопрос">Вопрос</option>
                            <option value="Заявка">Заявка</option>
                        </select>
                        <label>Введите текст запроса</label> <textarea required type="text" onChange={e=>{description=e.target.value}}/>
                        <button className={classes.button} onClick={()=>{
                            let currentDate = new Date()
                            newRequest={
                                "title":"Question",
                                "name":`${name}`,
                                "description":`${description}`,
                                "number":`${number}`,
                                "date":`${currentDate.getDate()}.${currentDate.getMonth()+1}.${currentDate.getFullYear()} год, ${currentDate.getHours()}:${currentDate.getMinutes()}`
                            }
                            console.log(newRequest)
                            if((name && name.trim()) &&(description && description.trim())&&(number && number.trim()))
                            {
                                fetch('http://localhost:8000/api/requests/', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json;charset=utf-8'
                                    },
                                    body: JSON.stringify(newRequest)
                                });
                            }

                        }}>Отправить</button>
                    </form>

                    <button className={classes.button} onClick={() => setIsOpen(false)}>Выйти</button>

                </div>

            </div>
            }

        </div>
    );
};

export default FeedBack;
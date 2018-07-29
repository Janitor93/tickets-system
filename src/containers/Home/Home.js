import React, { Component } from 'react';
import axios from '../../axios';

import classes from './Home.css';
import logo from '../../logo.svg';
import Button from '../../components/UI/Button/Button';

class Home extends Component {
    pushPage() {
        this.props.history.push('/tickets');
    }

    render() {
        return (
            <div className={classes.home}>
                <div className={classes.home__leftDiv}>
                <h1>Привет!</h1>
                <p>Главной целью было стоздать интерфейс для работы с билетами.</p>
                <p>В работе были использованы следующие вещи:</p>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>CSS Modules</li>
                    <li>Redux</li>
                    <li>React-Redax</li>
                    <li>Axios</li>
                </ul>
                <p>Моменты которые хотелось отметить: респонсив дизайн, данные по ваюте забираются AJAX-запросом с API Национального банка Республики Беларусь на текущий момент, обработка ошибок (если сломать ссылку запроса, об ошике сообщит окно в нижнем правом углу), идеальная работа чекбоксов (триггер между чекбоксом "Все" и остальными). Форма бронирования билета сохраняет данные в моем Firebase, поэтому, если вы мне не доверяете, то НЕ ВВОДИТЕ реальные данные!!!</p>
                <p>За пример бралось тестовое задание от aviasales: <a href="https://github.com/KosyanMedia/test-tasks/tree/master/aviasales" target="_blank">https://github.com/KosyanMedia/test-tasks/tree/master/aviasales</a></p>
                <Button 
                    clicked={this.pushPage.bind(this)}
                    style={{width: "50px"}}
                >Ticket System</Button>
                </div>
                <div className={classes.home__rightDiv}>
                    <img className={classes.home__logo} src={logo} alt="logo" />
                </div>
            </div>
        );
    }
}

export default Home;
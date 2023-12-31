import {NavLink} from "react-router-dom";
import './signIn.sass'
import SignInForm from "../signInForm/SignInForm.tsx";

function SignIn() {
    return (
        <div className="sign-in">
            <div className="sign-in__container container">
                <div className="sign-in__info">
                    <NavLink to={'/'} className="sign-in__backlink"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M20 12H4M4 12L10 18M4 12L10 6" stroke="#190636" stroke-opacity="0.3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>Вернуться на главную</NavLink>
                    <h1 className={"sign-in__title"}>Вход</h1>
                    <p className="sign-in__text">Выберите тип регистрации и введите необходимые данные. <br/>
                        Вы уже зарегистрированны на сайте? <NavLink to='/'>Зарегистрироваться</NavLink>
                    </p>
                    <div className="sign-in__forget-container">
                        <div className="sign-in__forget-title">Забыли пароль?</div>
                        <a href="" className="sign-in__forget-link">Восстановить</a>
                    </div>
                </div>
                <SignInForm />
            </div>
        </div>
    )
}

export default SignIn
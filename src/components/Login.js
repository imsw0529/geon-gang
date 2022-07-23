import React from "react";

function Login() {
    const [inputId, setInputId] = React.useState('');
    const [inputPw, setInputPw] = React.useState('');

    const handleInputId = (e) => {
        setInputId(e.target.value);
    };

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };

    const onSubmitAccount = () => {
        console.log(inputId);
        console.log(inputPw);
    };

    return (
        <div className="login">
            <div className="login-input">
                <div>
                    <input
                        name="id"
                        placeholder="ID"
                        onChange={handleInputId} />
                    <input
                        name="password"
                        placeholder="Password"
                        onChange={handleInputPw} />
                </div>
                <button onClick={onSubmitAccount}>로그인</button>
            </div>
            <div className="login-sub">
                <p>회원 가입</p>
            </div>
        </div>
    );
}

export default Login
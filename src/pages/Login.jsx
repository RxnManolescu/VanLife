import { useState } from "react"

export default function Login() {

    const [loginData, setLoginData] = useState({ email: "", password: "" })

    function handleSubmit(e) {
        e.preventDefault()
    }

    function handleChange(e) {
        const [name, value] = e.target
        setLoginData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <input type="email" name="email" value={loginData.email} onChange={handleChange} placeholder="Email address" />
                <input type="password" name="password" value={loginData.password} onChange={handleChange} placeholder="Password"/>
                <button>Log in</button>
            </form>
            <h4>Don't have an account? <span>Create one now</span></h4>
        </div>
    )
}
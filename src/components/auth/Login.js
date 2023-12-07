import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./Login.css"

export const Login = () => {
    const [email, set] = useState("hpassfield7@netvibes.com")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`http://localhost:8088/users?email=${email}`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("honey_user", JSON.stringify({
                        id: user.id,
                        staff: user.isStaff
                    }))

                    navigate("/")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Jason's Goofy Den of Turbulence</h1>
                    <h2>Enter at your own risk!</h2>
                    <fieldset>
                        <button type="button" className="entry_button" onClick={() => navigate("/home")}>
                            Traverse the Lands of Lordran, without the Lords...
                        </button>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}


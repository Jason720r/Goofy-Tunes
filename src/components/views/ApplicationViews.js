import { HomePage } from "./music/HomeView.js"
import { Route, Routes } from "react-router-dom"
import { BossPage } from "./music/BossView.js"
import { Login } from "../auth/Login.js"

export const ApplicationViews = () => {
	return <>
		<Routes>
		<Route path="/login" element={<Login />} />
		<Route path="/home" element={< HomePage/>} />
		<Route path="/boss" element={< BossPage/>} />
			</Routes>
			</>
}


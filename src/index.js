import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/menu";
import Clock from "./components/clock/clock";
import Settings from "./components/settings/settings";
import styled from "styled-components";

const Main = styled.main`
	height: 100vh;
	width: 100vw;
`;

ReactDOM.render(
	<BrowserRouter>
		<Main>
			<Menu />
			<Routes>
				<Route path="/" element={<Clock />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="*" element={<p>Humm... Il n'y a rien ici...</p>} />
			</Routes>
		</Main>
	</BrowserRouter>,
	document.getElementById("root")
);

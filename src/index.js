import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/menu";
import Clock from "./components/clock/clock";
import Settings from "./components/settings/settings";
import styled from "styled-components";

const Main = styled.main`
	background-color: #f3f3f3;
`;

const Content = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
	height: 100vh;
`;

const App = () => {
	return (
		<BrowserRouter>
			<Main>
				<Menu />
				<Content>
					<Routes>
						<Route path="/" element={<Clock />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="*" element={<p>Humm... Il n'y a rien ici...</p>} />
					</Routes>
				</Content>
			</Main>
		</BrowserRouter>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));

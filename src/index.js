import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/menu";
import Clock from "./components/clock/clock";
import Settings from "./components/settings/settings";
import styled from "styled-components";
import styles from "./variables/styles";

const Main = styled.main`
	@import url("https://fonts.googleapis.com/css2?family=Fira+Code&family=Montserrat:wght@300&display=swap");
	font-family: "Montserrat", sans-serif;
	background-color: ${styles.colors.background};
	color: ${styles.colors.text};
	a:link,
	a:visited,
	a:hover,
	a:active {
		color: ${styles.colors.text};
		text-decoration: none;
	}
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

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/menu";
import Clock from "./components/clock/clock";
import Settings from "./components/settings/settings";
import Footer from "./components/footer/footer";
import styled from "styled-components";
import styles from "./variables/styles";
import Background from "./components/background/background";

const Main = styled.main`
	@import url("https://fonts.googleapis.com/css2?family=Fira+Code&family=Montserrat:wght@300&display=swap");
	font-family: "Montserrat", sans-serif;
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
				<Background />
				<Menu />
				<Content>
					<Routes>
						<Route path="/" element={<Clock />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="*" element={<p>Humm... Il n'y a rien ici...</p>} />
					</Routes>
					<Footer />
				</Content>
			</Main>
		</BrowserRouter>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));

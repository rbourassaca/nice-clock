import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/menu";
import Clock from "./components/clock/clock";
import Settings from "./components/settings/settings";
import Footer from "./components/footer/footer";
import Background from "./components/background/background";
import "./index.scss";

const App = () => {
	return (
		<BrowserRouter basename="/nice-clock/">
			<main>
				<Background />
				<Menu />
				<section>
					<Routes>
						<Route path="/" element={<Clock />} />
						<Route path="/settings" element={<Settings />} />
						<Route path="*" element={<p>Humm... Il n'y a rien ici...</p>} />
					</Routes>
					<Footer />
				</section>
			</main>
		</BrowserRouter>
	);
};

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

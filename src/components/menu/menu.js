import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./menu.scss";

const Menu = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">
						<i className="bi bi-clock-fill" />
					</Link>
				</li>
				<li>
					<Link to="/settings">
						<i className="bi bi-gear-fill" />
					</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;

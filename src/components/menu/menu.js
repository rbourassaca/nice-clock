import { Link } from "react-router-dom";

const Menu = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/">Horloge</Link>
				</li>
				<li>
					<Link to="/settings">Paramêtres</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Menu;

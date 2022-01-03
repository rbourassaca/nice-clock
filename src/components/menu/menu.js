import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

const Ul = styled.ul`
	list-style-type: none;
`;

const A = styled(Link)`
	&:link,
	&:visited,
	&:hover,
	&:active {
		text-decoration: none;
		color: black;
	}
`;

const Menu = () => {
	return (
		<Nav>
			<Ul>
				<li>
					<A to="/">Horloge</A>
				</li>
				<li>
					<A to="/settings">Paramètres</A>
				</li>
			</Ul>
		</Nav>
	);
};

export default Menu;

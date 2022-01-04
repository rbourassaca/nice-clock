import { Link } from "react-router-dom";
import styled from "styled-components";
import gear from "bootstrap-icons/icons/gear-fill.svg";
import clock from "bootstrap-icons/icons/clock-fill.svg";

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
					<A to="/">
						<img src={clock} />
					</A>
				</li>
				<li>
					<A to="/settings">
						<img src={gear} />
					</A>
				</li>
			</Ul>
		</Nav>
	);
};

export default Menu;

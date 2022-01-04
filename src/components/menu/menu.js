import { Link } from "react-router-dom";
import styled from "styled-components";
import gear from "bootstrap-icons/icons/gear-fill.svg";
import clock from "bootstrap-icons/icons/clock-fill.svg";

const Menu = () => {
	const Nav = styled.nav`
		position: absolute;
		right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
	`;

	const Ul = styled.ul`
		list-style-type: none;
		margin: 1rem;
	`;

	const Li = styled.li`
		&:not(:last-child) {
			margin-bottom: 0.5rem;
		}
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

	const Img = styled.img`
		width: 3rem;
	`;

	return (
		<Nav>
			<Ul>
				<Li>
					<A to="/">
						<Img src={clock} />
					</A>
				</Li>
				<Li>
					<A to="/settings">
						<Img src={gear} />
					</A>
				</Li>
			</Ul>
		</Nav>
	);
};

export default Menu;

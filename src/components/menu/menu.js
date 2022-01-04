import { Link } from "react-router-dom";
import styled from "styled-components";
import styles from "../../variables/styles";
import "bootstrap-icons/font/bootstrap-icons.css";

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
	}
	&:link,
	&:visited,
	&:active {
		opacity: 0.2;
	}
	&:hover {
		opacity: 0.7;
	}
`;

const Icon = styled.i`
	font-size: 3rem;
	color: ${styles.colors.text};
`;

const Menu = () => {
	return (
		<Nav>
			<Ul>
				<Li>
					<A to="/">
						<Icon className="bi bi-clock-fill" />
					</A>
				</Li>
				<Li>
					<A to="/settings">
						<Icon className="bi bi-gear-fill" />
					</A>
				</Li>
			</Ul>
		</Nav>
	);
};

export default Menu;

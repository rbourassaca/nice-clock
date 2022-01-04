import styled from "styled-components";
import styles from "../../variables/styles";

const Foot = styled.footer`
	position: absolute;
	bottom: ${styles.spacing.windowBorder};
`;

const Footer = () => {
	return (
		<Foot>
			<p>
				Créer&nbsp;par&nbsp;
				<a href="https://rbourassa.ca" target="_blank">
					Raphael&nbsp;Bourassa
				</a>
			</p>
		</Foot>
	);
};

export default Footer;

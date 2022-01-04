import styled from "styled-components";
import { useTime } from "../../hooks/useTime";
import Numbers from "./numbers/numbers";

const P = styled.p`
	display: flex;
	font-size: 6rem;
	font-family: "Fira Code", monospace;
`;

const Clock = () => {
	const [hour, minute, second] = useTime();
	return (
		<div>
			<P>
				<Numbers num={hour} />
				:
				<Numbers num={minute} />
				:
				<Numbers num={second} />
			</P>
		</div>
	);
};

export default Clock;

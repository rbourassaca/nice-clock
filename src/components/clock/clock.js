import { useTime } from "../../hooks/useTime";
import Numbers from "./numbers/numbers";
import "./clock.scss";

const Clock = () => {
	const [hour, minute, second] = useTime();
	return (
		<div className="clock">
			<p>
				<Numbers num={hour} />
				:
				<Numbers num={minute} />
				:
				<Numbers num={second} />
			</p>
		</div>
	);
};

export default Clock;

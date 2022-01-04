import { useTime } from "../../hooks/useTime";

const Clock = () => {
	const [hour, minute, second] = useTime();
	return (
		<div>
			<p>{hour}</p>
			<p>{minute}</p>
			<p>{second}</p>
		</div>
	);
};

export default Clock;

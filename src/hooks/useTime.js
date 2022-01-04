import { useEffect, useState } from "react";

export const useTime = () => {
	let d = new Date();
	const [seconds, setSeconds] = useState(d.getSeconds());
	const [minutes, setMinutes] = useState(d.getMinutes());
	const [hours, setHours] = useState(d.getHours());

	useEffect(() => {
		const tick = setInterval(() => {
			d = new Date();
			setSeconds(d.getSeconds());
			if (d.getSeconds() === 0) {
				setMinutes(d.getMinutes());
				if (d.getMinutes() === 0) {
					setHours(d.getHours());
				}
			}
		}, 1000);
		return () => clearInterval(tick);
	}, []);

	return [hours, minutes, seconds];
};

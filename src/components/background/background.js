import { useState, useEffect, useRef } from "react";
import * as three from "three";
import fog from "vanta/dist/vanta.fog.min";
import "./background.scss";

const Background = () => {
	const [vantaEffect, setVantaEffect] = useState();
	const animation = useRef();
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				fog({
					el: animation.current,
					THREE: three,
					mouseControls: false,
					touchControls: false,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					highlightColor: 0x2778ae,
					midtoneColor: 0x7fff,
					lowlightColor: 0x21219a,
					baseColor: 0x000,
					blurFactor: 0.9,
					zoom: 0.7,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	});
	return <div className="animatedBackground" ref={animation} />;
};

export default Background;

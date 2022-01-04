import { useState, useEffect, useRef } from "react";
import * as three from "three";
import fog from "vanta/dist/vanta.fog.min";
import styled from "styled-components";
import styles from "../../variables/styles";

const Bg = styled.div`
	position: absolute;
	background-color: ${styles.colors.background};
	z-index: -1;
	height: 100vh;
	width: 100vw;
	overflow: hidden;
`;

const Background = () => {
	const [vantaEffect, setVantaEffect] = useState(0);
	const myref = useRef();
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				fog({
					el: myref.current,
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
	return <Bg ref={myref} />;
};

export default Background;

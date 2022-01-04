import PropTypes from "prop-types";

const Numbers = ({ num, length = 2 }) => {
	return (
		<p>{num.toLocaleString(undefined, { minimumIntegerDigits: length })}</p>
	);
};

export default Numbers;

Numbers.propTypes = {
	num: PropTypes.number.isRequired,
	length: PropTypes.number,
};

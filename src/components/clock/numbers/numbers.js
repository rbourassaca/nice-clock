import PropTypes from "prop-types";

const Numbers = ({ num, length = 2 }) => {
	return <>{num.toLocaleString(undefined, { minimumIntegerDigits: length })}</>;
};

export default Numbers;

Numbers.propTypes = {
	num: PropTypes.number.isRequired,
	length: PropTypes.number,
};

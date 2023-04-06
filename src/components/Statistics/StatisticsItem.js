import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const StatisticsItem = ({label, percentage}) => {
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
return (
<li className={css.item} style={{backgroundColor: getRandomHexColor()}}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
    </li>
);
};

StatisticsItem.propTypes = {
label: PropTypes.string.isRequired,
percentage: PropTypes.number.isRequired,
};

export default StatisticsItem;
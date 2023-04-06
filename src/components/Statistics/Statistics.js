import PropTypes from 'prop-types';
import StatisticsItem from './StatisticsItem';
import css from './Statistics.module.css';

const Statistics = ({text, data}) => {
return (
<div>
<section className={css.statistics}>
{text && <h2 className={css.title}>{text}</h2>}

<ul className={css.statlist}>
{data.map(item => {
return (
<StatisticsItem
key = {item.id}
label = {item.label}
percentage={item.percentage}
/>
);
})}
</ul>
</section>
</div>
);
};

Statistics.propTypes = {
text: PropTypes.string,
data: PropTypes.arrayOf(
PropTypes.shape({
id: PropTypes.string.isRequired,
label: PropTypes.string.isRequired,
percentage: PropTypes.number.isRequired,
}).isRequired
),
};

export default Statistics;
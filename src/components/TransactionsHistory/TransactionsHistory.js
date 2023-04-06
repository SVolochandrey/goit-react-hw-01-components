import PropTypes from 'prop-types';
import css from './TransactionsHistory.module.css';

const TransactionsHistory = ({items}) => {
return (
<table className={css.transactionhistory}>
  <thead className={css.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    {items.map(({id, type, amount, currency}) => {
    return (
        <tr key={id}>
        <td className={css.type}>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    );
    })}
  </tbody>
</table>
);
};

TransactionsHistory.propTypes = {
items: PropTypes.arrayOf(
PropTypes.shape({
id: PropTypes.string.isRequired,
type: PropTypes.string.isRequired,
amount: PropTypes.string.isRequired,
currency: PropTypes.string.isRequired,
})
),
};

export default TransactionsHistory;
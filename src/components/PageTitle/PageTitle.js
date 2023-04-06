import PropTypes from 'prop-types';
import css from './PageTitle.module.css';


const PageTitle = ({ title }) => {
  return <h1 className={css.title}> {title}</h1>;
};

PageTitle.protoTypes = {
  title: PropTypes.string,
};

export default PageTitle;
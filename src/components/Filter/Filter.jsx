import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined';

// import actions from 'redux/actions.js';
import filterAction from 'redux/filter/filter-actions';
import s from './Filter.module.css';

const Filter = ({ filter, setFilter, onReset }) => {
  return (
    <div className={s.filter}>
      <label>
        <span className={s.label}>Filter</span>
        <input
          type="text"
          name="filter"
          className={s.input}
          value={filter}
          onChange={evt => setFilter(evt.target.value)}
        />
      </label>

      <IconButton aria-label="delete" onClick={() => onReset(setFilter)}>
        {filter && <RotateLeftOutlinedIcon />}
      </IconButton>
    </div>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: state.filter,
});

const mapDispatchToProps = dispatch => {
  return {
    setFilter: value => dispatch(filterAction.setFilter(value)),
    onReset: () => dispatch(filterAction.resetFilter()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

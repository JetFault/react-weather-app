import { connect } from 'react-redux';

import FAB from '../components/FloatingActionButton';

const mapStateToProps = (state, ownProps) => {
  return {
    iconNormal: 'add',
    iconActive: 'close',
    ...ownProps,
    active: false
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      //dispatch(); //TODO: Should dispatch change to Add New Card Route
    }
  };
};

const AddNewFAB = connect(mapStateToProps, mapDispatchToProps)(FAB);

export default AddNewFAB;

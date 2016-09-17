import React from 'react';
import { connect } from 'react-redux';

import { setPageTitle, activateEditPage } from '../../actions';


class EditPage extends React.Component {
  componentDidMount() {
    this.props.changeTitle('Rearrange & Delete');
    this.props.activateEdit(true);
  }
  componentDidUpdate = this.componentDidMount

  componentWillUnmount() {
    this.props.activateEdit(false);
  }

  render() {
    return null;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeTitle: (title) => {
      dispatch(setPageTitle(title));
    },
    activateEdit: (isActive) => {
      dispatch(activateEditPage(isActive));
    }
  };
};

export default connect(null, mapDispatchToProps)(EditPage);

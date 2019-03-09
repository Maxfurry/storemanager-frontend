import React from 'react';
import { Loader } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import './Loading.scss';

const Loading = ({ size }) => <Loader size={size} active inline="centered" />;

export default Loading;

Loading.propTypes = {
  size: PropTypes.string
};

Loading.defaultProps = {
  size: 'tiny'
};

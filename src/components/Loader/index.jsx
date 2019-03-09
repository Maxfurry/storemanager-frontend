import React from 'react';
import { Loader } from 'semantic-ui-react';
import './Loader.scss';

const RedirectLoader = () => (
  <div className="redirectLoginLoader">
    <Loader active inline="centered" size="massive">Loading...</Loader>
  </div>
);

export default RedirectLoader;

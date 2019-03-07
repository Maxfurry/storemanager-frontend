import React from 'react';
import { Grid } from 'semantic-ui-react';

import './style/index.scss';

export default function Footer() {
  return (
    <Grid className="footer" verticalAlign="middle">
      <Grid.Row className="footerText" centered>
        @copyright 2018. Store Manager App by Peerless
      </Grid.Row>
    </Grid>
  );
}

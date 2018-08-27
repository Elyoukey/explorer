/*!
 * Phylogeny Explorer
 *
 * @summary
 * @author Emmanuel Proulx
 *
 * Copyright(c) 2018 Phylogeny Explorer
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Forgot.css';
import ForgotForm from './Form';
import { Grid, Row, Col } from 'react-bootstrap';

const title = 'Forgot Password';

class Forgot extends React.Component {
  constructor(props, context) {
    super(props);
    if (context.setTitle) {
      context.setTitle(title);
    }
    this.state = {
      username: '',
      errors: '',
      message: '',
    };
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          {this.state.message}
          <Grid>
            <Row>
              <Col sm={5}>
                <ForgotForm />
              </Col>
              <Col sm={1} className={s.middleCol} />
              <Col sm={6} />
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}

Forgot.contextTypes = { setTitle: React.PropTypes.func.isRequired };

export default withStyles(s)(Forgot);

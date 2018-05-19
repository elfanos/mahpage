/**
 * Created by Rasmus on 2018-05-17.
 */
import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { bootstrapUtils } from 'react-bootstrap/lib/utils'

bootstrapUtils.addStyle(Jumbotron, 'custom');

export const customJumbotron = (
  <div>
      <style type="text/css">{`
          .jumbotron p {
            font-size: 17px;
          }
      `}</style>
  </div>
);
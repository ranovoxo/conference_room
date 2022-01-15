import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as AWS from 'aws-sdk';
import { ConfigurationOptions } from 'aws-sdk';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_CLIENTID;

const configuration: ConfigurationOptions = {
  region: 'us-east-1',
  secretAccessKey: process.env.AWS_ACCESS_KEY,
  accessKeyId: process.env.AWS_SECRET_KEY
}

AWS.config.update(configuration)

ReactDOM.render(
  <Auth0Provider
  domain={domain}
  clientId={clientId}
  redirectUri={window.location.origin}>
    <App />,
  </Auth0Provider>,
  document.getElementById('root')
);


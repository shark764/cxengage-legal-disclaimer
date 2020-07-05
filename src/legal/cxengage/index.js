import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FormattedMessage } from 'react-intl';
import moment from 'moment';

import messages from './messages';

import cxImg from './assets/images/cxengage_white.png';
import favicon16 from './favicon-16x16.png';
import favicon32 from './favicon-32x32.png';
import './style.css';

const CxEngage = () => (
  <HelmetProvider>
    <FormattedMessage {...messages.pageTitle}>
      {(title) => (
        <Helmet>
          <title>
            {title}
          </title>

          <link rel="icon" sizes="16x16" href={favicon16} type="image/png" />
          <link rel="icon" sizes="32x32" href={favicon32} type="image/png" />
        </Helmet>
      )}
    </FormattedMessage>

    <div className="container cxengage-legal">
      <div id="legal-page" className="lo-gradient-squares">
        <div id="legal-wrapper" className="legal-default">
          <img src={cxImg} height="23" alt="CxEngage" />
          <div id="glass-wrapper">
            <div className="blur-over">
              <div>
                <h1>
                  <FormattedMessage {...messages.header} />
                </h1>
                <p className="smallLabel">
                  <FormattedMessage
                    {...messages.lastUpdate}
                    values={{
                      lastUpdate: moment('2018-02-12').format('LL'),
                    }}
                  />
                </p>
                <p className="disclaimer">
                  <FormattedMessage
                    {...messages.disclaimer}
                    values={{
                      cr: <br />,
                    }}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </HelmetProvider>
);

export default CxEngage;

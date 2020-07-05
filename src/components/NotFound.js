import React from 'react';
import { FormattedMessage } from 'react-intl';

import messages from './messages';

const NotFound = () => (
  <h1>
    <FormattedMessage {...messages.notFound} />
  </h1>
);

export default NotFound;

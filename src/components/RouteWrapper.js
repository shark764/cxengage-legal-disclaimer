import React from 'react';
import PropTypes from 'prop-types';

import TranslationProvider from './TranslationProvider';

const RouteWrapper = (WrappedComponent) => {
  const WrappedRoute = (props) => {
    const {
      match: {
        params: { locale },
      },
    } = props;

    return (
      <TranslationProvider locale={locale}>
        <WrappedComponent {...props} />
      </TranslationProvider>
    );
  };

  WrappedRoute.propTypes = {
    match: PropTypes.object,
  };

  return WrappedRoute;
};

export default RouteWrapper;

const IntlError = (err) => {
  if (err.code === 'MISSING_TRANSLATION') {
    console.warn('Missing translation', err.message);
    return;
  }
  throw err;
};

export default IntlError;

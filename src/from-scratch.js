const resolvedWrapper = (value) => {
  return new Promise((resolve) => resolve(value));
};

const rejectedWrapper = (value) => {
  return new Promise((resolve, reject) => reject(new Error(value)));
};

const handleResolvedPromise = (value) => {
  Promise.resolve(value).then((value) => {
    console.log(value);
  });
  return value;
};

const handleResolvedOrRejectedPromise = (value) => {
  return Promise.resolve(value)
    .then((value) => {
      console.log(value);
      return value;
    })
    .catch((error) => {
      console.error(`Your error message was: ${error.message}`);
      return null;
    });
};

const pauseForMs = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};

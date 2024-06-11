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

const handleResolvedOrRejectedPromise = () => {};

const pauseForMs = () => {};

module.exports = {
  resolvedWrapper,
  rejectedWrapper,
  handleResolvedPromise,
  handleResolvedOrRejectedPromise,
  pauseForMs,
};

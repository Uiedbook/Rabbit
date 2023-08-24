// really simple thing to do
export const throttle = (cb, time) => {
  let debID: number | undefined;
  return (...args: any) => {
    if (debID) {
      clearTimeout(debID);
    }
    debID = setTimeout(() => {
      cb(...args);
    }, time);
  };
};

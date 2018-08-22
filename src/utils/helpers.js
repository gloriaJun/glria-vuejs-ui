function isEmpty(obj) {
  if (obj === null) return true;
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;
  if (typeof obj !== 'object') return true;
  let flag = true;

  Object.keys(obj).every((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      flag = false;
      return false;
    }
    return true;
  });
  return flag;
}

export default {
  isEmpty,
};

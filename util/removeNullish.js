export default function(obj) {
  return Object.keys(obj).reduce((acc, key) => {
    return obj[key] ? { ...acc, [key]: obj[key] } : acc;
  }, {});
}
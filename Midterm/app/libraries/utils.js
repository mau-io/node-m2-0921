// Format: YYYY-MM-DD
const getDate = ({days = 0} = {}) => {
  const date  = new Date();

  date.setDate(date.getDate() + days);

  const day   = date.getDate();
  const month = date.getMonth() + 1;
  const year  = date.getFullYear();
  return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
};

// gets the first element of an array
const getFirst = (array) => {
  return (Array.isArray(array) && array[0]) ?? null;
};

// searches an array of objects for one that matches by the query: {key: value}
const findBy = (array = [], query) => {

  const [
    [
      key = '',
      value = ''
    ] = []
  ] = Object.entries(query);
  
  return Array.isArray(array) && array.find(
    ({
      [key]: dynamic
    }) => (dynamic === value)
  ) || null;
};

// snake_to_camel => snakeToCamel
const snakeToCamel = (str, space = '') => str.replace(
  /([-_][a-z])/g,
  (group) => group.toUpperCase()
    .replace('-', space)
    .replace('_', space)
);

const createCookieString = (object) => {
  let string = '';
  Object.keys(object).forEach((key) => {
    string += `${key}=${object[key]};`;
  });
  return string;
};

const toBase64 = (data) => Buffer.from(data, 'binary').toString('base64');

module.exports = {
  getDate,
  getFirst,
  toBase64,
  findBy,
  snakeToCamel,
  createCookieString
};

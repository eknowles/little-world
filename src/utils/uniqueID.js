let lastId = 0;

const uniqueID = (prefix = 'id') => {
  lastId++;
  return `${prefix}${lastId}`;
};

export default uniqueID;

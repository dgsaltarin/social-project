const db = {
  user: [{ id: '1', name: 'Daniel' }],
};

async function list(table) {
  return db[table] || [];
}

async function get(table, id) {
  let collection = await list(table);
  return collection.filter((item) => item.id === id)[0] || null;
}

async function upsert(table, data) {
  if (!db[table]) {
    db[table] = [];
  }
  db[table].push(data);
  console.log(db);
}

async function query(table, filter) {
  let collection = await list(table);
  let keys = Object.keys(filter);
  let key = keys[0];
  return collection.filter((item) => item[key] === filter[key])[0] || null;
}

async function remove(table, id) {
  return true;
}

module.exports = {
  list,
  get,
  upsert,
  remove,
  query,
};

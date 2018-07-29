import { AsyncStorage } from 'react-native';
const autoLoadKeys = ['id_token', 'access_token', 'me'];

const _store = {};

async function init() {
  try {
    for (const key of autoLoadKeys) {
      _store[key] = await AsyncStorage.getItem(key);
    }
  } catch (err) {
    console.log('RN Strorage, err: ', err);
  }
}

function save(key, value) {
  _store[key] = value;
  AsyncStorage.setItem(key, value).catch(e => console.log('RNStrorage,  err save', e));
}

function load(key) {
  return decodeURIComponent(_store[key]);
}

function remove(key) {
  delete _store[key];
  AsyncStorage.removeItem(key).catch(e => console.log('RNStrorage,  err remove', e));
}

function loadAll() {
  return _store;
}

export default { save, load, loadAll, remove, init };

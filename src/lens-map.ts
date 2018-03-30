import { lens, Lens } from 'ramda';

function createGetValue<K, V>(key: K) {
  return (map: Map<K, V>) => map.get(key);
}

function createSetValue<K, V>(key: K) {
  return (value: V, map: Map<K, V>) => {
    const clone = new Map<K, V>(map);
    clone.set(key, value);
    return clone;
  };
}

export default <K>(key: K): Lens => lens(
  createGetValue(key),
  createSetValue(key),
);

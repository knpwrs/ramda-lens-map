import {
  Lens,
  compose,
  lensProp,
  set,
} from 'ramda';
import lensMap from './lens-map';

describe('lens-map', () => {
  it('should immutably set values', () => {
    const map = new Map([['foo', 'bar']]);
    const newMap = set(lensMap('foo'), 'baz', map);
    expect(newMap).not.toBe(map);
    expect(map.get('foo')).toBe('bar');
    expect(newMap.get('foo')).toBe('baz');
  });

  it('should compose with other lenses', () => {
    const data = { map: new Map([['foo', 'bar']]) };
    const newData = set(
      <Lens>compose(
        lensProp('map'),
        lensMap('foo'),
      ),
      'baz',
      data,
    );
    expect(newData).not.toBe(data);
    expect(newData.map).not.toBe(data.map);
    expect(data.map.get('foo')).toBe('bar');
    expect(newData.map.get('foo')).toBe('baz');
  });
});

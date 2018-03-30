# ramda-lens-map

[![Dependency Status](https://img.shields.io/david/knpwrs/ramda-lens-map.svg)](https://david-dm.org/knpwrs/ramda-lens-map)
[![devDependency Status](https://img.shields.io/david/dev/knpwrs/ramda-lens-map.svg)](https://david-dm.org/knpwrs/ramda-lens-map#info=devDependencies)
[![Greenkeeper badge](https://badges.greenkeeper.io/knpwrs/ramda-lens-map.svg)](https://greenkeeper.io/)
[![Build Status](https://img.shields.io/travis/knpwrs/ramda-lens-map.svg)](https://travis-ci.org/knpwrs/ramda-lens-map)
[![Npm Version](https://img.shields.io/npm/v/ramda-lens-map.svg)](https://www.npmjs.com/package/ramda-lens-map)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Badges](https://img.shields.io/badge/badges-8-orange.svg)](http://shields.io/)

A lens for [ramda] which lets you focus on a key in a [`Map`].

## Installation

```
npm i ramda-lens-map
```

## Usage

You can use `ramda-lens-map` like any other lens from [ramda]. For instance, to
set the value in a [`Map`]:

```js
import { set } from 'ramda';
import lensMap from 'ramda-lens-map';

const myMap = new Map();
const myNewMap = set(lensMap('foo'), 'bar', myMap);
```

`myNewMap` now has a key of `'foo'` with a value of `'bar'`. The original map is
completely unaffected.

### Advanced Usage

[ramda] uses [Laarhoven Lenses] which are composable. Consider the following
example:

```js
import {
  compose,
  construct,
  lensIndex,
  set,
  times,
} from 'ramda';
import lensMap from 'ramda-lens-map';

const myMaps = times(construct(Map), 3); // Construct an array of three Maps
const myNewMaps = set(compose(lensIndex(1), lensMap('foo')), 'bar', myMaps);
```

`myNewMaps` is a new array where the first and third [`Map`] objects are
unaffected and referentially equal to the first and third [`Map`] objects in
`myMaps`. The second [`Map`] object in `myNewMaps` is a brand new [`Map`] with
a key `'foo'` set to a value `'bar'`. See [`src/lens-map.test.ts`][test] for a
working example of lens composition.

## Caveats

* This package only provides a lens. Functions such as `evolve` are unaffected.
* There is no analog for [`dissoc`]. As far as I'm aware there is no way to
  drop the value focused by a lens with any [ramda] functions.

## License

**MIT**

[Laarhoven Lenses]: https://www.twanvl.nl/blog/haskell/cps-functional-references
[`Map`]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
[`dissoc`]: http://ramdajs.com/docs/#dissoc
[`evolve`]: http://ramdajs.com/docs/#evolve
[ramda]: http://ramdajs.com/docs/#dissoc
[test]: ./src/lens-map.test.ts

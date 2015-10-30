# postcss-grid-unit
A [PostCSS](https://github.com/postcss/postcss) plugin to create custom grid units to ease grid enforcement. Inspired by Mark Goodyear's [postcss-vertical-rhythm](https://github.com/markgoodyear).

## Examples

Given options
```
{
  units: [
    {unit: 'u', size: 8},
    {unit: 'lu', size: 32},
  ],
}
```

and input
```css
.block {
  margin-bottom: 1u;
  padding-top: 2lu;
}
```

output will be
```css
.block {
  margin-bottom: 8px;
  padding-top: 64px;
}
```

## Usage
Install:
```
npm install postcss-grid-unit --save-dev
```

Then include the plugin:
```js
postcss([ require('postcss-grid-unit')(options) ])
```

See [PostCSS] docs for examples for your environment.

## Licence
Released under the MIT license.

## [Colour Palette](https://dogwishx.github.io/FAC/colour-palette/)

_Inspired by [Coolors](https://coolors.co/generate)_

_Colour names and scheme data taken from [The Color API](https://thecolorapi.com)_

<img src="https://user-images.githubusercontent.com/53922624/170884874-dd7b45ed-dab9-4565-854c-4e7d6f253eed.png" height="400" />

Required features:

- [x] Built with HTML, CSS & JS
- [x] Code hosted on GitHub
- [x] Deployed to GitHub Pages
- [x] Auto-generate multiple colours
- [x] Allow users to change each colour

Optional features:

- [x] Export colour palette in different formats (e.g. JSON, CSS variables)
- [x] Generate related colours rather than random (e.g. ascending lightness, complementary hues etc)
- [x] Save palettes to localStorage

Methods contained within the Colour constructor class:
| Method | Description |
| --- | --- |
| `create()` | Creates all DOM elements which a Colour requires |
| `generateRandomColor()` | Returns a random hex value |
| `calculateIsColourDark()`| Returns true if the colour is perceived as dark |
| `copyToClipboard()` | Copies `this.hex` value to the `navigator.clipboard` |

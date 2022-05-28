## [Colour Palette](https://dogwishx.github.io/FAC/colour-palette/)

_Inspired by [Coolors](https://coolors.co/generate)_

<img src="https://user-images.githubusercontent.com/53922624/170775984-a63dd1bc-fd92-4740-9e9c-4cb954a9e57d.png" height="400" />

Required features:

- [x] Built with HTML, CSS & JS
- [x] Code hosted on GitHub
- [x] Deployed to GitHub Pages
- [x] Auto-generate multiple colours
- [x] Allow users to change each colour

Optional features:

- [ ] Export colour palette in different formats (e.g. JSON, CSS variables)
- [ ] Generate related colours rather than random (e.g. ascending lightness, complementary hues etc)
- [ ] Save palettes to localStorage

Methods contained within the Colour constructor class:
| Method | Description |
| --- | --- |
| `create()` | Creates all DOM elements which a Colour requires |
| `generateRandomColor()` | Returns a random hex value |
| `calculateIsColourDark()`| Returns true if the colour is perceived as dark |
| `copyToClipboard()` | Copies `this.hex` value to the `navigator.clipboard` |

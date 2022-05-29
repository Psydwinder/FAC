import "./Random.js";
import "./Analogic.js";
import "./Save.js";
import "./Download.js";
import { renderPalettes } from "./PaletteCollection.js";
import { actionAllColours } from "./utils.js";
import { coloursArr } from "./Colours.js";

actionAllColours(coloursArr, "create");
renderPalettes();

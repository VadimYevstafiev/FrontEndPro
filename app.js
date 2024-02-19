import {replaceBadWords} from "./badWords.js";
import {theSong} from "./theSong.js";

document.querySelector('.forSong').innerHTML = replaceBadWords(theSong);
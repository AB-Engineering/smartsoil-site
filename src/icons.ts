// Google Material Symbols (outlined, weight 400) inlined as SVG: the files in ./icons are the whole dependency.
import { html, type TemplateResult } from "lit";
import { unsafeSVG } from "lit/directives/unsafe-svg.js";
import darkMode from "./icons/dark_mode.svg?raw";
import gridView from "./icons/grid_view.svg?raw";
import home from "./icons/home.svg?raw";
import humidity from "./icons/humidity_percentage.svg?raw";
import lightMode from "./icons/light_mode.svg?raw";
import linkOff from "./icons/link_off.svg?raw";
import pottedPlant from "./icons/potted_plant.svg?raw";
import settings from "./icons/settings.svg?raw";
import solar from "./icons/solar_power.svg?raw";
import thermostat from "./icons/thermostat.svg?raw";
import thumbUp from "./icons/thumb_up.svg?raw";
import waterDrop from "./icons/water_drop.svg?raw";
import yard from "./icons/yard.svg?raw";

const ICONS = {
  dark_mode: darkMode, grid_view: gridView, home, humidity_percentage: humidity, light_mode: lightMode, link_off: linkOff,
  potted_plant: pottedPlant, settings, solar_power: solar, thermostat, thumb_up: thumbUp, water_drop: waterDrop, yard,
};
export type IconName = keyof typeof ICONS;
export const icon = (name: IconName): TemplateResult => html`<span class="ic">${unsafeSVG(ICONS[name])}</span>`;

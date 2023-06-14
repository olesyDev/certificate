import { inter } from "../assets/fonts/Inter-normal";
import { montserrat } from "../assets/fonts/Montserrat-normal";
import { nunitoSans } from "../assets/fonts/NunitoSans-normal";
import { openSans } from "../assets/fonts/OpenSans-normal";
import { roboto } from "../assets/fonts/Roboto-normal";

export const fonts = {
  "Open Sans": {
    fontFamily: "Open Sans",
    fontToFile: "OpenSans.ttf",
    fontToPdf: openSans,
  },
  Montserrat: {
    fontFamily: "Montserrat",
    fontToFile: "Montserrat.ttf",
    fontToPdf: montserrat,
  },
  Roboto: {
    fontFamily: "Roboto",
    fontToFile: "Roboto.ttf",
    fontToPdf: roboto,
  },
  "Nunito Sans": {
    fontFamily: "Nunito Sans",
    fontToFile: "NunitoSans.ttf",
    fontToPdf: nunitoSans,
  },
  Inter: {
    fontFamily: "Inter",
    fontToFile: "Inter.ttf",
    fontToPdf: inter,
  },
};

import colorPickerOPtions from "./data/colorPcker.json";
// console.log(colorPickerOPtions)
import "./style.css";
import HandleBars from "handlebars";
// console.log(HandleBars)
import  template  from "./template/template_1.hbs?raw";
// console.log(template)

const templateFn = HandleBars.compile(template);
// console.log(templateFn({colorPickerOPtions}));

const murkup = templateFn(colorPickerOPtions);
document.querySelector(".js-palette").innerhtml = murkup;

module.exports = function (sourceCode) {
   console.log(222,'loader')
   var code = `var style = document.createElement("style");
   style.innerHTML = \`${sourceCode}\`;
   document.head.appendChild(style);`;
   return code;
}

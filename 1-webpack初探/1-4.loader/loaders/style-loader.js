/**
 * 自定义的style插件
 * @param {*} sourceCode 
 * sourceCode 是匹配到的服务.css文件的
 */

module.exports = function (sourceCode){
    console.log(33,sourceCode)
    var code = `var style = document.createElement("style");
    style.innerHTML = \`${sourceCode}\`;
    document.head.appendChild(style);
    module.exports = \`${sourceCode}\``;
    return code;
}
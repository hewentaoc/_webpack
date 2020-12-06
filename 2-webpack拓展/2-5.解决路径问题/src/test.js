let imgUrl = require('./assets/web.png');

console.log(22323,imgUrl.default)

let img = document.createElement('img');
img.src = imgUrl.default;
document.body.appendChild(img);
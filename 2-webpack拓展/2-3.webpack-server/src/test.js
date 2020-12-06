// const url = `/api/student/findAll?appkey=demo13_1545210570249`;
// fetch(url).then(resp => resp.json()).then(resp => {
//     console.log(resp)
// })

let imgUrl = require('./assets/web.png');

console.log(22323,imgUrl.default)

let img = document.createElement('img');
img.src = imgUrl.default;
document.body.appendChild(img);
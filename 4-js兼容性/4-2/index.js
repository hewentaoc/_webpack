function A() {
    return new Promise(function (resolve) {
        // setTimeout(function () {
        resolve(3);
        // }, 1000);
    });
}





function handleAsync(ot, _next, value,res) {
    let info = ot.next(value);
    let nowValue = info.value;
    if(info.done){
        res(nowValue)
    }else{
        Promise.resolve(nowValue).then((res)=>{
            _next(res);
        })
    }
}

function myProducer() {
    function* test() {
        const b = yield A();
        const c = yield A();
        return b + c;
    }
    return new Promise((res, rej) => {
        let ot = test();
        let next = function(val) {
            handleAsync(ot, next,val,res)
        }
        next(undefined)
    })
}
myProducer().then((last)=>{
    console.log('last',last)
})

// let valB = ot.next();
// let valC = ot.next();
// let valD = ot.next();
// console.log(valB)

// async function B() {
//     const b = await A();
//     const c = await A();
//     return b + c;
// }
// B().then((res)=>{
//     console.log(res)
// }) 
    Promise.resolve('Promise').then((res)=>{
console.log(res)
})
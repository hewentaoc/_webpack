const a = 1;

let x = ()=> 'a';

class Test{
    constructor(){
        this.name = 'name';
    }
    getAge(){
        this.age = 18;
    }
    // age = 'male'
    getContent =()=>{
        console.log('a');
    }
}

const obj = {
    foo: {
      bar: {
        baz: 42,
      },
    },
  };
  
  const baz = obj?.foo?.bar?.baz; // 42
  
  const safe = obj?.qux?.baz; // undefined

let number = 2 ** 3;
let arr = Array.of(3,2,1)

console.log(arr)

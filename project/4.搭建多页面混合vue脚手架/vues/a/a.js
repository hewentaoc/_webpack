

import './a.css'
import '@/assets/js/common.js'
import '@/assets/css/common.css'
class Demo{
    apply(test){
        console.log(111,test);
    }
}
let demo = new Demo().apply();
console.log(demo)


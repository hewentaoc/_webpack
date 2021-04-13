

import './a.css'
import '@/assets/css/common.css'
import {test} from '@/assets/js/common.js';
// let test = require('@/assets/js/common.js').test;
test();
class Demo{
    apply(test){
        console.log(111,test);
    }
}
let demo = new Demo().apply();
console.log(demo)

import vue from 'vue'
import Test from './Test.vue'
import Tests from './Test2.vue'
new vue({
    el:'#root',
    render(h){
        return <div>123
            <Test/>
            <Tests/>
        </div>
    }
})
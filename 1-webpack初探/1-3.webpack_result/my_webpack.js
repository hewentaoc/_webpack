

//编译结果分析
//合并模块
//将每个模块的路径，当做唯一的标示，进行合并
(function(modules){
    let cacheModules = {};
    function _require(moduleId){
        if(cacheModules[moduleId]){//缓存模块
            return cacheModules[moduleId]
        }
        let func = modules[moduleId];
        let module = {
            exports:{

            }
        }
        func(module,module.exports,_require);
        let result = module.exports;
        cacheModules[moduleId] = result
        return result;
    }
    _require('./index');//引用入口文件
    _require('./index2');//引用入口文件
})({
    './index':function(module,exports,_require){
        console.log('index')
        let a = _require('./a')
        console.log(a)
    },
    './index2':function(module,exports,_require){
        console.log('index2')
        let a = _require('./a')
        console.log(a)
    },
    './a':function(module,exports,_require){
        console.log('我在a')
        module.exports = '111';
    }
})
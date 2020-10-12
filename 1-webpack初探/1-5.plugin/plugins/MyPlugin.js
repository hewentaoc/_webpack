
module.exports = class MyPlugin{
    // compiler.hooks.事件名称.事件类型(name, function(compilation){
    //     //事件处理函数
    // })
    apply(compiler){
        compiler.hooks.done.tap("Myplugin-done",function(compilation){
            console.log("编译完成了")
        })
    }
}
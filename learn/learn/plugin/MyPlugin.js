module.exports = class MyPlugin {
    apply(compiler){
        compiler.hooks.emit.tap("FileListPlugin", complation => {
          complation.assets['index.vue'] = {
            source(){
                return 'new Vue()'
            },
            size(){
                return 0;
            }
          }
        })
   }
}
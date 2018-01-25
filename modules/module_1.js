/*
(function(){
    console.log("module_1 is ready");
}());
*/
//改为符合AMD规范的模块定义
define(function() {
    return {
        ready:function(){
            console.log("module_1 is ready")
        }
    }
});
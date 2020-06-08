/* 
    node.js 模块的导出 
    name 是在plugin中写的名字
    使用 name（）
*/
module.exports= function aa(){
    console.log('wo shi plugin fn');
}

/* 
    es6 形式的导出 
    name 是在plugin中写的名字
    使用 name.aa（）
*/
// export  function aa(){
//     console.log('wo shi plugin fn');
// }
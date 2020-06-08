import _ from 'lodash';
import './style.css';
// const $ = require("jquery");
// import $ from 'jquery';

/*  用原来的方式*/
// import {resolve} from "./resolve"

 /* 用别名的方式 */
import {resolve} from "resolve/resolve.js"

function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello2', 'webpack'], ' ');
    
    //resolve
    resolve()
    /* 
    plugins
    可以全局使用
        注意导出的时候最好用module.exports= 
        如果用export defalut 导出 在用的时候 应该是aa1.aa()
    */
    aa1()

        
    $("body").css('background','red')
    return element;
  }


  document.body.appendChild(component());
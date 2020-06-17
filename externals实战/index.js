var $ = require("jquery");
// import $ from "jquery"
// var who= require( "who" );
import who from "who"



$(function ($) {

    $('body').get(0).style.background = 'red'
    console.log(who.name);
    who.love()
})





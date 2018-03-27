# 常用js函数

## 返回顶部

### $(window).scroll(function() {
###    var a = $(window).scrollTop();
###    if(a > 100) {
###        $('.go-top').fadeIn();
###    }else {
###        $('.go-top').fadeOut();
###    }
###    });
### $(".go-top").click(function(){
###   $("html,body").animate({scrollTop:"0px"},'600');
###    });
## 阻止冒泡

### function stopBubble(e){
###    e = e || window.event;
###    if(e.stopPropagation){
###        e.stopPropagation();  //W3C阻止冒泡方法
###    }else {
###        e.cancelBubble = true; //IE阻止冒泡方法
###    }
###    }
### 全部替换replaceAll

### var replaceAll = function(bigStr, str1, str2) {  //把bigStr中的所有str1替换为str2
###    var reg = new RegExp(str1, 'gm');
###    return bigStr.replace(reg, str2);
###    }
### 获取浏览器url中的参数值

### var getURLParam = function(name) {
###    return decodeURIComponent((new RegExp('[?|&]' + name + '=' +'([^&;]+?)(&|#|;|$)', ### "ig").exec(location.search) || [, ""])[1].replace(/\+/g,'%20')) || null;
###    };
## 深度拷贝对象

### function cloneObj(obj) {
###    var o = obj.constructor == Object ? new obj.constructor() : newobj.constructor(obj.valueOf());
###    for(var key in obj){
###        if(o[key] != obj[key] ){
###            if(typeof(obj[key]) =='object' ){
###                o[key] =mods.cloneObj(obj[key]);
###            }else{
###                o[key] =obj[key];
###            }
###        }
###    }
###    return o;
###    }
## 数组去重

### var unique = function(arr) {
### var result = [], json = {};
###    for (var i = 0, len = arr.length; i < len; i++){
###        if (!json[arr[i]]) {
###            json[arr[i]] = 1;
###           result.push(arr[i]);  //返回没被删除的元素
###        }
###    }
###    return result;
###    };
## 判断数组元素是否重复

### var isRepeat = function(arr) {  //arr是否有重复元素
###    var hash = {};
###    for (var i in arr) {
###        if (hash[arr[i]]) return true;
###        hash[arr[i]] = true;
###    }
###    return false;
###    };
## 生成随机数

### function randombetween(min, max){
###    return min + (Math.random() * (max-min +1));
###    }
## 操作cookie

### own.setCookie = function(cname, cvalue, exdays){
###    var d = new Date();
###    d.setTime(d.getTime() + (exdays*24*60*60*1000));
###    var expires = 'expires='+d.toUTCString();
###    document.cookie = cname + '=' + cvalue + '; ' + expires;
###    };
### own.getCookie = function(cname) {
### var name = cname + '=';
### var ca = document.cookie.split(';');
### for(var i=0; i< ca.length; i++) {
###    var c = ca[i];
###     while (c.charAt(0) == ' ') c =c.substring(1);
###     if (c.indexOf(name) != -1) returnc.substring(name.length, c.length);
### }
### return '';
### };

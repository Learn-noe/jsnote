 Ajax请求
jquery ajax函数

封装了一个ajax的函数，代码如下：

var Ajax = function(url, type success, error) {
    $.ajax({
        url: url,
        type: type,
        dataType: 'json',
        timeout: 10000,
        success: function(d) {
            var data = d.data;
            success &&success(data);
        },
        error: function(e) {
            error && error(e);
        }
    });
    };
// 使用方法：
Ajax('/data.json', 'get', function(data) {
    console.log(data);
    });
jsonp方式

有时候我们为了跨域，要使用jsonp的方法，我也封装了一个函数：

function jsonp(config) {
    var options = config || {};   // 需要配置url,success, time, fail四个属性
    var callbackName = ('jsonp_' +Math.random()).replace(".", "");
    var oHead = document.getElementsByTagName('head')[0];
    var oScript = document.createElement('script');
    oHead.appendChild(oScript);
    window[callbackName] = function(json) {  //创建jsonp回调函数
        oHead.removeChild(oScript);
        clearTimeout(oScript.timer);
        window[callbackName] = null;
        options.success &&options.success(json);   //先删除script标签，实际上执行的是success函数
    };
    oScript.src = options.url + '?' + callbackName;    //发送请求
    if (options.time) {  //设置超时处理
        oScript.timer = setTimeout(function () {
            window[callbackName] =null;
            oHead.removeChild(oScript);
            options.fail &&options.fail({ message: "超时" });
        }, options.time);
    }
    };
// 使用方法：
jsonp({
    url: '/b.com/b.json',
    success: function(d){
        //数据处理
    },
    time: 5000,
    fail: function(){
        //错误处理
    }
    });
常用正则验证表达式

手机号验证

var validate = function(num) {
    var exp = /^1[3-9]\d{9}$/;
    return exp.test(num);
    };
身份证号验证

var exp = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
ip验证

var exp =/^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
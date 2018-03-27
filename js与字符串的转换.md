## js转换成字符串
### 1.eval()
function strToJson(str){
    var json=eval(''+str+'');
    return json;
}
### 2.new function
function strTojson(str){
    var json=new function(return +str);
    return json
}
### 3.全局对象
function strTojson(str){
    return JsonParse(str);
    
}

## Jquery
### $parseJson()

## 浏览器方式
### json.parse()
### json.stringity()


## josn转字符串
### json.strigify(obj)
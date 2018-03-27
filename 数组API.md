# 数组常用的方法
## arr.toString() ，将数组转换以逗号分隔得字符串 
## arr.join()  也是将数组转为字符串，只是join方法接受一个作为分隔符的参数，如果没有参数，则是以逗号分隔
## app.push() push可以接受任意数量的参数，见过参数放在原数组的尾部，该方法返回的是最终数组的长度
## arr.unshift() 用法和push相同，只是unshift方法是将参数放入原数组前面
## arr.pop() 删除数组最后一项，返回被删除的元素
## arr.shift() 删除数组第一项，返回被删除的元素
## arr.reverse() 反转数组的顺序
## arr.sort() 将数组进行排序，但是注意这个方法是按Ascii码排序，
## arr.slice() 基于当前数组，创建一个或多个项，他可以接受一个或两个参数，当参数有一个，他就返回的是从参数位置到数组最后的新数组，当参数是两个它返回的是从开始到结束的位置但不包括结束位置
### 实例：ar nameArr = ["Tom","Jerry","Alice","Nancy","Candy"];
        var newName = nameArr.slice(1);
        console.log(newName);	　　//["Jerry", "Alice", "Nancy", "Candy"];
        var newName2 = nameArr.slice(1,4);
        console.log(newName2); //["Jerry", "Alice", "Nancy"]
## arr.splice() 这个可以实现数组的增删改功能
### （1）删除：只需要提供两个参数，要删除的第一项的位置和要删除的个数,并返回删除的元素数组：
    var num = [1,2,3,4,5];
    var newNum = num.splice(1,2);
        console.log(num);	//[1,4,5]
        console.log(newNum); //[2,3]
### （2）插入：提供多个参数，第一个参数是要插入的位置，第二个是0表示删除0个，后面是要插入的元素，可以是多个，因为删除0个，所以返回空数组；
    var num = [1,2,3,4,5];
    var newNum = num.splice(1,0,"Tom","Jerry");
        console.log(num);	//[1, "Tom", "Jerry", 2, 3, 4, 5]
        console.log(newNum); //[]
### （3）替换：提供多个参数，第一个参数是要插入的位置，第二个是删除的个数，后面是要插入的元素，可以是多个，返回删除的数组；
    var num = [1,2,3,4,5];
    var newNum = num.splice(1,2,"Tom","Jerry");
        console.log(num);	//[1, "Tom", "Jerry", 4, 5]
         console.log(newNum); //[2,3]
## arr.indexOf()和arr.lastIndexOf:查询元素的位置,参数为1个或2个，第一个是要查找的元素，第二是要开始查找的位置（可选的），他返回的是查找到的第一个元素的下标，indexOf()是从头开始查询，lastIndexOf()是从末尾开始查询；
## arr.every()和arr.some()： 两个方法都是给数组的每一项运行给定函数，不同的是every()方法是如果该函数对每一项都返回true,那就返回true，some()方法是只要有一项返回yrue，那就返回true：
### var num = [1,2,3,4,5];
    var result = num.every(function(item){
        if(item>2) return true;
            });
            alert(result);　　==>false 若是把every()换位some(),则弹出true；
## arr.filter(): 给数组的每一项都运行给定函数，返回结果为true的元素组成的数组：
### var num = [1,2,3,4,5];
    var result = num.filter(function(item){
        if(item>2) return true;
            });
            alert(result);	//[3,4,5]
# 总结
## 1.arr.toString()和arr.join() 是把数组转化为字符串的
## 2.arr.push()和arr.unshift()是返回最终数组的长度 push是将参数放在数组尾部 unshift是将参数放在数组头部
## 3.arr.pop和arr.shift是返回被删除元素 pop是删除数组最后一项 shift是删除数组第一项
## 4.arr.reverse和arr.sort是数组排序 sort()是排序 reverse是反序
## 5.arr.slice() 截取数组
## 6.arr.splice()可对数进行增删改查
## 7.arr.indexOf和arr.lastOf()是从数组的位置查找 indexof是第一个 lastof是最后一个
## 8.arr.every()和arr.some()： 两个方法都是给数组的每一项运行给定函数，不同的是every()方法是如果该函数对每一项都返回true,那就返回true，相当于&& 。some()方法是只要有一项返回yrue，那就返回true：相当于||运算符
## 9.arr.filter(): 给数组的每一项都运行给定函数，返回结果为true的元素组成的数组：
 # 数组使用实例：
## 1：<!DOCTYPE html>
<html>
<head>
	<title></title>
	<script src="./commen/jquery-2.1.4.min.js"></script>
<style>
body{
		margin:0 auto;
				border:0px solid white;
				position:relative;
			height: 500px;		
			}
.clearfix::before,
.clearfix::after {
	content: '';
	display: table;
}
.clearfix::after{
	clear: both;
}
body p {
	float: left;
	font-size: 16px;
	line-height: 16px;
}
body div {
	float: left;
}
.mar {
	margin-left: 50px;
}
</style>
</head>
<body>
		
<script type='text/javascript'>
var arr = [
			'有生之年',
			'我要去一次陕西',
			'去那个叫太白的地方',
			'看看能不能碰到重生的她',
			'有生之年',
			'我要去意思京都',
			'去哪个叫北平的地方',
			'看看能不能碰到戏装的她',
			'有生之年',
			'我要去一次广西',
			'去那个叫做巴乃的地方',
			'看看能不能碰到明媚的她',
			'有生之年',
			'我要去一次浙江',
			'去那个叫做杭州的地方',
			'看看能不能碰到天真的她',
			'有生之年',
			'我要去一次西藏',
			'去那个叫做墨脱的地方',
			'看看能不能碰到幼年的她',
			'有生之年',
			'我要去一次新疆',
			'去那个叫做兰错的地方',
			'看看能不能碰到美丽的她',
			'有生之年',
			'我要去一次湖南',
			'去那个叫做长沙的地方',
			'看看能不能碰到称霸的她',
			'有生之年',
			'我要去一次吉林',
			'去那个叫做巴丹的地方',
			'看看能不能碰到算计的她',
			'有生之年',
			'我要去一次雪山',
			'去那个叫做长白的地方',
			'看看能不能碰到的她',													
		]
		var htl = '',
		    con = '',
		    rel = [],
		    newArr = [];
		for(var i in arr) {
			htl = arr[i].split('').join('<br/>');
			newArr.push(htl);
			if(newArr.length === 4) {
				for (var j = 0; j < newArr.length; j++) {
					newArr[j] = '<p>'+ newArr[j] +'</p>'
				}
				rel.push(newArr.join(''));
				newArr = [];
			}
			// con += '<div>'+ htl +'</div>';
		// if(arr[i%4=0]){	
		// 	}			
		}
			rel = rel.map(function(e) {
				return '<div class="mar clearfix">' + e + '</div>'
			})
					console.log(rel);
				con = rel.join('');
    
		// console.log(newArr);
		// console.log(htl);
		// document.write(htl);
		// console.log(con);
		document.write(con);

</script>
</body>
</html>
## 实例2：二元数组操作 提取数组数据  数组去重也可以实现
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<script type="text/javascript">
			var json= [
			[{'name':'xiaoming','data':'2017-02-03'}],
			[{'name':'xiaohua','data':'2017-02-04'}],
			[{'name':'xiaodi','data':'2017-02-04'}],
			[{'name':'jjjj','data':'2017-02-05'}],
			]
			// var arr = [];var arr2 = [];
			// for (var i = 0;i<json.length;i++){
			// 	// if(arr.indexOf(json[i][0].data)<0){
			// 		arr.push(json[i][0].data)
			// 	// }
			// }	
			// console.log(arr)
			// 			for(var i =0;i<arr.length;i++){ 
			// 	arr2[i]=[]
			// 	arr2[i].index = arr[i]
			// 	for (var j = 0;j<json.length;j++){
			// 		if(arr[i]==json[j][0].data){
			// 			arr2[i].push(json[j][0].name)
			// 		}
			// 	}
			// }
			// console.log(arr2)
			// 			var obj = {}
			// 	for (var i = 0;i<arr2.length;i++){
			// 	var key=arr2[i].index;
            //            obj[key]=[]
			// 	for (var j = 0;j<arr2[i].length;j++){
			// 		var val = {}
			// 		val.name = arr2[i][j]
			// 		obj[key].push(val)		
			// 	}	
			// }
			// console.log(obj)
			// var str = JSON.stringify(obj)
			// document.write(str)
			// 
			function change(arr){
				if(Array.isArray(arr)&&arr.length){
					var newObj={},obj,_obj,data,len=arr.length;
					for(var i=0;i<len;i++){
						obj=arr[i][0];
						data=obj.data;
						_obj={"name":obj.name}
						if(data in newObj){
							newObj[data].push(_obj);
						}else{
							newObj[data]=[_obj];
						}
					}
					 console.log(JSON.stringify(newObj));
					return newObj;
				}else{
					return false;
				}
			}
			change(json);
	</script>
</body>
</html>

# 知识技巧总结

## 数据类型

### underfined、null、0、false、NaN、空字符串。他们的逻辑非结果均为true。

## 闭包格式

### 好处：避免命名冲突（全局变量污染）。

(function(a, b) {
    console.log(a+b);  //30
    })(10, 20);
## 截取和清空数组

### var arr = [12, 222, 44, 88];
### arr.length = 2;   //截取，arr = [12,222];
### arr.length = 0;   //清空，arr will be equal to [].
## 获取数组的最大最小值

### var numbers = [5, 45822, 120, -215];
### var maxInNumbers = Math.max.apply(Math, numbers);   //45822
### var minInNumbers = Math.min.apply(Math, numbers);   //-215
## 浮点数计算问题

### 0.1 + 0.2 == 0.3   //false
## 为什么呢？因为0.1+0.2等于0.30000000000000004。JavaScript的数字都遵循IEEE754标准构建，在内部都是64位浮点小数表示。可以通过使用toFixed()来解决这个问题。

## 数组排序sort函数

var arr = [1, 5, 6, 3];    //数字数组
arr.sort(function(a, b) {
    return a - b;   //从小到大排
    return b - a;   //从大到小排
    return Math.random() - 0.5;   //数组洗牌
    });
var arr = [{   //对象数组
    num: 1,
    text: 'num1'
    }, {
    num: 5,
    text: 'num2'
    }, {
    num: 6,
    text: 'num3'
    }, {
    num: 3,
    text: 'num4'
    }];
arr.sort(function(a, b) {
    return a.num - b.num;   //从小到大排
    return b.num - a.num;   //从大到小排
    });
## 对象和字符串的转换

var obj = {a: 'aaa', b: 'bbb'};
var objStr = JSON.stringify(obj);    //"{"a":"aaa","b":"bbb"}"
var newObj = JSON.parse(objStr);     // {a:"aaa", b: "bbb"}
# git笔记

## git使用之前的配置

### 1.git config --global user.email xxx@163.com
### 2.git config --global user.name xxx
### 3.ssh-keygen -t rsa -C xxx@163.com(邮箱地址)     // 生成ssh
### 4.找到.ssh文件夹打开，使用cat id_rsa.pub   //打开公钥ssh串
### 5.登陆github，settings －SSH keys  － add ssh keys （把上面的内容全部添加进去即可）
### 说明：然后这个邮箱（xxxxx@gmail.com）对应的账号在github上就有权限对仓库进行操作了。可以尽情的进行下面的git命令了。
## git常用命令

### 1、git configuser.name  /  user.email     //查看当前git的用户名称、邮箱
### 2、git clonehttps://github.com/jarson7426/javascript.git  project  //clone仓库到本地。
### 3、修改本地代码，提交到分支:  git addfile   /   git commit -m “新增文件”
### 4、把本地库推送到远程库:  git pushorigin master
### 5、查看提交日志：git log -5
### 6、返回某一个版本：git reset --hard 123
### 7、分支：git branch / git checkout name  / gitcheckout -b dev
### 8、合并name分支到当前分支：git merge name  /   git pull origin
### 9、删除本地分支：git branch -D name
### 10、删除远程分支： git push origin  :daily/x.x.x
### 11、git checkout -b mydev origin/daily/1.0.0   //把远程daily分支映射到本地mydev分支进行开发
### 12、合并远程分支到当前分支 git pull origindaily/1.1.1
### 13、发布到线上：
    git tag publish/0.1.5
    git push origin publish/0.1.5:publish/0.1.5
### 14、线上代码覆盖到本地：
    git checkout --theirs build/scripts/ddos
    git checkout --theirs src/app/ddos
# 字符串常用方法
## 什么事字符串？
### 'abc' 或者 "abc" 这类被单引号或者双引号引起来的就是一个字符串，他就是一个一个字符串拼凑在一起的组成的
## 字符串length属性
### 字符串类似于数组，都是一个个拼凑在一起的，一次可以用length属性取得字符串的长度 他是从0开始的
### 例：var str='abcdefg' str.length; //7 
## 字符串常用方法
### 1.str.charAt() =>返回字符串的地n个字符，如果不在0~str.length-1之间，则返回一个空字符串 从0开始
### 2.indexof(substr[,start]) =>返回substr在字符串中首次出现的位置，从start位置开始查找，如果不存在，则返回-1
#### 详解：var str='react-redux'; 
####        str.indexOf('d');//8  查找一个个出现d(substr)的位置 从0开始 返回8 start默认为0
####        str.indexOf('d',9) //-1 从第9个开始查找 但是d的位置是8  所以返回-1 如果str='react-reduxd' 则返回 11
####        str.indexOf('',12) //11  如果被查找的字符串是一个空字符串，此时返回 str.length.
####        str.indexOf('',9) //9  如果被查找的字符串是一个空字符串，此时返回str.length.
### 3.lastIndexOf(substr[,start]) = > 返回 substr 在字符串 str 中最后出现的位置,从 start 位置 向前开始查找，如果不存在，则返回 -1。,值为正
### 4.str.substring(start[, end])= > 返回从 start 到 end（不包括）之间的字符，start、end均为 非负整数。若结束参数(end)省略，则表示从start位置一直截取到最后。
#### var str = 'abcdefg';
        str.substring(1, 4); //"bcd"
        str.substring(1); // "bcdefg"
        str.substring(-1); //"abcdefg" 传入负值时会视为0
### 5.str.slice(start[,end])= > 返回从 start 到 end （不包括）之间的字符，可传负值
#### var str = 'this is awesome';
        str.slice(4, -1); 如果wen为负数 则结束为止从后往前数 从1开始 空格也占一个字符
### str.slice(start[,end])= > 返回 str 中从指定位置开始到指定长度的子字符串，start可为负值
#### var str = "Just give me a reason";
        str.substr(5, 10); // "give me a " 从0开始 以第5个字符开始截取10个字符
        str.substr(-4, 2); // "as"  ？待研究
### str.replace(regexp|substr, newSubStr|function)= > 替换 str 的子字符串
#### var str = "do you love me";
        str.replace('love','hate'); // "do you hate me"
### str.search(regexp)= > 查找 str 与一个正则表达式是否匹配。如果匹配成功，则返回正则表达式在字符串中首次匹配项的索引；否则，返回 -1。如果参数传入的是一个非正则表达式对象，则会使用 new RegExp(obj) 隐式地将其转换为正则表达式对象
#### var str = 'I love JavaScript!';
            str.search(/java/); // -1
            str.search(/Java/); // 7
            str.search(/java/i); // 7 ？待研究
            str.search('Java'); // 7
### str.match(regexp)= > 返回一个包含匹配结果的数组，如果没有匹配项，则返回 null。如果参数传入的是一个非正则表达式对象，则会使用 new RegExp(obj) 隐式地将其转换为正则表达式对象
#### var str = 'Javascript java';
            str.match(/Java/); // ["Java"]
            str.match(/Java/gi); // ["java", "Java"]
            str.match(/ab/g); // null
### str.split([separator][, limit])= >返回一个数组，分隔符 separator 可以是一个字符串或正则表达式
            var str = "Hello?World!";
            str.split(); // ["Hello?World!"]
            str.split(''); // ["H", "e", "l", "l", "o", "?", "W", "o", "r", "l", "d", "!"]
            str.split('?'); // ["Hello", "World!"]
            str.split('',5); // ["H", "e", "l", "l", "o"]
### str.trim() = > 去除 str 开头和结尾处的空白字符，返回 str 的一个副本，不影响字符串本身的值
            var str = ' abc ';
            str.trim(); // 'abc'
            console.log(str); // ' abc '
### str.toLowerCase()= > 将 str 转换为小写，并返回 str 的一个副本，不影响字符串本身的值
### str.toUpperCase()= > 将 str 转换为大写，并返回 str 的一个副本，不影响字符串本身的值


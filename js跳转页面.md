# css  a标签进行跳转

## js跳转

### 1. window.location.href=b.html;  控制跳转到b.html
### 2. window.history.back(-1);      返回上一页
### 3. window.navigate('b.html');    跳转到b.html
### 4. self.location=b.html          跳转到b.html
### 5. top.location=b.html           跳转到b.html

## Jquery设置跳转页面
### 1. $(location).attr('href','http://www.');
### 2. $(window).attr('location','http://www.');
### 3. $(location).prop('href','http://www.');

## 返回上一级跳转
### 1. window.history.go(-1);
### 2. window.history.back();
### 3. window.location.go(-1); 
## 什么是Dom
### Dom全称是Document Object Module 也就是文档对象模型，Dom就是针对Html和xml提供的一个Api.他提供了对文档的结构化的表述，并定义了一种方式使从程序中对该结构进行访问，从而改变文档的结构，样式和内容
### 我们可以把一个Html看作一个对象树，他本身和里面的所有东西比如<div></div>这些标签都看作一个对象，每个对象都叫做一个节点（node）,节点可以理解为dom中所有Object的父类 
## Dom有什么作用
### 简单的说，通过dom操作Html元素，你可以改变网页。比如我们现在要改网页的标题，可以直接键入代码：document.title='How to learn javascript'
### 这个ApI使得在网页被下载到浏览器之后改变网页内容成为可能。
#### 你可以使用javaScript语言操作dom改变网页。
#### 为了改变网页，你必须告诉javascript改变哪一个节点。这就是操作dom
#### 改变网页，实际上就是操作dom节点进行增删改查
# DOM增删改查
## 1.添加元素
### document.createElement() 创建元素
#### 语法：let element=document.createElement(tagName[,options])
### Document.createTextNode() 创建一个文本节点
#### 语法：var text=document.createTextNode(data)
### Documeng.createAttribute() 创建并返回一个新的属性节点
#### 语法：attribute=document.createArrribute(name)
### Document.createComment() 创建并返回一个注释节点
#### 语法：var commentNode=document.createComment(data)
### Document.crateDocumentFragment() 创建一个新的空的文档片段
#### 语法： var docFragment=document.createDocumentFragment()
### Node.appendChild() 将一个节点添加到指定父节点的子节点列表末尾
#### 语法：var child=node.appendChild(child)
### Element.classList.add() 添加指定的类值class
#### 语法：elementNodeReference.classList.add(string[,String])
### Document.write()
### Document.writein() 将文本字符串写入打开的文档流
#### 语法：document.write(markup)
#### 语法：document。writeIn(line) 这个可以换行

# 删除元素
## Element.removeAttribute() 从元素中删除制定的属性
### 语法:element.removeAttribute(attrName)
## Element.removeChild() 删除子元素
### 语法：var oldChild=node.removeChild(child); or element.removeChild(child)
## ChildNode.remove()删除元素
### 语法：elementNodeReference.remove()
## Child.parentNode.removeChild(child) 不确定父元素时可以这样删除子元素
### 语法： if (node.parentNode) {
  //判断node是否在DOM树中
    node.parentNode.removeChild(node);
  }
## Element.classList.remove() 移除元素中一个或多个类名
### 语法：elementNodeReference.classList.remove(String[,String])

# 修改元素
## Node.innerText() 修改元素文本内容
### 语法：node.innerText=new content
## node.innerHTML 设置或获取描述元素后代的html语句
### 语法：const content=element.innerHTML;// 返回时，内容包含描述所有元素后代的序列化HTML代码。
### element.innerHTML=markup;// 除所有元素的子节点，解析内容字符串，并将生成的节点分配给元素的子元素。
## node.cloneNode() 拷贝元素（包括所有属性和值）
### 语法及实例：var dupNode = node.cloneNode(deep)
  <!--example-->
  <body>
  <ul id="myList1">
      <li>iPhone</li>
      <li>iPad</li>
  </ul>
  <ul id="myList2">
      <li>Macbook</li>
      <li>appleMusic</li >
  </ul>
  <button onclick="myFunction()">复制</button>
  <script>
  function myFunction(){
      var itm=document.getElementById("myList2").lastChild;
      var cln=itm.cloneNode(true);
      document.getElementById("myList1").appendChild(cln);
  }
  </script>
  </body>
  <!--点击复制按钮，myList2中最后元素会复制到myList1中-->
  ## Element.setAttribute()  设置或者改变指定属性并指定值
  ### 语法：  element.setAttribute(name, value)
  ## style.property = new style // 修改元素CSS属性值
  ### 语法：  var title= document.querySelector("h1")
  title.style.backgroundColor = "red" // h1背景色改为红色
  ## Node.replaceChild() // 替换子节点
  ### 语法： replacedNode = parentNode.replaceChild(newChild, oldChild)
  <!--example-->
  <body>
  <ul id="myList">
    <li>iPhone</li>
    <li>iPod</li>
    <li>Macbook</li>
  </ul>
  <button onclick="myFunction()">替换</button>
  <script>
  function myFunction(){
      var textnode=document.createTextNode("Surface pro");
      var item=document.getElementById("myList").childNodes[0];
      item.replaceChild(textnode,item.childNodes[0]);
  }
  </script>
  <!--点击替换按钮，myList中第一个元素会被替换成Surface pro-->

# 查找元素
## attribute.getAttribute() // 返回元素的指定属性值
### 语法：let attribute = element.getAttribute(attributeName)
## Document.getElementsByClassName() // 返回一个节点列表（数组），包含了所有拥有指定 class 的子元素
### 语法： var elements = document.getElementsByClassName(names); // or:
  var elements = rootElement.getElementsByClassName(names);
## Document.getElementsByName() // 返回带有指定名称的对象集合
### 语法：elements = document.getElementsByName(name)
## Document.getElementsByTagName() // 返回带有指定标签名的对象集合
### 语法： var elements = document.getElementsByTagName(name)；
## Document.getElementById() // 返回对拥有指定 id 的第一个对象的引用
### 语法：  element = document.getElementById(id)
## Document.querySelector() // 返回文档中匹配指定的CSS选择器的第一元素
### 语法：  element = document.querySelector(selectors) // 语法
  //example
  document.querySelector("#demo") // 获取文档中ID为demo的元素
  
  
## Document.querySelectorAll() // 返回与指定的选择器组匹配的文档中的元素列表
### 语法： elementList = document.querySelectorAll(selectors)
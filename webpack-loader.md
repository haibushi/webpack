# Webpack 自定义loader

### 1 安装webpack4

```
npm install webpack@4 webpack-cli -S
```

### 2 创建相关文件

 目录结构表

```
 └─ 03-webpack-loader ······················· sample root dir
    ├── src ································· source dir
    │   ├── readme.md ························ markdown module
    │   └── index.js ························· entry module
    ├── package.json ························ package file
+   ├── readMe-loader.js ·················· markdown loader
    └── webpack.config.js ··················· webpack config file
    
    
//index.js
import readme from './readme.md';
let myDiv = document.createElement('div');
myDiv.innerHTML = readme;
document.body.appendChild(myDiv);


//readme.md
<!-- ./src/about.md -->
# About

this is a markdown file.
```

### 3 在根目录下编写webpack.config.js

```
const path = require('path');
module.exports = {
	entry:'app.js',
	output:{
		filename:'[name].js',
		path:path.resolve(__dirname,'./dist'),
	},
	module:{
		rules:[
			test:/\.md$/,  // 解析md文件  使用readMe.js来解析
			use:'./readMe-loader.js'
		]
	}
}
```

### 4 在根目录下创建 readMe-loader.js

   a:webpack的loader默认都是导出一个函数  

   b: 函数的参数就是匹配的文件内容  

   c: 函数返回的是一个js代码片段

PS 自定义loader可以有两种方式

   [1 直接在这个loader的末尾返回一个js代码字符串]()

   [2 再找一个合适的loader  在后面接着处理我们这里得到的结果。]()

```
 const marked = require(marked);
module.exports= (source)=>{
	console.log(source);    // 输出的就是md文件的内容
	let html = marked(source); //输出 source => '<h1>About</h1><p>this is a markdown file.</p>'
	// 导出js代码片段有两种方式
	let code = 'module.exports = '+ html;	
	// 或者
	let code = 'export default '+ html;
	return code
}
```

第二种方式

```
// 直接返回一个字符串  然后交给宁外的一个loader去解析
const marked = require(marked);
module.exports= (source)=>{
	const html = marked(source)
  return html
}

这样的话  就要在webpack.config.js的修改代码
module: {
	rules: [
		{
			test: /\.md$/,
			use: [
				'html-loader',
				'./readMe-loader.js'
			]
		}
	]
}

Webpack加载loader的执行顺序是从后往前的 也就是说吧应该先执行的loader 放在最后面   
```




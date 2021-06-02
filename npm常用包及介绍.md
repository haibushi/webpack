# npm包的管理和使用

### npm-run-all的使用

```
下载包
npm install npm-run-all -D
```

##### npm-run-dev 的使用方法

```
//package.json
"scripts":{
	"dev":"echo dev",
	"prd":"echo prd",
	"start":"npm-run-all dev prd"  //这里可以是串行的 也可以是并行的
}
```

scripty的使用

```
//下载包
npm install scripty -D
```

### scripty的使用方法

1.在package.json下使用到scripty包

```
//package.json
"scripts":{
	"dev":"echo dev",
	"prd":"echo prd",
	"client:dev":"scripty",	
	"server:dev":"scripty",
	"start":"npm-run-all dev prd",  //这里可以是串行的 也可以是并行的
	"dev":"npm-run-all client:dev server:dev",  //这里可以是串行的 也可以是并行的
}
```

2 在项目跟目录下创建scripts目录，在里面创建client和server的目录，在client和server目录下分别创建好对应的dev.sh

3，dev.sh脚本内容可以按照项目实际需求

```
//webpack --mode development
//测试的话可以随便写点输出就好
echo "client:dev";
```

### cross-env 包的使用

cross-env是一款运行跨平台设置和使用环境变量的脚本

```
// 下载包
npm install cross-env -D
```

cross-env使用方法

```
配置package.json
"scripts":{
	"build":"cross-env NODE_ENV=production webpack --config build/webpack.config.js"
}

在我们js程序代码中就可以使用如下代码了
console.log(process.env.NODE_ENV === 'production ') // true
```

### yargs-parser

```
// 下载包
npm install yargs-parser -D
```

使用方法

```
// js程序代码
var argv = require('yargs-parser')(process.argv.slice(2))
console.log(argv)

//需要在package.json中指定相应的环境代码
{
"scripts":{
	"start":"webpack mode=development",
	"build":"webpack mode=production",
}
}
```

commandjs

```
//下载包
npm install commander -S
```


class RemoveCommentsPlugin {
  apply(compiler){
    console.log('RemoveCommentsPlugin 启动');
    compiler.hooks.emit.tap('RemoveCommentsPlugin',compilation=>{
      for (const name in compilation.assets) {
        // console.log(name) // 输出文件名称
        let file = compilation.assets[name]
        // console.log(source.source()) // 输出文件名称
        let source = file.source();
        source = source.replace(/\/\*{2,}\/\s?/g, '');
        compilation.assets[name] = {
          source:()=>source,
          size:()=>source.length

        }
      }
      
    })
  } 
}

module.exports = RemoveCommentsPlugin
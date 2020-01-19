const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}

console.log(process.env.VUE_APP_SECRET);

module.exports={

    chainWebpack:(config)=>{
        config.resolve.alias
        .set('@',resolve('./src'))
        .set('_c',resolve('./src/components'))
        .set('params',resolve('./params'))
　　　　
    },
    devServer: {
      port: 9000,
      open: true,
	  proxy: {
		  "/doubanApi": {
				  target: "http://api.douban.com/v2/movie",
				  ws: false,
				  secure: false,
				  changOrigin: true,
				  pathRewrite:{
					  '^/doubanApi':'/'
				  }
			}
	  }
    }
}
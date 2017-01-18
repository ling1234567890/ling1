// 请求模块
var gulp = require('gulp');
var sass = require('gulp-sass');
//var browserSync = require('browser-sync');

// 创建任务（执行任务）
// 目的：编译sass文件
gulp.task('buildSass',function(){
	// 查找需要编译的文件
	gulp.src('src/sass/*.scss')

		// 编译scss文件
		.pipe(sass({outputStyle:'expanded'})) //expanded展开

		// 输出文件
		.pipe(gulp.dest('src/css'))
		
		//编译成功后，利用browser-sync刷新页面，重载
		//.pipe(browserSync.reload({stream:true}));

});


// 监听sass文件
gulp.task('jtSass',function(){
	// 监听文件，当文件有修改时，执行buildSass任务
	gulp.watch('src/sass/*.scss',['buildSass']);
});

//利用browser-sync创建静态服务器
//
//gulp.task('sever',function(){
//	browserSync({
//		sever:{
//			baseDir:"./src"
//		},
//		端口设置
		//port:4000,
		
//		代理服务器，设置代理后就不需要上面的sever
		//proxy:'localhost',
		
//		//监听html文件
//		files:['./src/*.html','./src/**/*.css','./src/*.php'],
//	});
//	
//	gulp.watch('src/sass/*.scss',['buildSass']);
//});
//
//




















































//
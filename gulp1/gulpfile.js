// var gulp = require("gulp");
// // gulp.task("a",function(){
// //     console.log("aaa");
// // });
// // gulp.task("b",function(){
// //     console.log("bbb");
// // });
// // gulp.task("c",function(){
// //     console.log("ccc");
// // });
// // gulp.task("default",["a","b"],function(){
// // console.log("ccc")
// // });
// // gulp.task("default",function(){
// //     gulp.src("./image/**/*.png")
// //     .pipe(gulp.dest("./dest/"));
// // })

// gulp.task("a", function (done) {
//     console.log("aaaaa");
//     done();
// });

// gulp.task("default",gulp.series("a",function(){
//     console.log("bbbb");
//     done();
// }));

// gulp.task("a", function () {
//     return new Promise(function (res, rej) {
//         console.log("aaa");
//         res();
//     })
// });
// gulp.task("default", gulp.series("a",function(done) {
//     console.log("bbbb");
//     done(); 
// }))

// gulp.task("a", function (done) {
//     console.log("aaaa");
//     done();
// });
// gulp.task("default", gulp.parallel("a", function (done) {
//     console.log("bbb");
//     done()
// }))npm 

const gulp=require( "gulp");
const plugins=require("gulp-load-plugins")();
const browser=require( "browser-sync").create( );

gulp.task("default",function(){
    browser.init({
    
    })
    
})

module.exports = {
    entry: "./index.js",
    // 这样写后，jquery 就不会打包，文件缩小了很多·
    externals: {
        jquery: "jQuery",
        who:"Qps",
    },
}
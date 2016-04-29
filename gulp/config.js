var src = "./",
    dest = "./build/";

var config = {
    // browserSync: {
    //     proxy: 'localhost:3001',
    //     notify: false,
    //     browser: ["google chrome"]
    // },
    node: {
        path: 'server.js',
        watch: ['server.js','services/**/*.js']
    }
};

module.exports = config;

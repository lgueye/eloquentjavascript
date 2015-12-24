module.exports = function(grunt) {
    'use strict';
    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js']
        },
        jasmine: {
            // Your project's source files
            src: 'src/**/*.js',
            options: {
                // Your Jasmine spec files
                specs: 'test/**/*.js'
            }
        },
        "jsbeautifier": {
            files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
            options: {}
        }
    });

    // Register tasks.
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks("grunt-jsbeautifier");

    // Default task.
    grunt.registerTask('default', ['jsbeautifier', 'jshint', 'jasmine']);
};

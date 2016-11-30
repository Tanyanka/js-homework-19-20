module.exports = function(grunt) {    grunt.initConfig({        concat: {            options: {                separator: ''            },            scss: {                src: ['src/scss/*.scss'],                dest: 'src/scss/main.scss'            },            js: {                src: ['src/js/accordion.js', 'src/js/jcarousel.js', 'src/js/jquery.jcarousel.js', 'src/js/lodash.js', 'src/js/script.js'],                dest: 'dist/js/main.js'            }        },        sass: {            dist: {                files: [{                    expand: true,                    cwd: 'src/scss',                    src: ['main.scss'],                    dest: 'dist/css',                    ext: '.css'                }]            }        },        watch: {            sass: {                files: ['src/scss/*.scss'],                tasks: ['concat','sass']            }        }    });    grunt.loadNpmTasks('grunt-contrib-concat');    grunt.loadNpmTasks('grunt-contrib-sass');    grunt.loadNpmTasks('grunt-contrib-watch');    grunt.registerTask('default', ['concat', 'sass']);};
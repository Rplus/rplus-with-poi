module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        compass: {
            dist: {
                options: {
                    cssDir: './style/',
                    sassDir: './style/',
                    imagesDir: './img/'
                }
            }
        },

        connect: {
            server: {
                options: {
                    // protocol: 'https'
                }
            }
        },

        cssmin: {
            minify: {
                files: {
                    './style/style.css': './style/style.css'
                }
            }
        },

        watch: {
            compass: {
                files: ['./style/*.scss'],
                tasks: ['compass', 'autoprefixer'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['./index.html'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Default task.
    grunt.registerTask('default', ['compass', 'cssmin']);
    grunt.registerTask('see', ['connect', 'watch']);
    grunt.registerTask('make', ['compass', 'cssmin']);
};
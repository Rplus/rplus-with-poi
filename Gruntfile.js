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

        autoprefixer: {
            // option: browsers: ['last 2 version', 'ie 8', 'ie 9'],
            single_file: {
                src: './style/style.css',
                dest: './style/style.css'
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
    grunt.registerTask('make', ['compass', 'autoprefixer','cssmin']);
};
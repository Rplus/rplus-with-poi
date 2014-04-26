module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        compass: {
            dist: {
                options: {
                    cssDir: './build/style/',
                    sassDir: './build/style/',
                    imagesDir: './build/img/'
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

        'gh-pages': {
            options: {
                base: 'build'
            },
            src: ['**/*']
        },

        autoprefixer: {
            // option: browsers: ['last 2 version', 'ie 8', 'ie 9'],
            single_file: {
                src: './build/style/style.css',
                dest: './build/style/style.css'
            }
        },

        cssmin: {
            minify: {
                files: {
                    './build/style/style.css': './build/style/style.css'
                }
            }
        },

        watch: {
            compass: {
                files: ['./build/style/*.scss'],
                tasks: ['compass', 'autoprefixer'],
                options: {
                    livereload: true
                }
            },
            html: {
                files: ['./build/index.html'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Default task.
    grunt.registerTask('default', ['compass', 'cssmin']);
    grunt.registerTask('see', ['connect', 'watch']);
    grunt.registerTask('make', ['compass', 'autoprefixer','cssmin', 'gh-pages']);
};
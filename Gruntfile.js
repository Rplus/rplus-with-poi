module.exports = function(grunt) {

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

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['compass', 'cssmin']);
    grunt.registerTask('see', ['connect', 'watch']);
    grunt.registerTask('make', ['compass', 'cssmin']);
};
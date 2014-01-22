module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        stylus: {
            compile: {
                option: {
                    // urlfunc: 'embedurl'
                },
                files: {
                    './style/style.css': './style/style.styl'
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
            stylus: {
                files: ['./style/*.styl'],
                tasks: ['stylus'],
                options: {
                    livereload: true
                }
            },
            files: ['./index.html']
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['stylus', 'cssmin']);
    grunt.registerTask('see', ['connect', 'watch']);
    grunt.registerTask('make', ['stylus', 'cssmin']);
};
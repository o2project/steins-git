/*global module:false*/
module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        connect: {
            server: {
                options: {
                    base: 'build',
                    hostname: '0.0.0.0',
                    port: 8000
                }
            }
        },

        watch: {
            html: {
                files: ['build/**/*.html'],
            },
            config: {
                files: ['Gruntfile.js'],
                options: {
                    reload: true
                }
            },
            options: {
                livereload: true
            }
        },

        open: {
            dev: {
                path: 'http://<%= connect.server.options.hostname %>:<%= connect.server.options.port %>'
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-open');

    // Default task.
    grunt.registerTask('default', ['connect', 'watch']);

    grunt.registerTask('server', ['connect', 'open', 'watch']);
};

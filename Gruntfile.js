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

        shell: {
            generateHtml: {
                command: 'rake generate:html'
            }
        },

        watch: {
            config: {
                files: ['Gruntfile.js'],
                options: {
                    reload: true
                }
            },
            html: {
                files: ['build/**/*.html'],
            },
            adoc: {
                files: [
                    'Ch1_WhatsGit/*.adoc',
                    'index.adoc'
                ],
                tasks: ['shell:generateHtml']
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
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-open');

    // Default task.
    grunt.registerTask('default', ['shell:generateHtml']);

    grunt.registerTask('server', ['connect', 'open', 'watch']);
};

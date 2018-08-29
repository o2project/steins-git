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
            },
            proofreading: {
                command: 'rake generate:docbook && pandoc -f docbook -t markdown -o ./build/steins-git.md ./build/steins-git.xml && redpen -c ./conf/redpen-conf-ja.xml ./build/steins-git.md'
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
                files: ['build/**/*.html']
            },
            css: {
                files: ['public/**/*.css'],
                tasks: ['shell:generateHtml']
            },
            adoc: {
                files: [
                    'old_src/Ch*/*.adoc',
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

    grunt.registerTask('server', ['connect', 'watch']);
    grunt.registerTask('server-open', ['connect', 'open', 'watch']);
};

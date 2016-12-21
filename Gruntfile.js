/* global module */

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: ['src/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },

        'string-replace': {
            version: {
                files: {
                    'dist/<%= pkg.name %>.js' : 'dist/<%= pkg.name %>.js'
                },
                options: {
                    replacements: [{
                        pattern: /{{ VERSION }}/g,
                        replacement: '<%= pkg.version %>'
                    }]
                }
            }
        },

        jshint: {
            all: ['src/*.js']
        },

        uglify: {
          options: {
            banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> Copyright by <%= pkg.author.name %> <%= pkg.author.email %> */\n'
          },
          build: {
            src: 'dist/<%= pkg.name %>.js',
            dest: 'dist/<%= pkg.name %>.min.js'
          }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-string-replace');

    grunt.registerTask('check', ['jshint']);
    grunt.registerTask('test', ['qunit']);
    grunt.registerTask('jenkins', ['jshint', 'qunit']);
    grunt.registerTask('default', ['jshint', 'concat','string-replace','uglify']);
};

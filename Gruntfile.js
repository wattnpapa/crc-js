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

        mochaTest: {
            test: {
                options: {
                    reporter: 'spec',
                    captureFile: 'results.txt', // Optionally capture the reporter output to a file
                    quiet: false, // Optionally suppress output to standard out (defaults to false)
                    clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
                },
                src: ['test/**/*.js']
            }
        },

        env: {
            coverage: {
                APP_DIR_FOR_CODE_COVERAGE: '../coverage/instrument/dist/'
            }
        },

        instrument: {
            files: 'dist/*.js',
            options: {
                lazy: true,
                basePath: 'coverage/instrument/'
            }
        },

        storeCoverage: {
            options: {
                dir: 'coverage/reports'
            }
        },

        makeReport: {
            src: 'coverage/reports/**/*.json',
            options: {
                type: 'cobertura',
                dir: 'coverage/reports',
                print: 'detail'
            }
        },

        coveralls: {
            // Options relevant to all targets
            options: {
                // When true, grunt-coveralls will only print a warning rather than
                // an error, to prevent CI builds from failing unnecessarily (e.g. if
                // coveralls.io is down). Optional, defaults to false.
                force: false
            },

            your_target: {
                // LCOV coverage file (can be string, glob or array)
                src: 'coverage-results/extra-results-*.info',
                options: {
                    // Any options for just this target
                }
            },
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
    grunt.loadNpmTasks('grunt-mocha-test');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-istanbul');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-coveralls');

    grunt.registerTask('check', ['jshint']);
    grunt.registerTask('test', ['concat','mochaTest']);
    grunt.registerTask('coverage', ['concat', 'jshint', 'env:coverage', 'instrument', 'mochaTest', 'storeCoverage', 'makeReport']);
    grunt.registerTask('travis', ['jshint', 'concat', 'jshint', 'env:coverage', 'instrument', 'mochaTest', 'storeCoverage', 'makeReport','string-replace','uglify']);
    grunt.registerTask('default', ['jshint', 'concat', 'jshint', 'env:coverage', 'instrument', 'mochaTest', 'storeCoverage', 'makeReport','string-replace','uglify']);
};

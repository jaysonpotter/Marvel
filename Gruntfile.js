/*global module:false*/
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>*/\n',
        // Task configuration.
        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    _: true,
                    $: true,
                    Backbone: true,
                    jQuery: true,
                    console: true,
                    Marvel: true,
                    marvel: true
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            },
            app_test: {
                src: ['src/js/app/**/*.js']
            }
        },

        jst: {
            compile: {
                options: {
                    namespace: 'Marvel.Templates',
                    processName: function (filepath) {
                        return filepath.replace(/(src\/templates\/|\.tpl)/ig, '');
                    }
                },
                files: {
                    'tmp/js/templates.js': 'src/templates/*.tpl'
                }
            }
        },

        less: {
            development: {
                options: {
                    paths: ['src/less']
                },
                files: {
                    'tmp/css/<%= pkg.name %>.css': 'src/less/app.less'
                }
            },
            production: {
                options: {
                    paths: ['src/less'],
                    compress: true
                },
                files: {
                    'tmp/css/<%= pkg.name %>.css': 'src/less/app.less'
                }
            }
        },

        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 9']
            },
            prefixing: {
                src: 'tmp/css/<%= pkg.name %>.css',
                dest: 'dist/css/<%= pkg.name %>.css'
            }
        },

        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            app: {
                src: [
                    'src/js/app/namespace.js',
                    'tmp/js/templates.js',
                    'src/js/app/models/**/*.js',
                    'src/js/app/collections/**/*.js',
                    'src/js/app/views/**/*.js',
                    'src/js/app/utilities.js',
                    'src/js/app/router.js',
                    'src/js/app/app.js',
                    'src/js/app/init.js'
                ],
                dest: 'tmp/js/app.js'
            },
            lib: {
                src: [
                    'src/js/lib/jquery-2.1.1.js',
                    'src/js/lib/underscore-1.6.0.js',
                    'src/js/lib/backbone-1.1.2.js'
                ],
                dest: 'tmp/js/lib.js'
            },
            shabang: {
                src: ['tmp/js/lib.js', 'tmp/js/app.js'],
                dest: 'tmp/js/marvel.js'
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>',
                mangle: false,
                beautify: true
            },
            dist: {
                src: '<%= concat.shabang.dest %>',
                dest: 'dist/js/<%= pkg.name %>.min.js'
            }
        },

        watch: {
            all: {
                files: [
                    'src/**/*.js',
                    'src/**/*.less',
                    'src/**/*.tpl',
                    'Gruntfile.js',
                    'src/index.html'
                ],
                tasks: ['default'],
                options: {
                    spawn: false
                }
            }
        },

        copy: {
            main: {
                files: [
                    // includes files within path
                    {
                        expand: true,
                        src: ['*', 'img/**/*'],
                        cwd: 'src/',
                        dest: 'dist/',
                        filter: 'isFile'
                    }]
            }
        },

        clean: {
            freshStart: ['dist/*'],
            temp: ['tmp/*']
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jst');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');

    // Default task.
    grunt.registerTask('default', [
        'clean:freshStart',
        'jst',
        'less:development',
        'autoprefixer',
        'concat',
        'jshint',
        'uglify',
        'copy',
        'clean:temp',
        'watch'
    ]);
};
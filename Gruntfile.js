/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n',
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
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['js/**/*.js']
      }
    },
    handlebars: {
        compile: {
        	options: {
        	namespace: 'Marvel.TEMPLATES',
        		processName: function (filename) {
        			return filename.replace(/(src\/templates\/|\.hbs)/ig, '');
        		}
        	},
        	files: {
        		'tmp/js/templates.js': ['src/templates/*.hbs']
        	}
        }
    },
    less: {
        development: {
            options: {
                paths: ["src/less"]
            },
            files: {
                "dist/css/<%= pkg.name %>.css": "src/less/app.less"
            }
        },
        production: {
            options: {
                paths: ["src/less"],
                compress: true
            },
            files: {
                "dist/css/<%= pkg.name %>.css": "src/less/app.less"
            }
        }
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['src/js/**/*.js', 'tmp/js/templates.js'],
        dest: 'tmp/js/built.js'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },
    watch: {
      all: {
            files: ['src/**/*.js', 'src/**/*.less', 'src/**/*.hbs', 'Gruntfile.js'],
            tasks: ['default'],
            options: { spawn: false }
        }
    },
    copy: {
      main: {
        files: [
          // includes files within path
          {
            expand: true,
            src: ['*'],
            cwd: 'src/',
            dest: 'dist/',
            filter: 'isFile'}
        ]
      }
    },
    clean: {
        freshStart: ['dist/*'],
        temp: ['tmp/*']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('default', ['clean:freshStart', 'handlebars', 'less:development', 'concat', 'uglify', 'copy', 'clean:temp']);

};

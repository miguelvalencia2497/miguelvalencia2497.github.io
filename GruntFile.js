module.exports = function(grunt) {

  //Configuration
  grunt.initConfig({
    cssmin: {
      dist: {
        options: {
          banner: 'Written by Miguel Piolo S. Valencia'
        },
        files: {
          'dist/css/style.min.css': ['src/css/**/*.css']
        }
      }
    },
    uglify: {
      dist: {
        files: {
         'dist/js/main.min.js': ['src/js/main.js'],
        }
      }
    },
    imagemin: {
      dist: {
        options: {
         optimizationLevel: 5,
        },
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/images'
        }]
      }
    }
  });

  //Load Plugins
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  //Register Tasks
  // grunt.registerTask('run', function(){
  //   console.console.log('I am running');
  // });
};

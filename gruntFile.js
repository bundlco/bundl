module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: ['dest/concat/<%= filename %>.<%= filetype %>'],
				dest: 'build/<%= filename %>.min.<%= filetype %>'
			}
		},
		concat: {
			js : {
				host:{
					src: ['src/js/host/*.js'],
					dest: 'dest/js/concat/host.js'
				},
				customer:{
					src: ['src/js/customer/*.js'],
					dest: 'dest/js/concat/customer.js'
				},
			},
			css: {
				host:{
					src: ['src/js/host/*.css'],
					dest: 'dest/concat/host.css'
				},
				customer:{
					src: ['src/css/customer/*.css'],
					dest: 'dest/concat/customer.css'
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');

	// Default task(s).
	grunt.registerTask('default', ['concat','uglify']);

};
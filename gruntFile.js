module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
		'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
		'<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
		'* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
		' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
		uglify: {
			options: {
				banner: '<%= banner %>'
						},
			dist: {
				files: [
					{
						expand: true,     // Enable dynamic expansion.
						cwd: 'assets/',      // Src matches are relative to this path.
						src: ['**/*.js'], // Actual pattern(s) to match.
						dest: 'build/',   // Destination path prefix.
						ext: '.min.js',   // Dest filepaths will have this extension.
						extDot: 'first'   // Extensions in filenames begin after the first dot
					},
				],
			}
		},
		cssmin: {
			options: {
				banner: '<%= banner %>',
			},
			dist: {
				files: [
					{
						expand: true,     // Enable dynamic expansion.
						cwd: 'assets/',      // Src matches are relative to this path.
						src: ['**/*.css'], // Actual pattern(s) to match.
						dest: 'build/',   // Destination path prefix.
						ext: '.min.css',   // Dest filepaths will have this extension.
						extDot: 'first'   // Extensions in filenames begin after the first dot
					},
				],
			}
		},
		concat: {
			options: {
				// define a string to put between each file in the concatenated output
				stripBanners:{block:true,line:true},
				separator: ';'
			},
			host_js: {
				src: [
					'bower_components/jquery/dist/jquery.js',
					'bower_components/angular/angular.js',
					'bower_components/angular-animate/angular-animate.js',
					'bower_components/angular-touch/angular-touch.js',
					'bower_components/angular-route/angular-route.js',
					'bower_components/angular-cookies/angular-cookies.js',	
	 
					'bower_components/angular-google-chart/ng-google-chart.js',
					'bower_components/angular-count-to/src/count-to.js',
					'bower_components/ngFacebook/version/v0.0.6/ngFacebook.min.js',

					'bower_components/angular-route-segment/build/angular-route-segment.js',
					'bower_components/angular-bootstrap-colorpicker/js/bootstrap-colorpicker-module.js',
		
					'bower_components/ngAutocomplete/src/ngAutocomplete.js',
					'bower_components/quill/dist/quill.js',
					'bower_components/ngQuill/src/ng-quill.js',
					'bower_components/ng-file-upload/angular-file-upload.js',
					
					'bower_components/ng-file-upload/angular-file-upload-shim.js',
					'bower_components/ui-bootstrap/dist/ui-bootstrap-tpls-0.12.1.js',
					
					'src/js/md5.js',
					'src/js/ng-img-crop.js',
					
				],
				dest: 'assets/host.<%= pkg.name %>.js',
			},
			customer_js:{
				src: [
					'bower_components/jquery/dist/jquery.js',
					'bower_components/angular/angular.js',
					'bower_components/angular-animate/angular-animate.js',
					'bower_components/angular-touch/angular-touch.js',
	
					'bower_components/angular-route/angular-route.js',
					'bower_components/angular-cookies/angular-cookies.js',	
					
					'bower_components/angular-route-segment/build/angular-route-segment.js',
	
					'bower_components/angular-payments/lib/angular-payments.js',
					'bower_components/qrcode-generator/js/qrcode.js',
					
					'bower_components/angular-qrcode/qrcode.js',
					'bower_components/ng-file-upload/angular-file-upload.js',
					
					'bower_components/ng-file-upload/angular-file-upload-shim.js',
					'bower_components/ngFacebook/version/v0.0.6/ngFacebook.min.js',
					'bower_components/ui-bootstrap/dist/ui-bootstrap-tpls-0.12.1.js',
					'src/js/md5.js',
	
					
					'src/js/customer/*.js'
				],
				dest: 'assets/customer.<%= pkg.name %>.js'
			},
			host_css: {
				src: [
					'src/css/normalize.css',
					'bower_components/font-awesome/css/font-awesome.css',
					'bower_components/quill/dist/quill.snow.css',
					'angular-bootstrap-colorpicker/css/colorpicker.min.css',
					'src/css/wk-fontface.css',
					'src/css/bootstrap-bundl.min.css'
					
				],
				dest: 'assets/host.<%= pkg.name %>.css',
			},
			customer_css:{
				src: [
					'src/css/normalize.css',
					'bower_components/font-awesome/css/font-awesome.css',
				],
				dest: 'assets/customer.<%= pkg.name %>.css'
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	

	// Default task(s).
	grunt.registerTask('default', ['concat','cssmin','uglify']);

};
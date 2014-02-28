module.exports = function( grunt ) {
	'use strict';

	grunt.initConfig({
		dwarfBuild: {
			all: {
				files: {
					'dist/index.js': [require.resolve('xss')]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-dwarf-builder');
	grunt.registerTask('default', ['dwarfBuild']);
};
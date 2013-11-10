module.exports = function(grunt){
    "use strict";
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.initConfig({
       pkg: grunt.file.readJSON('package.json'),
       cssc: {
           build: {
               options: {
                   consolidateViaDeclarations: true,
                   consolidateViaSelectors: true,
                   consolidateMediaQueries: true
               },
               files: {
                   'source/assets/css/style.css':'source/assets/css/style.css'
               }
           }
       },
        cssmin: {
            build: {
                src: 'source/assets/css/style.css',
                dest: 'source/assets/css/style.css'
            }
        },
        sass: {
            build: {
                files:{
                    'source/assets/css/style.css':'source/assets/sass/style.scss'
                }
            }
        },
        watch: {
            html: {
                files: 'source/index.html',
                tasks: ['htmlhint']
            },
            js: {
                files: '<%= uglify.files.src %>',
                tasks:['uglify']
            },
            css: {
                files: 'source/assets/sass/**/*.scss',
                tasks:['buildcss']
            },
            copyto: {
              files: ['source/**', '!source/assets/**/*.scss'],
              tasks: ['copyto']
            },
            options: {
                livereload: true
            }
        },
        htmlhint: {
            build:{
                options:{
                    'tag-pair':true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: ['source/index.html']
            }
        },
        uglify: {
            files: {
                    src: 'source/assets/js/custom.js',
                    dest: 'build/assets/js/custom.min.js'
               }

        },
        copyto: {
            stuff: {
                files: [
                    {cwd: 'source/', src:['**/*'], dest: 'build/'}
                ],
                options: {
                    processContent: function(content, path){
                        return content;
                    },
                    ignore: [
                        'source/assets/sass{,/**/*}',
                        'source/assets/js/custom.js'
                    ]
                }
            }
        }
    });

    grunt.registerTask('default', []);
    grunt.registerTask('buildcss', ['sass', 'cssc', 'cssmin']);
}
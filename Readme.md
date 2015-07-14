# html-spa-workshop
Slides and examples related to Single Page Applications without frameworks 

App Scaffolding 
|- yeoman
|- mimosa
|- brunch
|- slush
Dependencies Management
|- npm
|- bower
|- jspm
CSS
|- Modularity and Scalability http://www.creativebloq.com/css3/create-modular-and-scalable-css-9134351
|- SaSS and Less

Lab 1: Install the required dependencies and, using your favorite scaffolding tool, create an HTML5 application (H5BP) and run it in your browser. Once the app is running open the browser developer tool and explore the sources.

Lab 2: Using the previously created app, add jquery and bootstrap-css as a dependency and  create a left navigation menu that when clicked is able to render different views.

Lab 3: Using the help embedded in your command line build the current app in order to have the code productionized and ready to be publish. 

ECMA6
|- Features review http://blog.teamtreehouse.com/get-started-ecmascript-6
|- Modules
|- Using ECMA6 Today
|-|- Traceur
| |- Babel
|- Integrate a Transpiler

Lab 4: Integrate babel in the build workflow and define two ES6 modules. The first module expose a function to calculate a random fibonacci number, the second one handle a click event and print a random fibonacci number on the screen. 

Web Components
|- Polymer
|- X-Tag
|- VanillaJS

Lab 5: Using polymer create a web component able to render a random number every time the user click on it.

Routing 
|- Application Routes
|- Director https://github.com/flatiron/director
|- Page http://smalljs.org/client-side-routing/page/
|- Mithril https://lhorie.github.io/mithril/

Lab 6: Using Director create a single page app with a left navigation menu able to render different views accordingly to the menu voice that is selected.

Testing
|- TDD 
|- Jasmine
|- Mocha and Chai

Lab 6: Using Jasmine to create a test for the following behavior: As a user I want to add an item to my todo list by entering the content in an input box so that every time I press enter or I click the add button I can see my list updated.
=======
Slides and examples related to Single Page Applications without frameworks. This workshop is not intended to blame frameworks but to have a better understanding about what's behind the scene in a framework.
Following the list of topics covered in the workshop, the ones that will be covered in the future and a list of interesting links.

### App Scaffolding 
* yeoman
* mimosa
* brunch
* slush 

### Dependencies Management
* npm
* bower
* jspm

### CSS (to be covered)
* Modularity and Scalability http://www.creativebloq.com/css3/create-modular-and-scalable-css-9134351
* SaSS and Less

### ECMA6
* Features review http://blog.teamtreehouse.com/get-started-ecmascript-6
* Modules
* Using ECMA6 Today
   * Traceur
   * Babel
* Integrate a Transpiler

### Web Components
* Polymer
* X-Tag
* VanillaJS

### Routing 
* Application Routes
* Director 
* Page 
* Mithril 

### Testing (to be covered)
* TDD 
* Jasmine
* Mocha and Chai

================================

## Labs

================================

## Links

### App Scaffolding
http://yeoman.io/generators/
http://www.barbarianmeetscoding.com/blog/2014/12/22/barbaric-development-toolbox-elevate-your-front-end-workflow-with-yeoman/
https://github.com/h5bp/generator-h5bp
https://github.com/larsonjj/generator-yeogurt
http://blog.nodejitsu.com/npmawesome-eight-fun-to-use-yeoman-generators/
http://mimosa.io/started.html#new
https://github.com/dbashford/mimosa/
http://slidedeck.io/aheuermann/brunch-presentation
https://github.com/dbashford/mimosa.io/tree/gh-pages
https://github.com/yeoman/yo
https://github.com/yeoman/generator-webapp
https://groups.google.com/forum/#!topic/mimosajs/wOvzpvFmyHQ

### Dependencies Management
http://stackoverflow.com/questions/25416813/package-manager-bower-vs-jspm
https://www.quora.com/Why-use-Bower-when-there-is-npm
http://stackoverflow.com/questions/15092345/javascript-dependency-management-npm-vs-bower-vs-volo
http://blog.npmjs.org/post/110924823920/npm-weekly-5 
http://stackoverflow.com/questions/18641899/what-is-the-difference-between-bower-and-npm
https://github.com/jspm/jspm-cli
http://browsenpm.org/package.json

### ES6
https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions#Lexical_this
http://aurelia.io/get-started.html
http://javascriptplayground.com/blog/2014/11/js-modules-jspm-systemjs/
https://babeljs.io/docs/setup/#babel_in_browser
http://www.2ality.com/2014/09/es6-modules-final.html
https://leanpub.com/understandinges6/read/
http://philipp-burckhardt.com/2014/08/22/ecmascript-6-fat-arrow-functions/
https://facebook.github.io/react/docs/jsx-in-depth.html
http://caspervonb.com/javascript/an-overview-of-javascript-in-2015-ecmascript-6/

### Web Components 
http://dsheiko.com/weblog/creating-a-web-component-with-vanillajs-x-tag-and-polymer


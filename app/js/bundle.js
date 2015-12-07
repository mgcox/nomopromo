/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */var Router = ReactRouter.Router;
	var Link = ReactRouter.Link;
	var Route = ReactRouter.Route;
	var Profile = __webpack_require__(2)
	var Friends = __webpack_require__(3)
	var SignUp = __webpack_require__(4)
	var Searched = __webpack_require__(2)

	var App = React.createClass({displayName: "App",

	  render: function() {

	    return (
	      React.createElement("div", null,
			React.createElement("nav", {className: "navbar navbar-default", role: "navigation"},
	 		 React.createElement("div", {className: "container"},
	    		React.createElement("div", {className: "navbar-header"},
	      			React.createElement("button", {type: "button", className: "navbar-toggle", "data-toggle": "collapse"},
	        			React.createElement("span", {className: "sr-only"}, "Toggle navigation"),
	        			React.createElement("span", {className: "icon-bar"}),
	        			React.createElement("span", {className: "icon-bar"}),
	        			React.createElement("span", {className: "icon-bar"})
	      			),
	      			React.createElement("a", {className: "navbar-brand", href: "http://localhost:3000/#/signUp?_k=r1j1wp"}, "NoMoPromo")
	    		),

	    		//React.createElement("div", {className: "collapse navbar-collapse"},
	      			React.createElement("ul", {className: "nav navbar-nav"},
	        		//React.createElement("li", null, React.createElement(Link, {to: "profile"}, "About Us")),
	        		React.createElement("li", null, React.createElement(Link, {to: "friends"}, "Get Started")),
	        		//	React.createElement("li", {role: "presentation", className: "dropdown"},
	          			//	React.createElement("a", {className: "dropdown-toggle", href: "#", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false"}, "Friends", React.createElement("span", {className: "caret"})),
	          				//React.createElement("ul", {className: "dropdown-menu"},
	            		//		React.createElement("li", null, React.createElement(Link, {to: "Friends"}, "View Friends")),
	            			//	React.createElement("li", null, React.createElement("a", {href: "#"}, "Add Friend")),
	            		//		React.createElement("li", null, React.createElement("a", {href: "#"}, "Remove Friend"))
	          			//	)
	        		//	)
	      		//	),
	      			React.createElement("ul", {className: "nav navbar-nav navbar-right"},
	      				//React.createElement("li", null, React.createElement(Link, {to: "WishListHist"}, "Get Started"))
	        			React.createElement("li", null, React.createElement(Link, {to: "profile"}, "About Us"))
	      			)

	    		)
	  		  )
	  		),
	        React.createElement("div", {className: "container"},
	          this.props.children
	        )

	      )
	    );
	  }
	});



	// Run the routes
	var routes = (
	      React.createElement(Router, null,
	        React.createElement(Route, {name: "app", path: "/", component: App},
	          React.createElement(Route, {name: "SignUp", path: "/signUp", component: SignUp}),
	          React.createElement(Route, {name: "Friends", path: "/friends", component: Friends}),
	          React.createElement(Route, {path: "profile", path: "/profile", component: Profile}),
	          React.createElement(Route, {path: "searched", path: "/searched", component: Searched})
	        )
	      )
	);

	console.log("Started Server on port 3000");
	console.log("Started Server on port 3000");
	ReactDOM.render(routes, document.body);


/***/ },
/* 2 */
/***/ function(module, exports) {
	/** @jsx React.DOM */var Profile = React.createClass({displayName: "Profile",


   /* React.createElement("div", null,
	        React.createElement("h1", null, "About us:"),
	        React.createElement("ul", null, "We are an elite squad of highly trained penguins bent on saving you time, piece of mind, and money.")*/

		handleClick: function(event) {
		console.log(event);
		console.log(event.target.firstChild.data);
		 window.location = "http://localhost:3000/#/searched?_k=wbthg1";
    },
	  render: function() {
	    return (
	      React.createElement("div", null,
	        React.createElement("h1", null, "Choose a brand"),
	        React.createElement("ul", null, "",
	        	//for each email make a new button and name it after the subject of the email.
	        	React.createElement('button', {className: "btn btn-success btn-lg", type: 'button', onClick: this.handleClick, style: {color: "#e2e1c8"}}, "email1"),
	      	 	React.createElement('button', {className: "btn btn-success btn-lg", type: 'button', onClick: this.handleClick, style: {color: "#e2e1c8"}}, "email2"),
	     	    React.createElement('button', {className: "btn btn-success btn-lg", type: 'button', onClick: this.handleClick, style: {color: "#e2e1c8"}}, "email3")
	        )
	      )
	    );
	  }
	});


	module.exports = Profile

/***/ },
/* 3 */
/***/ function(module, exports) {

	/** @jsx React.DOM */var Friends = React.createClass({displayName: "Friends",
		handleClick: function(event) {
		console.log(event);
		console.log(event.target.firstChild.data);
		 window.location = "http://localhost:3000/#/searched?_k=wbthg1";
    },
	  render: function() {
	    return (
	      React.createElement("div", null,
	        React.createElement("h1", null, "Choose a brand"),
	        React.createElement("ul", null, "",
	         React.createElement('button', {className: "btn btn-success btn-lg", type: 'button', onClick: this.handleClick, style: {color: "#e2e1c8"}}, "brand1"),
	        React.createElement('button', {className: "btn btn-success btn-lg", type: 'button', onClick: this.handleClick, style: {color: "#e2e1c8"}}, "brand2"),
	        React.createElement('button', {className: "btn btn-success btn-lg", type: 'button', onClick: this.handleClick, style: {color: "#e2e1c8"}}, "brand3")
	        )
	      )
	    );
	  }
	});

	module.exports = Friends

/***/ },
/* 4 */
/***/ function(module, exports) {

	/** @jsx React.DOM */var Box = React.createClass({displayName: "Box",

		getInitialState: function() {
	    	return {value: 'Hello!'};
	  	},

	  	handleChange: function(event) {
	    	this.setState({value: event.target.value});
	  	},
		render: function(){
			return (
				React.createElement("form", null,
					React.createElement("input", {type: "text", placeholder: this.props.name})
				)
				);
		}
	})

	var SignUp = React.createClass({displayName: "SignUp",
			 handleClick: function() {
		 window.location = "http://localhost:3000/#/friends?_k=8jyfde";
       console.log("clicked!");
    },
		render: function(){
			return(
				React.createElement("div", null,
					//React.createElement(ReactGridLayout , {className: "layout", layout: {layout}}),
					//React.createElement(Box, {name: "Last Name"}),
					//React.createElement(Box, {name: "Email"}),
					//React.createElement(Box, {name: "Birth"})
					 React.createElement('button', {className: "btn btn-success btn-lg center-block", type: 'button', name: "Get Started!", onClick: this.handleClick, style: {color: "#e2e1c8"}}, "Get Started!") // style: {background: "purple"}
				)
				);
		}
	});

	module.exports = SignUp
	
	
	/***/ },
/* 5 */
/***/ function(module, exports) {

	/** @jsx React.DOM */var Box = React.createClass({displayName: "Box",
		handleClick: function(event) {
		console.log(event);
		console.log(event.target.firstChild.data);
		 window.location = "http://localhost:3000/#/friends?_k=8jyfde";
    },
	  render: function() {
	    return (
	      React.createElement("div", null,
	        React.createElement("h1", null, "Choose a brand"),
	        React.createElement("ul", null, "",
	         React.createElement('button', {className: "btn btn-success btn-lg", type: 'button', onClick: this.handleClick, style: {color: "#e2e1c8"}}, "brand1"),
	        React.createElement('button', {className: "btn btn-success btn-lg", type: 'button', onClick: this.handleClick, style: {color: "#e2e1c8"}}, "brand2"),
	        React.createElement('button', {className: "btn btn-success btn-lg", type: 'button', onClick: this.handleClick, style: {color: "#e2e1c8"}}, "brand3")
	        )
	      )
	    );
	  }
	});

	module.exports = Searched

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map

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
	var Searched = __webpack_require__(5)
	// What is __webpack_require__ and how do i change it so that i can have more
	// pages to work with.  I need one to deal with returning users.
	// How do i open an html file from this code if it is passed to me as a string (or if it's passed as a file name)?
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
	      			React.createElement("a", {className: "navbar-brand", href: "/#/signUp?_k=r1j1wp"}, "NoMoPromo")
	    		),

	      			React.createElement("ul", {className: "nav navbar-nav"},
	        		React.createElement("li", null, React.createElement(Link, {to: "friends"}, "Get Started")),
	      			React.createElement("ul", {className: "nav navbar-nav navbar-right"},
	        			React.createElement("li", null, React.createElement(Link, {to: "searched"}, "Login")) // add new link here
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
	        React.createElement(Route, {name: "app", path: "/search", component: App},
	          React.createElement(Route, {name: "SignUp", path: "/signUp", component: SignUp}),
	          React.createElement(Route, {name: "SignUp2", path: "/", component: SignUp}),
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

		getInitialState: function() {
			console.log("called getInitialState");
			//put a call to the server to get the 3 most recent emails and corresponding htmls, set this in the return of this function
			//use that to display the email subjects.
	    	return{
		    	email1Subject: '$20 Off Holiday Cards + Free Shipping Offer',
		    	email2Subject: 'All-New DOORBUSTERS + 20% off Your Total Purchase!',
		      	email3Subject: 'NEW Classes...In-Store & Online',
		      	email1Html: '<p>copy copy copy <strong>strong copy</strong></p>',
		    	email2Html: '',
		      	email3Html: ''
		    }
	  	},

		handleClick: function(event) {
		//on click we should query the server to get the html and display it.
		console.log("function");
		console.log(event);
		console.log(event.target.firstChild.data);
		if(this.state.email1Subject == event.target.firstChild.data)
		{
			//open the email1Html in browser

		}
		else if(this.state.email2Subject == event.target.firstChild.data)
		{
			//open the email2Html in browser
		//	<body bgcolor=white> <p>Login successful</p> </body>
		}
		else if(this.state.email3Subject == event.target.firstChild.data)
		{
			//open the email3Html in browser
		}
    },
	  render: function() {
			console.log("about to render");
			return (

	    console.log("called render"),
	      React.createElement("div", null,
	        React.createElement("h1", null, "Choose an email"),
	        React.createElement("ul", null, "",
	        	//for each email make a new button and name it after the subject of the email.
	        	React.createElement('button', {className: "btn btn-success btn-lg", type: 'button', onClick: this.handleClick, style: {color: "#e2e1c8"}}, this.state.email1Subject),
	      	 	React.createElement('button', {className: "btn btn-success btn-lg", type: 'button', onClick: this.handleClick, style: {color: "#e2e1c8"}}, this.state.email2Subject),
	     	    React.createElement('button', {className: "btn btn-success btn-lg", type: 'button', onClick: this.handleClick, style: {color: "#e2e1c8"}}, this.state.email3Subject)
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
		if("Jo-Ann Stores" == event.target.firstChild.data)
		{
			//set state in database = to Jo-Ann Stores
		}
		else if("Too Faced Cosmetics" == event.target.firstChild.data)
		{
			//set state in database = to Too Faced Cosmetics
		}
		else if("Bath & Body Works" == event.target.firstChild.data)
		{
			//set state in database = to Bath & Body Works
		}
		window.location = "/#/profile?_k=mnjykk";
    },

	  render: function() {
	    return (
	      React.createElement("div", null,
	        React.createElement("h1", null, "Choose a brand"),
	        React.createElement("ul", null, "",
	         React.createElement('button', {className: "btn btn-success btn-lg", type: 'button', onClick: this.handleClick, style: {color: "#e2e1c8"}}, "Jo-Ann Stores"),
	        React.createElement('button', {className: "btn btn-success btn-lg", type: 'button', onClick: this.handleClick, style: {color: "#e2e1c8"}}, "Too Faced Cosmetics"),
	        React.createElement('button', {className: "btn btn-success btn-lg", type: 'button', onClick: this.handleClick, style: {color: "#e2e1c8"}}, "Bath & Body Works")
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

	getInitialState: function(){
		    return{
		    	firstName: '',
		    	lastName: '',
		      	email: '',
		      	passwordField: '',
		      	passwordFieldCheck: '',
		      	passwordsMatch: false
		    }
		    },

		     handleSubmit: function(event) {
		     //----- Send value of text input to Mongo------//

	    	// prevent default browser submit
	    		event.preventDefault();
	    	// get data from form
		    var username = this.state.email;
		    var password = this.state.passwordField;
		    var firstName = this.state.firstName;
		    var lastName = this.state.lastName;
		    var match = this.state.passwordsMatch;

		    console.log("username %s" , username);
		    console.log("password %s" , password);
		    console.log("password2 %s" , this.state.passwordFieldCheck);
		    console.log("firstName %s" , firstName);
		    console.log("lastName %s" , lastName);
		    console.log("match %s" , match);

		    if (!username || !password || !firstName || !lastName)
		    {
		    	//document.write("<body bgcolor=white> <p>Login successful</p> </body>");
		        $("#errorDiv").html("<font size=15px color=red>Please Fill out all items!</font>");
		        return;
		    }
		    if(this.state.passwordField != this.state.passwordFieldCheck)
		    {
		       $("#errorDiv").html("<font size=15px color=red>Your passwords don't match!</font>");
		        return;
		    }
		    //save the user data

		    // login via API
		  //  auth.register(firstName, lastName, username, password, function(loggedIn) {
		        // login callback
		    //    if (!loggedIn){
		    //      	console.log("failed");
		     //       $("#errorDiv").html("<font size=15px color=red>User already exists!</font>");
		    //      }
		    //    else {
		        	console.log("worked");
		        	window.location = "/#/friends?_k=8jyfde";
		    //      this.context.history.pushState(null, '/mainAppWin');
		   //     }
		 //   }.bind(this));
		     },


			 handleClick: function(event) {

		if("SignUp" == event.target.id)
		{
			if(this.state.passwordField == this.state.passwordFieldCheck)
			{
				this.setState({passwordsMatch: true});
				console.log("password1`111111111111111111111111111111111111111111111111");
				console.log("match %s" , this.state.passwordsMatch);
			}
		    console.log("password %s" , this.state.passwordField);
		    console.log("password2 %s" , this.state.passwordFieldCheck);
			this.handleSubmit(event);
			//window.location = "http://localhost:3000/#/friends?_k=8jyfde";
		}
		else if("firstName" == event.target.id)
		{
			this.setState({firstName: event.target.value});
			console.log(this.state.firstName);
		}
		else if("lastName" == event.target.id)
		{
			this.setState({lastName: event.target.value});
		}
		else if("email" == event.target.id)
		{
			this.setState({email: event.target.value});
		}
		else if("passwordField" == event.target.id)
		{
			this.setState({passwordField: event.target.value});
		}
		else if("passwordFieldCheck" == event.target.id)
		{
			this.setState({passwordFieldCheck: event.target.value});
		}
		 console.log(event.target.id);
       console.log("clicked!");
    },
		render: function(){
		//	return(
			//	React.createElement("div", {align: "center"},
					//React.createElement(ReactGridLayout , {className: "layout", layout: {layout}}),
				//	React.createElement(Box, {name: "Last Name", onChange: this.handleClick, id: "Last Name"}),
				//	React.createElement(Box, {name: "Email", onChange: this.handleClick, id: "Email"}),
				//	React.createElement(Box, {name: "Birth", onChange: this.handleClick, id: "Birth"}),
				//	 React.createElement('button', {id: "button", className: "btn btn-success btn-lg center-block", type: 'button', name: "Get Started!", onClick: this.handleClick, style: {color: "#e2e1c8"}}, "Get Started!") // style: {background: "purple"}
			//	)
			//	);
			return(
				React.createElement("div", null,
				React.createElement("div", null, React.createElement("span", {id: "errorDiv", className: "errorDiv"})),
				React.createElement("form", {id: "reg", name: "reg"},
					React.createElement("input", {type: "hidden", name: "lsd", value: "AVrbhDJG", autoComplete: "off"}),
					React.createElement("div", {id: "reg_form_box", className: "large_form"},
						React.createElement("div", {className: "clearfix _58mh"},
							React.createElement("div", {className: "mbm _3-90 lfloat _ohe"},
								React.createElement("div", {className: "_5dbb", id: "u_0_a"},
									React.createElement("div", {className: "uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"},
										React.createElement("div", {className: "placeholder", "aria-hidden": "true"}, "First name"),
										React.createElement("input", {
										required: true,
										value: this.state.firstNameText,
										onChange: this.handleClick,
										type: "text",
										className: "inputtext _58mg _5dba _2ph-",
										"data-type": "text",
										name: "firstname",
										"aria-required": "1",
										placeholder: "",
										id: "firstName",
										"aria-label": "First name",
										"aria-owns": "js_0",
										"aria-haspopup": "true",
										"aria-describedby": "js_5",
										"aria-invalid": "true"})
									),
									React.createElement("i", {className: "_5dbc img sp_7XMX65Pq0E7 sx_ee768b"}), React.createElement("i", {className: "_5dbd img sp_7XMX65Pq0E7 sx_067138"})
								)
							),
							React.createElement("div", {className: "mbm rfloat _ohf"},
								React.createElement("div", {className: "_5dbb", id: "u_0_c"},
									React.createElement("div", {className: "uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"},
										React.createElement("div", {className: "placeholder", "aria-hidden": "true"}, "Last name"),
										React.createElement("input", {
										required: true,
										value: this.state.lastNameText,
										onChange: this.handleClick,
										type: "text",
										className: "inputtext _58mg _5dba _2ph-",
										"data-type": "text",
										name: "lastname",
										"aria-required": "1",
										placeholder: "",
										id: "lastName",
										"aria-label": "Last name"})
									),
									React.createElement("i", {className: "_5dbc img sp_7XMX65Pq0E7 sx_ee768b"}), React.createElement("i", {className: "_5dbd img sp_7XMX65Pq0E7 sx_067138"})
								)
							)
						),
						React.createElement("div", {className: "mbm"},
							React.createElement("div", {className: "_5dbb", id: "u_0_e"},
								React.createElement("div", {className: "uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"},
									React.createElement("div", {className: "placeholder", "aria-hidden": "true"}, "Email"),
									React.createElement("input", {
									required: true,
									value: this.state.emailText,
									onChange: this.handleClick,
									type: "email",
									className: "inputtext _58mg _5dba _2ph-",
									"data-type": "text",
									name: "reg_email__",
									"aria-required": "1",
									placeholder: "",
									id: "email",
									"aria-label": "Email"})
								),
								React.createElement("i", {className: "_5dbc img sp_7XMX65Pq0E7 sx_ee768b"}), React.createElement("i", {className: "_5dbd img sp_7XMX65Pq0E7 sx_067138"})
							)
						),
						React.createElement("div", {className: "mbm"},
							React.createElement("div", {className: "_5dbb", id: "u_0_j"},
								React.createElement("div", {className: "uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"},
									React.createElement("div", {className: "placeholder", "aria-hidden": "true"}, "Password"),
									React.createElement("input", {
									required: true,
									value: this.state.passwordText,
									onChange: this.handleClick,
									type: "password",
									className: "inputtext _58mg _5dba _2ph-",
									"data-type": "text",
									name: "reg_passwd__",
									"aria-required": "1",
									placeholder: "",
									id: "passwordField",
									"aria-label": "Password"})
								),
								React.createElement("i", {className: "_5dbc img sp_7XMX65Pq0E7 sx_ee768b"}), React.createElement("i", {className: "_5dbd img sp_7XMX65Pq0E7 sx_067138"})
							)
						),
												React.createElement("div", {className: "mbm"},
							React.createElement("div", {className: "_5dbb", id: "u_0_j"},
								React.createElement("div", {className: "uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"},
									React.createElement("div", {className: "placeholder", "aria-hidden": "true"}, "Re-enter Password"),
									React.createElement("input", {
									required: true,
									value: this.state.passwordText,
									onChange: this.handleClick,
									type: "password",
									className: "inputtext _58mg _5dba _2ph-",
									"data-type": "text",
									name: "reg_passwd__",
									"aria-required": "1",
									placeholder: "",
									id: "passwordFieldCheck",
									"aria-label": "Re-enter Password"})
								),
								React.createElement("i", {className: "_5dbc img sp_7XMX65Pq0E7 sx_ee768b"}), React.createElement("i", {className: "_5dbd img sp_7XMX65Pq0E7 sx_067138"})
							)
						),
						React.createElement("div", null,
	                  React.createElement("button", {
	                  onClick: this.handleClick,
	                  id: "SignUp",
	                  className: "btn btn-primary btn-lg active"}, "Get Started!")
	                )
					)
					)
				)
				);
		}
	});

	module.exports = SignUp


/***/ },
/* 5 */
/***/ function(module, exports) {

	/** @jsx React.DOM */var Searched = React.createClass({displayName: "Searched",
		getInitialState: function(){
		    return{
		      	email: '',
		      	passwordField: ''
		    }
		    },

		     handleSubmit: function(event) {
		     //----- Send value of text input to Mongo------//

	    	// prevent default browser submit
	    		event.preventDefault();
	    	// get data from form
		    var username = this.state.email;
		    var password = this.state.passwordField;

		    console.log("username %s" , username);
		    console.log("password %s" , password);

		    if (!username || !password)
		    {
		    	//document.write("<body bgcolor=white> <p>Login successful</p> </body>");
		        $("#errorDiv").html("<font size=15px color=red>Please Fill out all items!</font>");
		        return;
		    }
		    //check to see if the user is valid.  if not valid then print Invalid username or password

		    // login via API
		  //  auth.register(firstName, lastName, username, password, function(loggedIn) {
		        // login callback
		    //    if (!loggedIn){
		    //      	console.log("failed");
		     //       $("#errorDiv").html("<font size=15px color=red>User already exists!</font>");
		    //      }
		    //    else {
		        	console.log("worked");
		     //   	window.location = "http://localhost:3000/#/friends?_k=8jyfde";
		    //      this.context.history.pushState(null, '/mainAppWin');
		   //     }
		 //   }.bind(this));
		     },


			 handleClick: function(event) {

		if("email" == event.target.id)
		{
			this.setState({email: event.target.value});
		}
		else if("passwordField" == event.target.id)
		{
			this.setState({passwordField: event.target.value});
		}
		 console.log(event.target.id);
       console.log("clicked!");
    },
		render: function(){
			return(
				React.createElement("div", null,
				React.createElement("div", null, React.createElement("span", {id: "errorDiv", className: "errorDiv"})),
				React.createElement("form", {id: "reg", name: "reg"},
					React.createElement("input", {type: "hidden", name: "lsd", value: "AVrbhDJG", autoComplete: "off"}),
					React.createElement("div", {id: "reg_form_box", className: "large_form"},
						React.createElement("div", {className: "clearfix _58mh"},

						React.createElement("div", {className: "mbm"},
							React.createElement("div", {className: "_5dbb", id: "u_0_e"},
								React.createElement("div", {className: "uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"},
									React.createElement("div", {className: "placeholder", "aria-hidden": "true"}, "Email"),
									React.createElement("input", {
									required: true,
									value: this.state.emailText,
									onChange: this.handleClick,
									type: "email",
									className: "inputtext _58mg _5dba _2ph-",
									"data-type": "text",
									name: "reg_email__",
									"aria-required": "1",
									placeholder: "",
									id: "email",
									"aria-label": "Email"})
								),
								React.createElement("i", {className: "_5dbc img sp_7XMX65Pq0E7 sx_ee768b"}), React.createElement("i", {className: "_5dbd img sp_7XMX65Pq0E7 sx_067138"})
							)
						),
						React.createElement("div", {className: "mbm"},
							React.createElement("div", {className: "_5dbb", id: "u_0_j"},
								React.createElement("div", {className: "uiStickyPlaceholderInput uiStickyPlaceholderEmptyInput"},
									React.createElement("div", {className: "placeholder", "aria-hidden": "true"}, "Password"),
									React.createElement("input", {
									required: true,
									value: this.state.passwordText,
									onChange: this.handleClick,
									type: "password",
									className: "inputtext _58mg _5dba _2ph-",
									"data-type": "text",
									name: "reg_passwd__",
									"aria-required": "1",
									placeholder: "",
									id: "passwordField",
									"aria-label": "Password"})
								),
								React.createElement("i", {className: "_5dbc img sp_7XMX65Pq0E7 sx_ee768b"}), React.createElement("i", {className: "_5dbd img sp_7XMX65Pq0E7 sx_067138"})
							)
						),
						React.createElement("div", null,
	                  React.createElement("button", {
	                  onClick: this.handleClick,
	                  id: "Login",
	                  className: "btn btn-primary btn-lg active"}, "Login")
	                )
					)
					)
				))
				);
		}
	});

	module.exports = Searched

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map

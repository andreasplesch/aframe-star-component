/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	if (typeof AFRAME === 'undefined') {
	  throw new Error('Component attempted to register before AFRAME was available.');
	}
	//require('aframe-faceset-component');

	/**
	 * Example component for A-Frame.
	 */
	AFRAME.registerComponent('star', {
	  schema: {
			dependencies: ['faceset'],		
	    points: {default: 3},
	    width: {default: 0.3}
	  },

	  /**
	   * Called once when component is attached. Generally for initial setup.
	   */
	  init: function () {
	    //this.el.setAttribute('faceset'); //use dependencies intead
	  
	  },

	  /**
	   * Called when component is attached and when component data changes.
	   * Generally modifies the entity based on the data.
	   */
	  update: function (oldData) {
	    var el = this.el;
	    var data = this.data;
	    var points = data.points;
	    var r = data.width;
	    //TODO make objects directly
	    //vertices
			var vts = [ new THREE.Vector3(0,0,0) ]; // add center point
			points = Math.max(2, points);
			var step = 2 * Math.PI/points;
			for (var a = 0; a < 2 * Math.PI; a += step) {
				vts.push( new THREE.Vector3( Math.cos(a), 0 , Math.sin(a) ) );
				//inner points
				vts.push( new THREE.Vector3(r*Math.cos(a+step/2), 0 , r*Math.sin(a+step/2) ) );
			}
	    //el.setAttribute('faceset','vertices', vts);
	    //faces
		  var faces = [];
			for ( var p = 0; p < points; p++) {
				//inner polygon, clockwise
				faces.push( new THREE.Face3( 1+(p*2+1)%(points*2), 0, 1+(2*p+3)%(points*2) ) );
				//faces.push( [1+(p*2+1)%(points*2), 0, 1+(2*p+3)%(points*2)].join(" ") );
				//outer points
				faces.push( new THREE.Face3( 1+(p*2+1)%(points*2), 1+(2*p+3)%(points*2), 1+(2*p+2)%(points*2) ) );
				//faces.push( [1+(p*2+1)%(points*2), 1+(2*p+3)%(points*2), 1+(2*p+2)%(points*2)].join(" ") );

			}
			//el.setAttribute('faceset','triangles', faces.join(", "));
			el.setAttribute('faceset', { triangles: faces, vertices: vts } );
			
	  },

	  /**
	   * Called when a component is removed (e.g., via removeAttribute).
	   * Generally undoes all modifications to the entity.
	   */
	  remove: function () { this.el.removeAttribute('faceset'); }

	});



	var getMeshMixin = __webpack_require__(1);

	AFRAME.registerPrimitive('a-star', AFRAME.utils.extendDeep({}, getMeshMixin(), {
	  defaultAttributes: {
	    star: {
				points: 3,
				width: 0.3
			}
	  },

	  mappings: {
	    points: 'star.points',
			width: 'star.width'
	  },
	  
	}));  




/***/ },
/* 1 */
/***/ function(module, exports) {

	/**
	 * Common mesh defaults, mappings, and transforms.
	 */
	module.exports = function getMeshMixin () {
	  return {
	    defaultAttributes: {
	      material: { }
	    },

	    mappings: {
	      color: 'material.color',
	      metalness: 'material.metalness',
	      opacity: 'material.opacity',
	      repeat: 'material.repeat',
	      roughness: 'material.roughness',
	      shader: 'material.shader',
	      side: 'material.side',
	      src: 'material.src',
	      transparent: 'material.transparent'
	    },

	    transforms: {
	      src: function (value) {
	        // Selector.
	        if (value[0] === '#') { return value; }
	        // Inline url().
	        return 'url(' + value + ')';
	      }
	    }
	  };
	};


/***/ }
/******/ ]);
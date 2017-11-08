/**
 * core.js
 * 
 * Namespace: CORE
 *  
 * Thanks to Kenneth Truyers for his idea of how to implement namespaces in  javascript
 * 
 * @author https://www.kenneth-truyers.net/about-kenneth-truyers/
 * @see https://www.kenneth-truyers.net/2013/04/27/javascript-namespaces-and-modules/
 */

// create the root namespace and making sure we're not overwriting it
var CORE = CORE || {};

// create a general purpose namespace method
// this will allow us to create namespace a bit easier
CORE.createNS = function(namespace) {

    var nsparts = namespace.split(".");
    var parent = CORE;

    // we want to be able to include or exclude the root namespace
    // So we strip it if it's in the namespace
    if (nsparts[0] === "CORE") {
        nsparts = nsparts.slice(1);
    }

    // loop through the parts and create
    // a nested namespace if necessary
    for (var i = 0; i < nsparts.length; i++) {
        var partname = nsparts[i];
        // check if the current parent already has
        // the namespace declared, if not create it
        if (typeof parent[partname] === "undefined") {
            parent[partname] = {};
        }
        // get a reference to the deepest element
        // in the hierarchy so far
        parent = parent[partname];
    }
    // the parent is now completely constructed
    // with empty namespaces and can be used.
    return parent;
};

// Create the APPS root namespace
var APPS = APPS || {};

APPS.createNS = function(namespace) {

    var nsparts = namespace.split(".");
    var parent = APPS;

    if (nsparts[0] === "APPS") {
        nsparts = nsparts.slice(1);
    }

    for (var i = 0; i < nsparts.length; i++) {
        var partname = nsparts[i];

        if (typeof parent[partname] === "undefined") {
            parent[partname] = {};
        }
        parent = parent[partname];
    }

    return parent; 
};
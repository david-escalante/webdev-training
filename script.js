/**
 * Created by mike-mac on 6/28/14.
 * maikol.guzman@avantica.net
 * Representation of a Module Pattern
 * More Info: http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
 */


// Export Representation
var moduleAlert = (function () {
    var my = {},
        privateVariable = 'Avantica Technologies';

    function privateMethod() {
        alert("This is the variable: " + privateVariable);
    }

    my.moduleProperty = 1;
    my.moduleMethod = function () {
        privateMethod();
    };

    return my;
}());

// Export Representation with Global
var moduleAlertGlobal = (function ($) {
    var my = {};

    function privateMethod() {
        innerVariable = $('#theText').text();

        alert("This is the variable: "+ innerVariable);
    }

    my.moduleProperty = 1;
    my.moduleMethod = function () {
        privateMethod();
    };

    return my;
}(jQuery));


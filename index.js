define(function(require, exports, module) {
    require("./fields/oup-ckeditor-field.js");
    
    // import here all extra plugins JS files
    require("./plugins/ouphello/plugin.js");
    
    var Helper = require("./plugins/helper.js");
    // register here using below functionCall
    Helper.registerPlugin("ouphello");
});

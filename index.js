define(function(require, exports, module) {
    require("./fields/oup-ckeditor-field.js");
    
    
    // import here all extra plugins JS files
    var plugin = require("./plugins/plugin.js");
    
    var action = require("./plugins/action.js");
    // register here using below functionCall
    plugin.generatePlugin("ouphello","ouphello",action.h4Action);
    plugin.generatePlugin("H4","H4",action.h4Action);
});

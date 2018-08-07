define(function(require, exports, module) {
    require("./fields/oup-ckeditor-field.js");
    
    
    // import here all extra plugins JS files
    require("./plugins/plugin.js");
    
    var action = require("./plugins/action.js");
    // register here using below functionCall
    helper.registerPlugin("ouphello","ouphello",action.h4Action);
    helper.registerPlugin("H4","H4",action.h4Action);
});

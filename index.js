define(function(require, exports, module) {
    require("./fields/oup-ckeditor-field.js");
    
    var plugin = require("./plugins/plugin.js");
    var action = require("./plugins/action.js");

    // register new plugin below. Pass Plugin Name, Plugin Label and Action item as parameters and put action item in action.js using
    plugin.generatePlugin("ouphello","ouphello",action.actionOUPHELLO);
    plugin.generatePlugin("H4","H4",action.actionH4);
});

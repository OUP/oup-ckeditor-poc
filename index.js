define(function (require, exports, module) {
    
    require("./plugins/bidi/plugin.js");
    // Custom plugins/buttons
    var plugin = require("./plugins/plugin.js");
    var action = require("./plugins/action.js");

    // register new plugin below. Pass Plugin Name, Plugin Label and Action item as parameters and put action item in action.js using
    plugin.generatePlugin("ouphello", "Hello", action.actionOUPHELLO);
    plugin.generatePlugin("H4", "H4", action.actionH4);

    var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];
    var pluginPath = "../../../" + moduleId + "/oup-ckeditor-poc/" + "plugins" + "/" + 'bidi' + "/";

    CKEDITOR.plugins.addExternal('bidi', pluginPath, 'plugin.js');

    
    CKEDITOR.config.extraPlugins += ',bidi';

    require("./fields/oup-ckeditor-field.js");
});
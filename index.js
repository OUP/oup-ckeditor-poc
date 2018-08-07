define(function(require, exports, module) {
    require("./fields/oup-ckeditor-field.js");
    
    // import here all extra plugins files
    require("./plugins/ouphello/plugin.js");

    var Helper = require("./plugins/ouphello/helper.js");
    var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];
    Helper.registerPlugin("ouphello", moduleId);
});

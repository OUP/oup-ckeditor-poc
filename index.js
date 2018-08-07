define(function(require, exports, module) {
    require("./fields/oup-ckeditor-field.js");
    
    // import here all extra plugins files
    require("./ouphello/plugin.js");
    require("./ouphello/icons/ouphello.png");

    var Helper = require("./ouphello/helper.js");
    var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];
    Helper.registerPlugin("ouphello", moduleId);
});

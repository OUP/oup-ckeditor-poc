define(function(require, exports, module) {
    require("./fields/oup-ckeditor-field.js");
    
    // import here all extra plugins files
    require("./plugins/ouphello/plugin.js");
    //require("./ouphello/icons/ouphello.png");

    var Helper = require("./plugins/ouphello/helper.js");
    
});

define(function(require) {
    require("./fields/oup-ckeditor-field.js");

    var Helper = require("./ouphello/helper.js");
    var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];
    Helper.registerPlugin("ouphello", moduleId);
});

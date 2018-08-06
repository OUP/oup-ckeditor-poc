define(function(require, exports, module) {

    // var CKEDITOR = require("./default.js");
    // window.CKEDITOR = CKEDITOR;
    var CKEDITOR = window.CKEDITOR;

    var Ratchet = require("ratchet/web");
    // var Directories = require("directories");

    return {
        registerPlugin: function(pluginId, moduleId)
        {
            var pluginPath = "../../../" + moduleId + "/" + pluginId + "/" + pluginId + "/";

            CKEDITOR.plugins.addExternal(pluginId, pluginPath, 'plugin.js');
            // CKEDITOR.config.customConfig = pluginPath + "../ckeditor_config.js";

            if (CKEDITOR.config.extraPlugins.length > 0) {
                CKEDITOR.config.extraPlugins += ",";
            }
            CKEDITOR.config.extraPlugins += pluginId;
        }
    };
});

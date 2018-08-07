define(function(require) {
    require("./fields/oup-ckeditor-field.js");

    
    var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];
    var pluginId = "ouphello";
    var pluginPath = "../../" + moduleId + "/" + "oup-ckeditor-poc" + "/" + pluginId + "/";

            CKEDITOR.plugins.addExternal(pluginId, pluginPath, 'plugin.js');
            // CKEDITOR.config.customConfig = pluginPath + "../ckeditor_config.js";

            if (CKEDITOR.config.extraPlugins.length > 0) {
                CKEDITOR.config.extraPlugins += ",";
            }
            CKEDITOR.config.extraPlugins += pluginId;

});

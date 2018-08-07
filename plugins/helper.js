define(function (require, exports, module) {

    var CKEDITOR = window.CKEDITOR;

    return {
        registerPlugin: function (pluginName) {
            var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];
            var pluginPath = "../../" + moduleId + "/" + "oup-ckeditor-poc" + "/" + pluginName + "/";
            
            CKEDITOR.plugins.addExternal(pluginName, pluginPath, 'plugin.js');

            if (CKEDITOR.config.extraPlugins.length > 0) {
                CKEDITOR.config.extraPlugins += ",";
            }
            CKEDITOR.config.extraPlugins += pluginName;
        }
    };
});
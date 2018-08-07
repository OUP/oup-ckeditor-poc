define(function (require, exports, module) {

    var CKEDITOR = window.CKEDITOR;

    var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];

    return {
        generatePlugin: function (pluginName, label, addCommandAction) {

            CKEDITOR.plugins.add(pluginName, {
                icons: pluginName,
                init: function (editor) {

                    editor.ui.addButton(pluginName, {
                        label: label,
                        icon: '../../../' + moduleId + '/oup-ckeditor-poc/plugins/icons/' + pluginName + '.png',
                        command: pluginName
                    });

                    editor.addCommand(pluginName, {
                        exec: function (editor) {
                            addCommandAction(editor);
                        }
                    });
                }
            });
            
            if (CKEDITOR.config.extraPlugins.length > 0) {
                CKEDITOR.config.extraPlugins += ",";
            }
            CKEDITOR.config.extraPlugins += pluginName;
        }
    };

});
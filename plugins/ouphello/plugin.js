define(function(require, exports, module) {

    /**
     * Supports configuration like this:
     *
     * {
     *     "enableLink": true,
     *     "enableAltText": true,
     *     "imagePickerType": "",
     *     "imagePickerConfig": {},
     *     "linkPickerType": "",
     *     "linkPickerConfig": {},
     *
     *     "imageClass": "",
     *     "linkClass": ""
     * }
     */

    var CKEDITOR = window.CKEDITOR;

    var pluginName = "ouphello";

    var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];

    CKEDITOR.plugins.add(pluginName, {
        icons: pluginName,
        init: function (editor) {

            // button
            editor.ui.addButton(pluginName, {
                label: 'Hello',
                icon: '../../../'+moduleId+'/oup-ckeditor-poc/plugins/'+pluginName+'/icons/'+pluginName+'.png',
                command: pluginName
            });

            editor.addCommand(pluginName, {
                exec: function (editor) {
                    editor.insertHtml("<em>Hello</em>");
                }
            });
        }
    });

})();
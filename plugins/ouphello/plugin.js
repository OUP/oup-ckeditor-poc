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

    var Ratchet = window.Ratchet;

    var CKEDITOR = window.CKEDITOR;

    var pluginName = "ouphello";

    CKEDITOR.plugins.add(pluginName, {
        icons: pluginName,
        init: function (editor) {

            // button
            editor.ui.addButton(pluginName, {
                label: 'Hello',
                icon: '../../../'+module+'/oup-ckeditor-poc/plugins/ouphello/icons/ouphello.png',
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
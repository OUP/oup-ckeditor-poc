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

    var pluginName = "H4";

    var moduleId = module.uri.match(/^.+(_modules[^\/]+)\/.*/)[1];

    CKEDITOR.plugins.add(pluginName, {
        icons: pluginName,
        init: function (editor) {

            // button
            editor.ui.addButton(pluginName, {
                label: 'H4',
                icon: '../../../'+moduleId+'/oup-ckeditor-poc/plugins/'+pluginName+'/icons/'+pluginName+'.png',
                command: pluginName
            });

            editor.addCommand(pluginName, {
                exec: function (editor) {
                    editor.insertHtml("<h4>"+editor.getSelectedHtml().getHtml()+"</h4>");
                }
            });
        }
    });

});
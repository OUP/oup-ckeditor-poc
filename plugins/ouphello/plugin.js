(function() {

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
                icon: 'https://cms-alb.primary.test.gcms.the-infra.com/_modules-9554bd7eee502f16f4ca/oup-ckeditor-poc/plugins/ouphello/icons/ouphello.png',
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
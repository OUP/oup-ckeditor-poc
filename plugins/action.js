define(function (require, exports, module) {

    return {
        actionOUPHELLO: function (editor) {
            editor.insertHtml("<em>Hello</em>");
        },
        actionH4: function (editor) {
            var newElement = new CKEDITOR.dom.element("h4");
            newElement.setText(editor.getSelection().getSelectedText());
            editor.insertElement(newElement);
        }
    };

});
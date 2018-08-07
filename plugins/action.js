define(function (require, exports, module) {

    return {
        h4Action: function (editor) {
            var newElement = new CKEDITOR.dom.element("h4");
            newElement.setText(editor.getSelection().getSelectedText());
            editor.insertElement(newElement);
        }
    };

});
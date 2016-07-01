
function Controller(model, view) {
    var self = this;
    
    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item-delete', removeItem);
    view.elements.listContainer.on('click', '.item-show', showEditItem);
    view.elements.listContainer.on('blur', '.item-edit', editItem);
    function addItem() {
        var newItem = view.elements.input.val();

        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
    }

    function removeItem() {
        var item = $(this).attr('data-value');

        model.removeItem(item);
        view.renderList(model.data);
    }
    
    function showEditItem() {
        $(this).parent().find('input').show();
        $(this).parent().find('input').focus()
        $(this).hide();
        $(this).parent().find('.item-delete').hide();
    }

    function editItem() {
        var oldValue = $(this).attr('data-value');
        var newValue = $(this).val();
        model.editItem(oldValue,newValue);
        $(this).parent().find('.item-show').show();
        $(this).hide();
        $(this).parent().find('.item-delete').show();
        view.renderList(model.data);
    }
}


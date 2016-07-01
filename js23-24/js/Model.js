function Model(data) {
    var self = this;

    self.data = data;

    self.addItem = function (item) {
        if (item.length === 0) {
            return;
        }

        self.data.push(item);

        return self.data;
    };

    self.removeItem = function (item) {
        var index = self.data.indexOf(item);

        if (index === -1) {
            return;
        }
        self.data.splice(index, 1);

        return self.data;
    };

    self.editItem = function (oldValue, newValue) {
        var index = self.data.indexOf(oldValue);

        if (index === -1) {
            return;
        }

        self.data[index]=newValue;

        return self.data;
    };
}


$(function () {
    var firstToDoList = ['Finish locale storage article', 'Mow the law', 'Save the world'];
    var model = new Model(firstToDoList);
    var view = new View(model);
    var controller = new Controller(model, view);
});
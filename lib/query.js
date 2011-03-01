function Query() {
    this.query = {query:{}};
}

module.exports = Query;

Query.prototype.addField = function addField(name, field) {
    if (!(this.query.query.field)) {
        this.query.query.field = {};
    }
    this.query.query.field[name] = field;

    return this;
}
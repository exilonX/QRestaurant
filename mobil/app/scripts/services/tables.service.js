/**
 * Created by ionelmerca on 20.10.2015.
 */
app.factory('Tables', function() {
  var tables = [];
  var toEmit = [];

  var emitUpdate = function() {
    for(var em in toEmit) {
      toEmit[em].$emit('tables:update', tables);
    }
  }

  return {
    pushTable : function(table) {
      tables.push(table);
      emitUpdate();
    },
    popTable : function(table) {
      var index = tables.indexOf(table);
      if (index > -1) {
        tables.splice(index, 1);
        emitUpdate();
        return 1;
      }
      return 0;
    },
    getTables : function() {
      return tables;
    },
    registerUpdate : function(name, scope) {
      toEmit[name] = scope;
    }

  }
  });
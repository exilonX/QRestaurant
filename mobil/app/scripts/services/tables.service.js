/**
 * Created by ionelmerca on 20.10.2015.
 */
app.factory('Tables', function() {
    var tables = [];


    return {
      pushTable : function(table) {
        tables.push(table);
      },
      popTable : function(table) {
        var index = tables.indexOf(table);
        if (index > -1) {
          tables.splice(index, 1);
          return 1;
        }
        return 0;
      },
      getTables : function() {
        return tables;
      }

    }
  });
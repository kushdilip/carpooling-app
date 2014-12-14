import DS from 'ember-data';

var Car = DS.Model.extend({
  name: DS.attr('string'),
  capacity: DS.attr('number'),
  occupied: DS.attr('number'),
  source: DS.belongsTo('location'),
  dest: DS.belongsTo('location'),
  ownerid: DS.belongsTo('user',{inverse: null}),
  starttime: DS.attr('string')
});

export default Car;

//import DS from 'ember-data';

//export default DS.Model.extend({
 //name: DS.attr()
//});
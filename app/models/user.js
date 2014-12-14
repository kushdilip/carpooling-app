import DS from 'ember-data';

var User = DS.Model.extend({
  name: DS.attr('string'),
  carid: DS.belongsTo('car')
});


export default User;
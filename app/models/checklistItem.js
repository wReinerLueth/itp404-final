import DS from 'ember-data';

export default DS.Model.extend({
    instruction: DS.attr('string'),
    time: DS.attr('string')
});

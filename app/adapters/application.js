import DS from 'ember-data';
import config from 'final/config/environment';

export default DS.RESTAdapter.extend({
    host: config.apiHost,
    namespace: 'api'
});

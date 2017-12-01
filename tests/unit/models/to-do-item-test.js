import { moduleForModel, test } from 'ember-qunit';

moduleForModel('to-do-item', 'Unit | Model | to do item', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});

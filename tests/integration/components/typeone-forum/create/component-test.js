import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('typeone-forum/create', 'Integration | Component | typeone forum/create', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{typeone-forum/create}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#typeone-forum/create}}
      template block text
    {{/typeone-forum/create}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

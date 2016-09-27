import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('typeone-forum/comment-structure', 'Integration | Component | typeone forum/comment structure', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{typeone-forum/comment-structure}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#typeone-forum/comment-structure}}
      template block text
    {{/typeone-forum/comment-structure}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

import ApplicationAdapter from 'ember-typeone/application/adapter';

export default ApplicationAdapter.extend({
  // record is data
  createRecord (store, type, record) {
    let api = this.get('host');
    // serialize method takes record and turns to json
    let serialized = this.serialize(record, {includeId: true });
    let postId = serialized.post_id;
    let url = `${api}/posts/${postId}/comments`;
    let data = { comment: serialized };

    return this.ajax(url, 'POST', { data });
  },
});

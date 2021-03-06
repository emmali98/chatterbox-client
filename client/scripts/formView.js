var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    let data = $('#message');
    let text = data[0].value;
    let roomname = _.escape($('select').val());

    console.log('i am the roomname: ', roomname);
    // Build message object from event data
    var message = Messages.make(App.username, text, roomname);
    Parse.create(message, () => { App.fetch(); }, (e) => { console.log(e); });
    data[0].value = '';
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};

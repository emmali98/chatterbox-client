var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
    // iterate over data.results.length
    for (var i = 0; i < data.results.length; i++) {
      if (data.results[i].username && data.results[i].text) {
        // data.results[i].text = _.escape(data.results[i].text);
        var message = MessageView.render(data.results[i]);
        MessagesView.$chats.append(message);
      }
    }
    // var message = call messageView.render on each object in data.results
    // append message to $chats
  }

};
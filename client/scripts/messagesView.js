var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    $('#refresh').on('click', () => {
      App.fetch();
      console.log('click!');
    });

    MessagesView.$chats.on('click', (event) => {
      if (event.target.classList.contains('username')) {
        var username = event.target.innerText;
        Friends.toggleStatus(username);
      }
    });
  },

  render: function(data) {
    // debugger;
    // iterate over data.results.length
    $('#chats').html('');
    // console.log('inside render function..');
    for (var i = 0; i < data.results.length; i++) {
      if (data.results[i].username && data.results[i].text) {
        data.results[i].text = _.escape(data.results[i].text);
        data.results[i].username = _.escape(data.results[i].username);
        data.results[i].roomname = _.escape(data.results[i].roomname);

        if (Friends.friendsList.includes(data.results[i].username)) {
          var message = MessageView.renderFriend(data.results[i]);
        } else {
          var message = MessageView.render(data.results[i]);
        }
        MessagesView.$chats.append(message);
      }
    }
  },

  renderMessage: function(message) {
    $('#chats').html('');
    message.text = _.escape(message.text);
    message.username = _.escape(message.username);
    message.roomname = _.escape(message.roomname);
    var messageHTML = MessageView.render(message);
    MessagesView.$chats.prepend(messageHTML);
  }

};
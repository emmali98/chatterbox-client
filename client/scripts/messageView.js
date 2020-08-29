var MessageView = {

  render: _.template(`
      <div class="chat">
        <div class="username"><%= username %></div>
        <div><%= text %></div>
      </div>
    `)

};

// MessageView.render({username: 'harsh', text: 'hello!'});
// returns 'div class etc..... harsh
var Messages = {

  make: function(username, text, roomname = 'lobby') {
    return {username: username, text: text, roomname: roomname};
  }

};
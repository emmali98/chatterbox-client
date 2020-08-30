var Rooms = {
  make: function(roomname) {
    return {roomname: roomname};
  },

  add: function() {
    // grab the string in the text field
    var newRoom = _.escape($('#newRoom').val());
    console.log(newRoom);
    // element.addClass('hidden'); <-- to hide
    $('#newRoom').addClass('hidden');
    $('#go').addClass('hidden');
    // add new roomname to dropdown (RoomsView.renderRoom)
    // RoomsView.renderRoom(newRoom);
    // send default message 'room created' to server
    var message = Messages.make(App.username, `${newRoom} created`, newRoom);
    Parse.create(message, () => { App.fetch(); });
    // re-render messages + rooms
    $('#newRoom').val('');
  }

};
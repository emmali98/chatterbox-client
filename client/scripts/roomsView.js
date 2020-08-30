var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    $('select').on('click', (event) => {
      // console.log(event.target.value);
      Parse.readAll((data) => {
        RoomsView.filterRoom(event.target.value, data);
      });
    });

    $('#addRoom').on('click', () => {
      $('.hidden').removeClass('hidden');
    });

    $('#go').on('click', () => {
      Rooms.add();
    });
  },

  render: function(data) {
    var roomNames = new Set();
    for (var i = 0; i < data.results.length; i++) {
      var roomname = _.escape(data.results[i].roomname);
      if ((roomname === undefined) || (roomname === '')) {
        roomNames.add('lobby');
      } else {
        roomNames.add(roomname);
      }
    }
    $('select').html('');
    for (let roomname of roomNames) {
      RoomsView.renderRoom(roomname);
    }
  },

  renderRoom: function(string) {
    var template = _.template(`
    <option value="<%= roomname %>"><%= roomname %></option>
    `);

    var room = Rooms.make(string);

    $('select').append(template(room));
  },

  filterRoom: function(nameToSelect, data) {
    let filteredData = _.filter(data.results, (val) => {
      return val.roomname === nameToSelect;
    });
    MessagesView.render({ results: filteredData });
  }

};

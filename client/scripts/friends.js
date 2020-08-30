var Friends = {

  friendsList: [],

  toggleStatus: function(username) {
    Friends.friendsList.push(username);

    App.fetch();
  }

};
const users = [];

module.exports.addUser = ({ id, username, room }) => {
  // Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate the data
  if (!username || !room) {
    return {
      error: "Username and room must be provided!",
    };
  }

  //Checking for existing user in a Room
  const existingUser = users.find((user) => {
    return user.room === room && user.username === username;
  });

  // Validate existing User
  if (existingUser) {
    return {
      error: "Username is already taken!",
    };
  }

  // All validations are passed, time to store them
  const user = { id, username, room };
  users.push(user);
  return { user };
};

module.exports.removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

module.exports.getUser = (id) => {
  // returns user object if found, else undefined
  return users.find((user) => user.id === id);
};

module.exports.getUsersInRoom = (room) => {
  room = room.trim().toLowerCase();
  // returns an array of users in a room if present else an empty array
  return users.filter((user) => user.room === room);
};

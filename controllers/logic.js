var users = [];

export const addUser = ({ _id, username, isAdmin, isHost,room }) => {
    
  
    if(!username || !room) return { error: 'Username and room are required.' };
    const existingUser = users.find((user) => user.room === room && user.username === username);
    if(existingUser)
    {
      return existingUser;
    }
  
    const user = { _id, username, room,isAdmin,isHost };
  
    users.push(user);
 
  
    return user ;
  }
  
 export const removeUser = (id) => {
      
    const index = users.findIndex((user) => user.id === id);
  
    if(index !== -1) return users.splice(index, 1)[0];
  }
  
  export const getUser = (username,roomId) => users.find((user) => user.username === username && user.room === roomId);
  
  export const getUsersInRoom = (room) => users.filter((user) => user.room === room);
  // module.exports = { addUser, removeUser, getUser, getUsersInRoom };
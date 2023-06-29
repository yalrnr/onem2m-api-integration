import { v4 as uuidv4 } from 'uuid';

let users = [];
export const createUser = (req, res) => {
    const { Device, DeviceType } = req.body;
 
    users.push({ Device, DeviceType, id: uuidv4() });
    
 
    res.json(`Device with the name ${users[users.length-1].Device} added to the DATA`);
 }

 export const getUsers = (req, res) => {
      
    res.send(users);
}

export const patchUser = (req, res) => {
    const { id } = req.params;
    const{ Device, DeviceType } = req.body;
      

    const user = users.find((user) => user.id == id);

    if(Device) user.Device = Device;
    if(DeviceType) user.DeviceType = DeviceType;
   // if(age) user.age = age;

    res.send(`Device with the id ${id} has been updated`);
    
}

export const getUser = (req, res) => {

    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
}
export const deleteUser = (req, res) => {
    const { id } = req.params;
    const userToDelete = users.findIndex(users => users.id === id);

    if(userToDelete === -1){
        return res.status(404).send(`No user with ${id} is found to delete.`);
    }
    users.splice(userToDelete, 1);

    res.send(`User with the id ${id} deleted from the database.`);
}
import { v4 as uuidv4 } from 'uuid';

let users =[

];

export const getUsers = (req,res) => {
    res.send(users);
}

export const createUser = (req,res) => {
    const user = req.body;

    users.push({ ...user, id: uuidv4() });

    res.send(`User with name ${user.name} added to the database successfully!`);
}

export const getUser = (req,res) => {
    const { id } = req.params;

    const foundUser = users.find((user) => user.id === id);

    res.send(foundUser);
}

export const deleteUser = (req,res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with id ${id} deleted from the database successfully!`);
}

export const updateUser = (req,res) => {
    const { id } = req.params;
    const { name, age, city } = req.body;

    const user = users.find((user) => user.id === id);

    if(name) user.name = name;
    if(age) user.age = age;
    if(city) user.city = city;

    res.send(`User with id ${id} has been updated successfully!`);
}
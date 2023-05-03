"use strict";
const friendList = [
    'Rizbi', 'Baker',
    'Sifat', 'Saad',
    'Mahir', 'Rafikhan',
    'Saif', 'Abil'
];
const greetFriends = (...friendList) => {
    friendList.forEach(friend => {
        console.log(`hello my friend ${friend}`);
    });
};
greetFriends(...friendList);

const friendList = [
    'Rizbi', 'Baker',
    'Sifat', 'Saad',
    'Mahir', 'Rafikhan',
    'Saif',  'Abil'
  ];

const greetFriends = (...friendList : string[]): void => {
    friendList.forEach(friend => {
        console.log(`hello my friend ${friend}`);
    })
};

greetFriends(...friendList);


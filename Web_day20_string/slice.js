const address = 'dinajpur';

const part = address.slice(0,3);

console.log(part);

const sentence = 'I am a good and hardworking person.';

// console.log(sentence.split(' '));
// console.log(sentence.split('a'));

const friendsStr = 'Pollab,Mumin,Sohel,Tushar,Naim,Mahady,Shamim';
const friends = friendsStr.split(',');
console.log(friends);

const realFriend = ['Rahim', 'Karim', 'Dahim', 'Lamim'];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));
'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
const keys = Object.keys(user);
// console.log(keys);
for (const key of keys) {
  console.log(`ключ: ${key} значение - ${user[key]}`);
}

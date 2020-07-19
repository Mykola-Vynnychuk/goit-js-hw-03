const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mod = 'heppy';
user.hobby = 'skydiving';
user.premium = false;

// Не рекомендовано Репетою
// for (let key in user) {    //  може захоплювати ключі батька
//   console.log(`${key}:${user[key]}`);
// }

//  краще через масиви
const arrayUser = Object.keys(user);
for (let key of arrayUser) {
  console.log(`${key}:${user[key]}`);
}

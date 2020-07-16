const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mod = 'heppy';
user.hobby = 'skydiving';
user.premium = false;

// for (let key in user) {
//   console.log(`${key}:${user[key]}`);
// }

const arrayUser = Object.keys(user);
for (let key of arrayUser) {
  console.log(`${key}:${user[key]}`);
}

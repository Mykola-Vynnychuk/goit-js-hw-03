const buttonTaskOne = document.getElementById('task-one');
buttonTaskOne.addEventListener('click', () => {
  const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  user.mod = 'heppy';
  user.hobby = 'skydiving';
  user.premium = false;
  const arrayUser = Object.keys(user);
  for (let key of arrayUser) {
    console.log(`${key}: ${user[key]}`);
  }
});

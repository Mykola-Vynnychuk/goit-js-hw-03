const buttonTaskTree = document.getElementById('task-tree');
buttonTaskTree.addEventListener('click', () => {
  const findBestEmployee = function (employees) {
    const arrayKeysEmployees = Object.entries(employees);
    let bestValue = 0;
    let bestKey;
    for (let key of arrayKeysEmployees) {
      if (key[1] > bestValue) {
        bestValue = key[1];
        bestKey = key[0];
      }
    }
    return bestKey;
  };

  /*
   * Викличи функції для перевірки працездатності твоєї реалізації.
   */
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence

  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango

  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux
});

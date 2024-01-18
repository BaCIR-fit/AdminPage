import { forEach } from 'lodash';
import axios from 'axios';

const users = [];

axios.get('https://apibacir.fly.dev/admin/getAllUsers/100', {
  headers: {
    'x-api-key': 'testtest'
  }
})
  .then(response => {

    const usersData = response.data.data;
    forEach(usersData, user => {
      user.id = user._id;
      user.avatarUrl = ``;
      user.nom = user.last_name;
      user.prenom = user.first_name;
      user.dateNaissance = new Date(user.birth_date).toLocaleDateString("fr");
      user.mail = user.email;
      user.sexe = user.gender;

      users.push(user); // Push each user object into the users array
    });
  })
  .catch(error => {
    console.error(error);
  });

// console.log(users);

export { users };

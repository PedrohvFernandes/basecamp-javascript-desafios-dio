const MY_MAP = new Map();

MY_MAP.set("Luis", "Admin");
MY_MAP.set("Luan", "Admin");
MY_MAP.set("Bernardo", "Admin");
MY_MAP.set("Pedro", "Diretor");
MY_MAP.set("Lucas", "CEO");
MY_MAP.set("Rodrigo", "Funcionario");

const getAdmins = (map) => {
  let admins = [];

  for ([key, value] of map) {
    if (value === "Admin") {
      admins.push(key);
    }
  }
  return admins;
};

console.log(getAdmins(MY_MAP));

// Resposta:

const getAdmins = (map) => {
	let admins = [];

	for ([key, value] of map) {
		if (value === 'ADMIN') {
			admins.push(key);
		}
	}

	return admins;
};

const userRoles = new Map();

userRoles.set('Stephany', 'SUDO');
userRoles.set('Luiz', 'ADMIN');
userRoles.set('Elvira', 'ADMIN');
userRoles.set('Carolina', 'USER');
userRoles.set('Guilherme', 'USER');

console.log(getAdmins(userRoles));
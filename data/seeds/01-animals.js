
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('animals').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('animals').insert([
        { dogs: "pitbull", cats: "black", birds: "parrot" },
        { dogs: "terrier", cats: "persian", birds: "cockatoo" },
        { dogs: "shitzu", cats: "tabby", birds: "pigeon" },
      ]);
    });
};

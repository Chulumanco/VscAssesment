// Question1:
// Create a data model for a data object which will store all the people belonging to the church.
// It needs to include fields for the name, surname, birthday, telephone number and if they are still alive.


  "use strict"
  class ChurchPeople{
    constructor(id, name, surname,birthday,telephone, status){
      this.id = id;
      this.name = name;
      this.surname = surname;
      this.birthday = birthday;
      this.status = status;
    }
      toString() {
        return `ChurchPeople.${this.status}`;
    }
}
ChurchPeople.dead = new ChurchPeople('dead');
ChurchPeople.alive = new ChurchPeople('alive');

// Question2:
// Two people can be married to each other.
// What changes to the data object would you do to indicate that two people are married?

class Married extends ChurchPeople{
  constructor(id, name, surname,birthday,telephone, status,married){
    super(id, name, surname,birthday,telephone)
    this.married=married
  }
    toString() {
      return `ChurchPeople.${this.status}`;
    
  }
}
ChurchPeople.dead = new ChurchPeople('dead');
ChurchPeople.alive = new ChurchPeople('alive');

// Question3:
// People can have children who also belongs to the church.
// What changes would you make to the data model to store children and show their relationship to people.
class Married extends ChurchPeople{
  constructor(id, name, surname,birthday,telephone, status,children){
    super(id, name, surname,birthday,telephone)
    this.children=children
  }
    toString() {
      return `ChurchPeople.${this.status}`;
    
  }
}
ChurchPeople.dead = new ChurchPeople('dead');
ChurchPeople.alive = new ChurchPeople('alive');
// Question4
// What logic would you use in order to determine how many of the people belonging to the church are parents.

// Question5
// What logic would you use to determine how many single parents there are with children under the age of 10.


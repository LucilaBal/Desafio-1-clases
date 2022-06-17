class User{
	constructor(name, lastName, books, pets){
		this.name = name;
		this.lastName = lastName;
		this.books = books;
		this.pets = pets;
	}


	getFullName() {
    	console.log(`Hola!! me llamo ${this.name} y mi apellido es ${this.lastName}`);
	}

	addPets( newPet ){
       	this.pets.push( newPet );
	}

	countPets(){
        console.log(this.pets.length);
	}

	addBook(title, autor){
        this.books.push( {title: title, autor:autor} );
	}

 	getBookNames(){
        const bookNames = this.books.map( book => {
            return book.title
        } )
        console.log(bookNames);
    }
}


const user = new User ("Lucila", "Balducci",
[{title: "Don Quijote de la mancha", autor: "Miguel De Cervantes"},
{title: "El  cuervo", autor: "Edgar Allan Poe"}],
["Perro", "Gato"]);

user.getFullName();
user.addPets("Loro");
user.countPets();
user.addBook("Cien años de soledad","Gabriel García Márquez");
user.getBookNames();
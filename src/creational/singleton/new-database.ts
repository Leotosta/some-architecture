export interface User {
    name: string;
    age: number;
}

export class MyDatabaseClassic {
	private static _instance: MyDatabaseClassic | null = null;
	private users: User[] = [];

	private constructor() {}

	static get instance(): MyDatabaseClassic {
		if(MyDatabaseClassic._instance === null){
			MyDatabaseClassic._instance = new MyDatabaseClassic();
		}

		return MyDatabaseClassic._instance;
	}

	add(user: User) {
		this.users.push(user);
	}

	remove(index: number) {
		this.users.splice(index, 1);
	}

	show() {
		for(const user of this.users) {
			console.log(user);
		} 
	}

}


const db1 = MyDatabaseClassic.instance;
const db2 = MyDatabaseClassic.instance;

console.log(db1 === db2);

db1.add({name: 'leo', age: 2});
db1.add({name: 'bruno', age: 2});
db1.add({name: 'roberto', age: 2});



export default db1;
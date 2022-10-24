enum Role { ADMIN, READ_ONLY, AUTHOR }

const person = {
    name: "Max",
    age: 30,
    hobbies : ['Sports', 'Cooking'],
    role: Role.ADMIN
};

let favoriteActivities: any[];
favoriteActivities = ['Sports'];

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}

if (person.role === Role.AUTHOR){
    console.log('is author');
}

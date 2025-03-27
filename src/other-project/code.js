const students = [

    {
        fullName: "Jane",
        email: "jane@doe.com",
    },

    {
        fullName: "John",
        email: "john@doe.com",
    },

    {
        fullName: "Juba",
        email: "juba@doe.com",
    },

    {
        fullName: "gio",
        email: "gio@doe.com",
    },

    {
        fullName: "luka",
        email: "luka@doe.com",
    },

];

console.log(students);

students.forEach(element => {
    element.point = Math.floor(Math.random() * 100);
});

const updatedStudents = [...students];

console.log(updatedStudents);






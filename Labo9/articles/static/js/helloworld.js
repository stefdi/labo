// ====== Данные ======
const groupmates = [
    {
        "name": "Василий",
        "group": "912-2",
        "age": 19,
        "marks": [4, 3, 5, 5, 4]
    },
    {
        "name": "Анна",
        "group": "912-1",
        "age": 18,
        "marks": [3, 2, 3, 4, 3]
    },
    {
        "name": "Георгий",
        "group": "912-2",
        "age": 19,
        "marks": [3, 5, 4, 3, 5]
    },
    {
        "name": "Валентина",
        "group": "912-1",
        "age": 18,
        "marks": [5, 5, 5, 4, 5]
    }
];

console.log(groupmates);

// ====== Утилита выравнивания ======
const rpad = (str, length) => {
    str = str.toString();
    while (str.length < length) str = str + ' ';
    return str;
};

// ====== Печать таблицы ======
const printStudents = (students) => {
    console.log(
        rpad("Имя студента", 15),
        rpad("Группа", 8),
        rpad("Возраст", 8),
        rpad("Оценки", 20)
    );

    students.forEach(student => {
        console.log(
            rpad(student.name, 15),
            rpad(student.group, 8),
            rpad(student.age, 8),
            rpad(student.marks.join(", "), 20)
        );
    });
    console.log("\n");
};

printStudents(groupmates);

// ====== ЗАДАНИЕ: фильтр по группе ======
const filterByGroup = (students, groupName) => {
    return students.filter(student => student.group === groupName);
};

// Пример использования
const only912_2 = filterByGroup(groupmates, "912-2");
console.log("Студенты группы 912-2:");
printStudents(only912_2);
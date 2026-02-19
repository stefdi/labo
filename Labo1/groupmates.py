groupmates = [
    {
        "name": "Василий",
        "group": "912-2",
        "age": 19,
        "marks": [4, 3, 5, 5, 4],
    },
    {
        "name": "Анна",
        "group": "912-1",
        "age": 18,
        "marks": [3, 2, 3, 4, 3],
    },
    {
        "name": "Георгий",
        "group": "912-2",
        "age": 19,
        "marks": [3, 5, 4, 3, 5],
    },
    {
        "name": "Валентина",
        "group": "912-1",
        "age": 18,
        "marks": [5, 5, 5, 4, 5],
    },
    {
        "name": "Ирина",
        "group": "913-1",
        "age": 20,
        "marks": [4, 4, 4, 5, 4],
    },
]


def print_students(students: list[dict]) -> None:
    print("Имя студента".ljust(15),
          "Группа".ljust(8),
          "Возраст".ljust(8),
          "Оценки".ljust(20))

    for student in students:
        print(str(student["name"]).ljust(15),
              str(student["group"]).ljust(8),
              str(student["age"]).ljust(8),
              str(student["marks"]).ljust(20))
    print()


def filter_students_by_avg_mark(students: list[dict], min_avg: float) -> list[dict]:
    result = []
    for student in students:
        marks = student.get("marks") or []
        if not marks:
            continue
        avg = sum(marks) / len(marks)
        if avg > min_avg:
            result.append(student)
    return result


if __name__ == "__main__":
    print_students(groupmates)

    filtered = filter_students_by_avg_mark(groupmates, 4.0)
    print_students(filtered)
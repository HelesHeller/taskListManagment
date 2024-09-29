// Функция для добавления новой задачи
const addTask = (title: string, description: string): void => {
    const newTask: Task = {
        id: taskIdCounter++,
        title,
        description,
        completed: false,
    };

    tasks.push(newTask);
    console.log(`Задача "${title}" добавлена.`);
};

// Функция для удаления задачи
const removeTask = (id: number): void => {
    tasks = tasks.filter(task => task.id !== id);
    console.log(`Задача с ID ${id} удалена.`);
};

// Функция для отметки задачи как выполненной
const markTaskAsCompleted = (id: number): void => {
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = true;
        console.log(`Задача с ID ${id} отмечена как выполненная.`);
    } else {
        console.log(`Задача с ID ${id} не найдена.`);
    }
};

// Функция для вывода всех задач
const listTasks = (): void => {
    console.log("Список всех задач:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Название: ${task.title}, Выполнена: ${task.completed}`);
    });
};

// Функция для вывода выполненных задач
const listCompletedTasks = (): void => {
    console.log("Выполненные задачи:");
    tasks.filter(task => task.completed).forEach(task => {
        console.log(`ID: ${task.id}, Название: ${task.title}`);
    });
};

// Функция для вывода невыполненных задач
const listPendingTasks = (): void => {
    console.log("Невыполненные задачи:");
    tasks.filter(task => !task.completed).forEach(task => {
        console.log(`ID: ${task.id}, Название: ${task.title}`);
    });
};

// Тестирование функциональности

addTask("Купить продукты", "Купить хлеб и молоко");
addTask("Закончить проект", "Завершить проект по TypeScript");

listTasks();

markTaskAsCompleted(1);

listTasks();

removeTask(0);

listTasks();

listCompletedTasks();
listPendingTasks();

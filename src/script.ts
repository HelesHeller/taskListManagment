// Описываю тип задачи. Тут будет ID, название, описание и статус, выполнена она или нет.
type Task = {
    id: number;
    title: string;
    description: string;
    completed: boolean;
};

// Здесь будут храниться все задачи в виде массива
let tasks: Task[] = [];

// Уникальный ID для каждой задачи, чтобы было легче управлять
let taskIdCounter = 0;

// Добавляю новую задачу в список задач
const addTask = (title: string, description: string): void => {
    // Каждой новой задаче присваивается уникальный ID и она по умолчанию невыполнена
    const newTask: Task = {
        id: taskIdCounter++,
        title: title,
        description: description,
        completed: false,
    };
    tasks.push(newTask); // Добавляю в массив задач
    console.log(`Задача "${title}" добавлена в список`);
};

// Удаляю задачу по её ID
const removeTask = (id: number): void => {
    // Оставляю только те задачи, ID которых не совпадает с тем, что нужно удалить
    tasks = tasks.filter(task => task.id !== id);
    console.log(`Задача с ID ${id} удалена`);
};

// Отмечаю задачу как выполненную
const markTaskAsCompleted = (id: number): void => {
    // Ищу задачу по ID, и если нахожу - отмечаю её как выполненную
    const task = tasks.find(task => task.id === id);
    if (task) {
        task.completed = true;
        console.log(`Задача с ID ${id} отмечена как выполненная`);
    } else {
        console.log(`Задача с ID ${id} не найдена`);
    }
};

// Вывожу список всех задач, чтобы видеть что вообще есть
const listTasks = (): void => {
    console.log("Текущий список задач:");
    tasks.forEach(task => {
        console.log(`ID: ${task.id}, Название: ${task.title}, Выполнена: ${task.completed}`);
    });
};

// Вывожу только выполненные задачи
const listCompletedTasks = (): void => {
    console.log("Выполненные задачи:");
    tasks.filter(task => task.completed).forEach(task => {
        console.log(`ID: ${task.id}, Название: ${task.title}`);
    });
};

// Вывожу невыполненные задачи, чтобы понимать, что ещё нужно сделать
const listPendingTasks = (): void => {
    console.log("Невыполненные задачи:");
    tasks.filter(task => !task.completed).forEach(task => {
        console.log(`ID: ${task.id}, Название: ${task.title}`);
    });
};

// Тестирую функционал:

// Добавляю пару задач
addTask("Купить продукты", "Купить хлеб и молоко");
addTask("Закончить проект", "Завершить проект по TypeScript");

// Вывожу все задачи для проверки
listTasks();

// Отмечаю одну задачу как выполненную
markTaskAsCompleted(1);

// Снова вывожу все задачи, чтобы проверить статус
listTasks();

// Удаляю задачу
removeTask(0);

// Вывожу задачи после удаления, чтобы убедиться, что всё работает
listTasks();

// Показываю выполненные задачи
listCompletedTasks();

// Показываю невыполненные задачи
listPendingTasks();

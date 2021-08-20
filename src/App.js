import './App.css';
import Form from "./components/Form";
import Cars from "./components/cars/Cars";

function App() {
  return (
    <div>
      <Form/>
        <Cars/>
    </div>
  );
}
export default App;
//
// GET  http://<IP>/api/v1/cars получить массив всех машин
//
// POST http://<IP>/api/v1/cars записать новую машину в базу данных (обратите внимание что метод post, а не get нужно будет указывать в httpClient)
//     Валидация:
// model максимальная длина 20 символов
// price минимум 0
// year мин 1990 мах 2021
//
// у вас должна быть форма для добавления машинки, и под ней должен быть адекватный вывод всех машин
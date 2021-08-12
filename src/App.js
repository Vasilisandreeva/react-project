import './App.css';
import Users from "./components/users/Users";

function App() {
  return (
    <div>{
      <Users/>
    }
    </div>
  );
}

export default App;

// // https://jsonplaceholder.typicode.com/
// 2
// - Коротко : отримати всі пости з плейсхолдеру, та відтворити на сторіці
//
// створити сервіс (post.service.js) роботи  з post сутностями  з jsonplaceholer (getPosts(),getPost(id)).
//     Використати fetch / axios на вибір
// Створити компонент Posts
// На  рівні Posts, за допомоги відповідного сервісу,  отримати всі данні та вивести їх використовуючи відповідні компоненти
// Створити компонент Post який характеризує окремий об'єкт з масиву.
// Ієрархія компонентів :
//     App-Posts->Post
//
// 3
// - Коротко : отримати всі пости з плейсхолдеру, та відтворити на сторіці
//
// створити сервіс (comment.service.js) роботи  з comment сутностями  з jsonplaceholer (getComments(),getComment(id)).
//     Використати fetch / axios на вибір
// Створити компонент Comments
// На  рівні Comment, за допомоги відповідного сервісу,  отримати всі данні та вивести їх використовуючи відповідні компоненти
// Створити компонент Comment який характеризує окремий об'єкт з масиву.
// Ієрархія компонентів :
//     App-Comments->Comment

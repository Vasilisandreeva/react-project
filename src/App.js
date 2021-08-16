import './App.css';
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div>
      <Users/>
        <hr/>
      <Posts/>
        <hr/>
        <Comments/>
    </div>
  );
}

export default App;

// - Коротко : отримати всі пости з плейсхолдеру, та відтворити на сторіці
//
//
// створити сервіс (comment.service.js) роботи  з comment сутностями  з jsonplaceholer (getComments(),getComment(id)).
//     Використати fetch / axios на вибір
// Створити компонент Comments
// На  рівні Comment, за допомоги відповідного сервісу,  отримати всі данні та вивести їх використовуючи відповідні компоненти
// Створити компонент Comment який характеризує окремий об'єкт з масиву.
// Ієрархія компонентів :
//     App-Comments->Comment
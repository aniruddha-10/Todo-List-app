import React, { useState,useEffect } from "react";

const todos = () => {
    const [todos,setTodos] = useState([])
    useEffect(() => {
      let todos = localStorage.getItem("todos")
      setTodos(JSON.parse(todos))
    },[])
    
    const deleteTodo = (title) => {
        let newTodos = todos.filter(item => {
            return item.title != title
        })
        localStorage.setItem("todos",JSON.stringify(newTodos))
        setTodos(newTodos)
    }

  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center mb-20 dark:text-white">
          <h1 class="text-5xl font-medium title-font mb-4 text-gray-900 pt-10 dark:text-white">
            Your Todos
          </h1>
          {todos.length==0 && <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Your Todos will show up here...
          </p>}
        </div>
        <div class="flex items-center justify-center h-367pt -m-4">
          {todos.map((item) => {
            return (
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img
                    alt="team"
                    class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={`https://picsum.photos/600/900?a=${item.title}`}
                  />
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-gray-900 dark:text-white">
                      {item.title}
                    </h2>
                    <p class="mb-4 dark:text-white">{item.desc}</p>
                    <span class="inline-flex">
                      <a class="text-gray-500 cursor-pointer" onClick={ () => {deleteTodo(item.title)}}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24px"
                          height="24px"
                        >
                          <path d="M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default todos;

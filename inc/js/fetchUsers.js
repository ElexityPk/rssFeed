const users = [
  {
    name: "Abdul Wahab",
    age: 34,
    city: "Lahore",
  },
  {
    name: "Abdul Khaliq",
    age: 58,
    city: "Lahore",
  },
  {
    name: "Abdul Wajid",
    age: 32,
    city: "Lahore",
  },
  {
    name: "Abdul Majid",
    age: 28,
    city: "Lahore",
  },

  {
    name: "Abdul Wahid",
    age: 21,
    city: "Lahore",
  },
];

const usersElement = document.getElementById("users");

users.forEach((user) => {
  const userElement = document.createElement("div");
  userElement.className = "singleUser";
  userElement.innerHTML = `
  <h1 class="userName">${user.name}</h1>
      <p class="age">${user.age}</p>
      <p class="location">${user.city}</p>
  
  `;
  usersElement.appendChild(userElement);
});

const updateUsers = (users) => {
  const usersList = document.getElementById("userConnectedLog");
  usersList.innerHTML = "";

  const usersArray = Array.isArray(users) ? users : [users];

  usersArray.forEach((user) => {
    const userDiv = document.createElement("div");
    userDiv.classList.add("userDiv");
    const userP = document.createElement("p");
    userP.textContent = user;
    usersList.appendChild(userDiv);
    userDiv.appendChild(userP);
  });
};

export { updateUsers };

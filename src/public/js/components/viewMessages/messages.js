const url = "/messages";

const authorization = async () => {
  let isValidApiKey = false;
  const responseContainer = document.getElementById("response-container");

  while (!isValidApiKey) {
    try {
      const { value: apiKey } = await Swal.fire({
        title: "Password",
        input: "password",
        text: "Ingrese la API KEY",
        color: "#fff",
        confirmButtonText: "Aceptar",
        inputValidator: (value) => {
          return !value && "Necesitas ingresar una contraseña para continuar";
        },
        allowOutsideClick: false,
        allowEscapeKey: false,
      });

      const response = await fetch(url, {
        headers: {
          "Content-type": "application/json",
          "api-key": apiKey,
        },
        method: "GET",
      });
      if (!response.ok) throw new Error("Error al enviar APIKEY");

      const data = await response.json();
      data.payload.forEach((message) => {
        const messageCard = `
            <div class="card mt-3">
                <div class="card-body bg-dark bg-gradient text-white">
                    <h5 class="card-title">Subject: ${message.subject}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Name: ${message.name}</h6>
                    <p class="card-text">${message.message}</p>
                    <p class="card-text">${message.email}</p>
                    <p class="card-text">Date: ${message.date}</p>
                </div>
            </div>
        `;
        responseContainer.innerHTML += messageCard;
      });

      isValidApiKey = true;
    } catch (error) {
      console.log(error);
    }
  }
};

authorization();

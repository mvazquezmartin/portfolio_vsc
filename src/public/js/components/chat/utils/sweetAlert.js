const alertNewUser = async () => {
  return await Swal.fire({
    title: "Identificate",
    input: "text",
    text: "Ingresa un usuario para chatear",
    inputValidator: (value) => {
      return !value && "Necesitas ingresar un usuario para continuar";
    },
    allowOutsideClick: false,
  });
};

const alertConnection = (user, icon) => {
  Swal.fire({
    text: `Se acaba de conectar ${user} al chat`,
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    icon: icon,
  });
};

export { alertConnection, alertNewUser };

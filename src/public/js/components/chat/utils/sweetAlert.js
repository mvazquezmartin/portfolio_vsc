const alertNewUser = async () => {
  return await Swal.fire({
    title: 'Log In',
    input: 'text',
    text: 'Ingresa un usuario para chatear',
    color: '#fff',
    confirmButtonText: 'Connect',
    showCancelButton: true,
    cancelButtonColor: '#d33',
    background: '#282C34',
    inputValidator: (value) => {
      return !value && 'Necesitas ingresar un usuario para continuar';
    },

    allowOutsideClick: false,
    allowEscapeKey: false,
  });
};

const alertConnection = (user, status, icon) => {
  Swal.fire({
    text: `Se acaba de ${status}: ${user}`,
    color: '#fff',
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    icon: icon,
    background: '#282C34',
  });
};

export { alertConnection, alertNewUser };

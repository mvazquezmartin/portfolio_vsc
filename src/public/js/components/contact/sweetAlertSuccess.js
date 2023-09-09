export const alertSentMessage = () => {
  Swal.fire({
    text: `Mensaje Enviado!`,
    color: "#fff",
    toast: true,
    position: "top-right",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    icon: "success",
  });
};

const alert = (status, title, message) => {
  Swal.fire({
    icon: status,
    title: title,
    text: message,
    color: '#ffffff',
    background: '#282C34',
  });
};

export default alert;

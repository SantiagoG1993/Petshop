document.addEventListener("DOMContentLoaded", function () {
    AOS.init();
  
    const app = Vue.createApp({
      data() {
        return {
          firstName: "",
          lastName: "",
          username: "",
          pet: "",
          message: "",
        };
      },
      methods: {
        handleSubmit() {
          if (this.validateForm()) {
            this.showAlert();
          }
        },
        validateForm() {
          const form = document.querySelector("form");
          if (form.checkValidity()) {
            return true;
          } else {
            form.classList.add("was-validated");
            return false;
          }
        },
        showAlert() {
          Swal.fire({
            icon: 'info',
            title: 'Se envio el formulario',
            showConfirmButton: false,
            timer: 1500
          });
        },
      },
    });
  
    app.mount("#app");
  });
  
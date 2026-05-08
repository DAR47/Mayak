document.addEventListener("DOMContentLoaded", function () {

    const modal = document.getElementById("modal");
    const openBtn1 = document.getElementById("openModalBtn");
    const openBtn2 = document.getElementById("openModalBtn2");
    const closeBtn = document.getElementById("closeModal");

    function openModal() {
        modal.classList.add("active");
    }

    function closeModal() {
        modal.classList.remove("active");
    }

    openBtn1.addEventListener("click", openModal);
    openBtn2.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            closeModal();
        }
    });

});
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("bookingForm");
    const successModal = document.getElementById("successModal");
    const closeSuccess = document.getElementById("closeSuccess");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const service = document.getElementById("service").value;

        // ПРОСТАЯ ВАЛИДАЦИЯ
        if (!name || !phone || !service) {
            alert("Заполните все поля");
            return;
        }

        // ПОКАЗ УСПЕХА
        successModal.classList.add("active");

        // очистка формы
        form.reset();
    });

    closeSuccess.addEventListener("click", function () {
        successModal.classList.remove("active");
    });

    successModal.addEventListener("click", function (e) {
        if (e.target === successModal) {
            successModal.classList.remove("active");
        }
    });

});
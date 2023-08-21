document.addEventListener("DOMContentLoaded", function () {
    const dataSpan = document.getElementById("data");
    const storedData = localStorage.getItem("dato");
  
    if (storedData) {
      dataSpan.textContent = storedData;
    }
  });
const sectionElements = document.querySelectorAll("section");

sectionElements.forEach((section) => {
  section.addEventListener("click", (e) => {
    const endpoint = `/message/${e.currentTarget.dataset.id}`;
    window.location.href = endpoint;
  });

  const deleteButton = section.querySelector(".delete");
  deleteButton.addEventListener("click", async (e) => {
    e.stopPropagation();
    const endpoint = `/message/${section.dataset.id}`;

    try {
      const response = await fetch(endpoint, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("An error occurred while trying to delete this message");
      }

      window.location.reload();
    } catch (error) {
      const errorElement = document.createElement("p");
      errorElement.classList.add("error-message");
      errorElement.textContent = error.message;
      if (!section.querySelector(".error-message")) section.appendChild(errorElement);
      setTimeout(() => {
        errorElement.remove();
      }, 5000);
    }
  });
});

const backButton = document.querySelector(".back");
backButton.addEventListener("click", () => {
  window.history.back();
});

const form = document.querySelector("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const messageUser = formData.get("messageUser");
  const messageText = formData.get("messageText");

  const endpoint = `/message/${e.target.dataset.id}`;
  try {
    const response = await fetch(endpoint, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messageUser, messageText }),
    });
    if (!response.ok) {
      throw new Error("An error occurred while trying to update this message");
    }
    window.location.href = ".";
  } catch (error) {
    const errorElement = document.createElement("p");
    errorElement.classList.add("error-message");
    errorElement.textContent = error.message;
    if (!e.target.querySelector(".error-message")) e.target.appendChild(errorElement);
    setTimeout(() => {
      errorElement.remove();
    }, 5000);
  }
});

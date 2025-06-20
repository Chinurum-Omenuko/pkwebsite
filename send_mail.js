const form = document.getElementById('contactForm');
const status = document.getElementById('status');

const getFormData = (form) => {
  const formData = new FormData(form);
  const formJson = Object.fromEntries(formData.entries());
  return formJson;
}

const errorHandler = async (response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  console.log('Success:', data);
  return data;
}

const sendFormData = async (formJson) => {
  try {
    const response = await fetch('https://mailjet-api-280673911842.us-central1.run.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formJson)
    });
    return await errorHandler(response);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    const formJson = getFormData(form);
    await sendFormData(formJson);
    console.log("Message sent succesfully")
    form.reset();
  } catch (error) {
    console.log(`Error: ${error}`);
  }
});
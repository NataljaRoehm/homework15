const clientList = document.getElementById("client-list");
const loader = document.getElementById("loader");
const content = document.getElementById("content");

fetch('https://nataljaroehm.github.io/dataClient15/client.json')
    .then(response => {
        if (!response.ok) {
            throw new Error("Что-то сломалось... Попробуйте еще раз!");
        }
        return response.json();
    })
    .then(data => {
        setTimeout(() => {
            content.style.display = "block";
            loader.style.display = "none";
            data.clients.forEach(client => {
                const listItem = document.createElement("li");
                listItem.textContent = `Имя: ${client.name}, Email: ${client.email}, Телефон: ${client.phone}`;
                clientList.append(listItem);
            });
        }, 1000);
    })
    .catch(error => {
        content.style.display = "block";
        loader.style.display = "none";
        const errorMessage = document.createElement("p");
        errorMessage.style.color = "red";
        errorMessage.textContent = `Ошибка пришла с сервера! ${error.message}`;
        content.append(errorMessage);
    });
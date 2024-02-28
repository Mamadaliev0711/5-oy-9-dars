import { createRow, validate } from "./funcsion.js";
const tbody = document.querySelector("#tbody");
const form = document.getElementById("form");
const name = document.getElementById("name");
const status = document.getElementById("status");
const description = document.getElementById("description");
const price = document.getElementById("price");
const btn = document.getElementById("btn");

btn &&
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    btn.setAttribute("disabled", true);
    const isValid = validate(name, status, description, price);
    btn.innerHTML = "yuborilmoqda...";
    if (isValid) {
      const phone = {
        name: name.value,
        status: status.value,
        price: price.value,
        description: description.value,
        categoriy_id: 2,
      };

      fetch("https://auth-rg69.onrender.com/api/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(phone),
      })
        .then((res) => res.json())
        .then((data) => {
          btn.removeAttribute("desabled");
          btn.innerHTML = "Saqlash";
          if (data.id) {
            // window.location.reload();
            let row = createRow(data, tbody.childElementCount + 1);
            tbody.innerHTML += row;
          }
        })
        .catch((err) => {
          console.log(err);
        });
      //   console.log(data);
    }
  });
const API = `https://auth-rg69.onrender.com/api/products`;
document.addEventListener("DOMContentLoaded", function () {
  fetch(`${API}/all`, {
    method: "GET",
  })
    .then((res) => {
      if (res.status == 200) {
        return res.json();
      }
    })
    .then((data) => {
      if (data.length) {
        data.forEach((phone, index) => {
          let row = createRow(phone, index + 1);
          tbody.innerHTML += row;
        });
        const deletButton = document.querySelectorAll("i.fa-trash-can");
        if (deletButton.length) {
          deletButton.forEach((del) => {
            del.addEventListener("click", function () {
              let isDelet = confirm(
                "Rostdanham bu malumotni uchirmoqchimisiz?"
              );
              if (isDelet) {
                let id = this.parentNode.getAttribute("data-id");
                if (id) {
                  fetch(`${API}/${id}`, {
                    method: "DELETE",
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (
                        data.message == "Mahsulot muvaffaqiyatli o'chirildi"
                      ) {
                        window.location.reload();
                      }
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }
              }
            });
          });
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

const words = ["tbody"];

const result = words.filter((word) => word.length > 6);

console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

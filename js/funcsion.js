function createRow(phone, index) {
  return `
   <tr>
            <td>${index}.</td>
            <td>${phone.name}</td>
            <td>${phone.price}$</td>
            <td>${phone.status}</td>
            <td>${phone.description}</td>
            <td>${phone.createdAt}</td>
            <td>${phone.updatedAt}</td>
            <td data-id=${phone.id}>
              <i class="fa-solid fa-pen-to-square"></i>
              <i class="fa-solid fa-trash-can"></i>
            </td >
          </tr>`;
}
function validate(name, status, description, price) {
  return true;
}
export { createRow, validate};

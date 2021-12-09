const addItem = (event, form) => {
  event.preventDefault()
  let raw = JSON.stringify({
    name: form.name.value,
    description: form.description.value,
    brand: form.brand.value,
    imageUrl: form.imageUrl.value,
    price: form.price.value,
  })

  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYmI1NjRjZmY1ZjAwMTU5MGJkZDEiLCJpYXQiOjE2Mzg5NzI2NzMsImV4cCI6MTY0MDE4MjI3M30.Fp3LdF8GznE1ZjcIp4kZJMiuhdAs4SxH4Wr3gwUj_yg",
      "Content-Type": "application/json",
    },
    body: raw,
  })
    .then((response) => {
      alert("Item added")
      form.reset()
      loadItems()
    })
    .catch((error) => {
      console.log(error)
    })
  return false
}

const loadItems = () => {
  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYmI1NjRjZmY1ZjAwMTU5MGJkZDEiLCJpYXQiOjE2Mzg5NzI2NzMsImV4cCI6MTY0MDE4MjI3M30.Fp3LdF8GznE1ZjcIp4kZJMiuhdAs4SxH4Wr3gwUj_yg",
    },
  })
    .then((response) => response.json())
    .then((items) => {
      displayItems(items)
    })

    .catch((error) => {
      console.log(error)
    })
}

const displayItems = (items) => {
  let itemsContainerNode = document.getElementById("items-container")
  itemsContainerNode.innerHTML = ""

  items.forEach((item) => {
    let trNode = document.createElement("tr")
    itemsContainerNode.appendChild(trNode)
    trNode.innerHTML = `
      <td><img src="${item.imageUrl}" style="width: 100px;"/></td>
      <td>${item.name}</td>
      <td>${item.brand}</td>
      <td>${item.price}</td>
      <td>
      <a class="btn btn-primary" href="/details.html?product_id=${item._id}">View</button>
      </td>
      `
  })
}

window.onload = () => {
  loadItems()
}

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

let cardsArr = []
const displayItems = (items) => {
  let itemsContainerNode = document.getElementById("items-container")

  items.forEach((item) => {
    let colNode = document.createElement("div")
    colNode.classList.add("col-3")
    itemsContainerNode.appendChild(colNode)
    colNode.innerHTML = ` <div class="card">
    <img src="${item.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class="card-text">${item.description}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">${item.price}</li>

    </ul>

  </div>
    `
  })
}

window.onload = () => {
  loadItems()
}

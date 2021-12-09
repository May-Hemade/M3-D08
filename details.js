const updateItem = (event, form) => {
  event.preventDefault()

  const urlParams = new URLSearchParams(window.location.search)
  const productId = urlParams.get("product_id")

  let raw = JSON.stringify({
    name: form.name.value,
    description: form.description.value,
    brand: form.brand.value,
    imageUrl: form.imageUrl.value,
    price: form.price.value,
  })

  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    method: "PUT",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYmI1NjRjZmY1ZjAwMTU5MGJkZDEiLCJpYXQiOjE2Mzg5NzI2NzMsImV4cCI6MTY0MDE4MjI3M30.Fp3LdF8GznE1ZjcIp4kZJMiuhdAs4SxH4Wr3gwUj_yg",
      "Content-Type": "application/json",
    },
    body: raw,
  })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  return false
}

const loadItem = (productId) => {
  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYmI1NjRjZmY1ZjAwMTU5MGJkZDEiLCJpYXQiOjE2Mzg5NzI2NzMsImV4cCI6MTY0MDE4MjI3M30.Fp3LdF8GznE1ZjcIp4kZJMiuhdAs4SxH4Wr3gwUj_yg",
    },
  })
    .then((response) => response.json())
    .then((item) => {
      displayItem(item)
    })
    .catch((error) => {
      console.log(error)
    })
}

const deleteItem = () => {
  const hasAccepted = confirm("Are you sure want to delete this item?")

  if (!hasAccepted) return

  const urlParams = new URLSearchParams(window.location.search)
  const productId = urlParams.get("product_id")

  fetch(`https://striveschool-api.herokuapp.com/api/product/${productId}`, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYmI1NjRjZmY1ZjAwMTU5MGJkZDEiLCJpYXQiOjE2Mzg5NzI2NzMsImV4cCI6MTY0MDE4MjI3M30.Fp3LdF8GznE1ZjcIp4kZJMiuhdAs4SxH4Wr3gwUj_yg",
    },
  })
    .then((response) => {
      alert("Item deleted successfully")
      setTimeout(() => {
        window.location.assign("/admin.html")
      }, 3000)
    })
    .catch((error) => {
      console.log(error)
    })
}

const displayItem = (item) => {
  const nameNode = document.getElementById("name")
  nameNode.value = item.name

  const descriptionNode = document.getElementById("description")
  descriptionNode.value = item.description

  const brandNode = document.getElementById("brand")
  brandNode.value = item.brand

  const imageUrlNode = document.getElementById("imageUrl")
  imageUrlNode.value = item.imageUrl

  const priceNode = document.getElementById("price")
  priceNode.value = item.price
}

window.onload = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const productId = urlParams.get("product_id")
  loadItem(productId)
}

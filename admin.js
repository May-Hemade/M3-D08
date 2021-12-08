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
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
  return false
}

// const addItem = async (form) => {
//   let raw = JSON.stringify({
//     name: form.name.value,
//     description: form.description.value,
//     imageUrl: form.imageUrl.value,
//     brand:form.brand.value,
//     price: form.price.value,
//   })
//   try {
//     let response = await fetch(
//       "https://striveschool-api.herokuapp.com/api/product/",
//       {
//         method: "POST",
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWIwYmI1NjRjZmY1ZjAwMTU5MGJkZDEiLCJpYXQiOjE2Mzg5NzI2NzMsImV4cCI6MTY0MDE4MjI3M30.Fp3LdF8GznE1ZjcIp4kZJMiuhdAs4SxH4Wr3gwUj_yg",
//           "Content-Type": "application/json",
//         },
//         body: raw,
//         redirect: "follow",
//       }
//     )

//     if (response.ok) {
//       console.log(response)
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

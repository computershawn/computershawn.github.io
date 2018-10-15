window.onload = () => {
  // for(let i = 0; i < 3; i++) {
  //   let newThing = document.createElement("div")
  //   newThing.innerText = `what's up dude${i}`
  //   document.getElementById("row-1").appendChild(newThing)
  // }
  createGrid()
}

const createGrid = () => {
  let rows = 10
  let cols = 10

  //loadProjects()

  // This Works
  // let topicNames = Object.keys(projectData)
  // for(let i = 0; i < topicNames.length; i++) {
  //   let topic = topicNames[i]
  //   let topicData = projectData[topic]
  //   console.log(topic)
  //   for(let j = 0; j < topicData.length; j++) {
  //     let project = topicData[j]
  //     console.log(project.imageURL)
  //   }
  // }

  // let topicNames = Object.keys(projectData)
  // for(let j = 0; j < topicNames.length; j++) {
  //   let topic = topicNames[j]
  //   let topicData = projectData[topic]
  //   for(let i = 0; i < topicData.length; i++) {
  //     let project = topicData[i]
  //     console.log(project.imageURL)
  //   }
  // }

  let topicNames = Object.keys(projectData)
  for(let j = 0; j < rows; j++) {
    var topicName
    var topicData = []
    if(j < topicNames.length) {
      topicName = topicNames[j]
      topicData = projectData[topicName]
    }
    for(let i = 0; i < cols; i++) {
      let newDiv = document.createElement("div")
      if(topicData[i]) {
        let project = topicData[i]
        let newLink = document.createElement("a")
        let itemURL = project.itemURL
        let imageURL = project.imageURL
        let altTag = project.alt
        newLink.setAttribute("href", itemURL)
        newLink.setAttribute("target", "_blank")
        newLink.innerHTML = `<img src="${imageURL}" alt="${altTag}">`
        newDiv.appendChild(newLink)
      } else {
        newDiv.innerHTML = `<img class="placeholder" src="./images/placeholder.png" alt="TBD">`
      }
      // if(items[j * cols + i]) {
      //   let newLink = document.createElement("a")
      //   newLink.setAttribute("href", `${items[j * cols + i].itemURL}`)
      //   newLink.setAttribute("target", "_blank")
      //   newLink.innerHTML = `<img src="${items[j * cols + i].imageURL}" alt="${items[j * cols + i].alt}">`
      //   newDiv.appendChild(newLink)
      // }
      document.getElementById(`row-${j}`).appendChild(newDiv)
    }
  }

  // let items = [
  //   {
  //     category: "Tension",
  //     imageURL: "./images/tension01.png",
  //     alt: "Tension 01",
  //     itemURL: "http://computershawn.github.io/grayarea/comic/",
  //   },
  //   {
  //     category: "Tension",
  //     imageURL: "./images/squarezies.png",
  //     alt: "Tension 02",
  //     itemURL: "http://computershawn.github.io/grayarea/comic/",
  //   }
  // ]

  // for(let j = 0; j < rows; j++) {
  //   for(let i = 0; i < cols; i++) {
  //     let newDiv = document.createElement("div")
  //     if(items[j * cols + i]) {
  //       let newLink = document.createElement("a")
  //       newLink.setAttribute("href", `${items[j * cols + i].itemURL}`)
  //       newLink.setAttribute("target", "_blank")
  //       newLink.innerHTML = `<img src="${items[j * cols + i].imageURL}" alt="${items[j * cols + i].alt}">`
  //       newDiv.appendChild(newLink)
  //     }
  //     document.getElementById(`row-${j}`).appendChild(newDiv)
  //   }
  // }

  // for(let j = 0; j < rows; j++) {
  //   for(let i = 0; i < cols; i++) {
  //     let newDiv = document.createElement("div")
  //     if(items[j * cols + i]) {
  //       let newLink = document.createElement("a")
  //       newLink.setAttribute("href", `${items[j * cols + i].itemURL}`)
  //       newLink.setAttribute("target", "_blank")
  //       newLink.innerHTML = `<img src="${items[j * cols + i].imageURL}" alt="${items[j * cols + i].alt}">`
  //       newDiv.appendChild(newLink)
  //     }
  //     document.getElementById(`row-${j}`).appendChild(newDiv)
  //   }
  // }
}

// const loadProjects = () => {
//   let topicNames = Object.keys(projectData)
//   for(let i = 0; i < topicNames.length; i++) {
//     let topic = topicNames[i]
//     let topicData = projectData[topic]
//     console.log(topic)
//     for(let j = 0; j < topicData.length; j++) {
//       let project = topicData[j]
//       console.log(project.imageURL)
//     }
//   }
// }

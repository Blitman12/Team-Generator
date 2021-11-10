


module.exports = templateData => {
let engineer = [];
let intern = [];
let manager = [];

  templateData.forEach(obj => {
    const role = obj.getRole()
    if (role === "Engineer") {
      engineer.push(obj)
    } else if (role === "Intern") {
      intern.push(obj)
    } else {
      manager.push(obj)
    }
  })

  
const createEngineer = () => {
  if (engineer.length > 0) {
   engineer.forEach(worker => {
     return`
     <h2>${worker.getName()}</h2>
     <p>${worker.getRole()}</p>
     <p>${worker.getID()}</p>
     <p>${worker.getEmail()}</p>
     <p>${worker.getGithub()}</p>
     `
   })
  }
}

const createIntern = () => {
  if (intern.length > 0) {
    intern.forEach(worker => {
      return`
      <h2>${worker.getName()}</h2>
      <p>${worker.getRole()}</p>
      <p>${worker.getID()}</p>
      <p>${worker.getEmail()}</p>
      <p>${worker.getSchool()}</p>
      `
    })
   }
}

const createManager = () => {
  if (manager.length > 0) {
   manager.forEach(worker => {
     return`
     <h2>${worker.getName()}</h2>
     <p>${worker.getRole()}</p>
     <p>${worker.getID()}</p>
     <p>${worker.getEmail()}</p>
     <p>${worker.officeNumber}</p>
     `
   })
  }
}
  console.log(createEngineer())
  console.log(createManager())
  console.log(createIntern())

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Employee Portfolio</title>
    </head>
    <body>
      <header>
      <h1>Here if your team</h1>
      </header>

      <div>
      ${createManager()}
      ${createEngineer()}
      ${createIntern()}
      </div>
    </body>
    </html>
    `;
  };
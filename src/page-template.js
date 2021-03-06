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


  // const createManager = () => {
  //   return `
  //   <div class="m-2 card pl-2 pr-2 text-white bg-dark">
  //     ${manager.map(worker => {
  //     return `
  //       <h2>${worker.getName()}</h2>
  //       <p><i class="fas fa-mug-hot"></i> ${worker.getRole()}</p>
  //       <p>ID Number: ${worker.getID()}</p>
  //       <p>Email: <a href="mailto:${worker.getEmail()}" target="_blank">${worker.getEmail()}</a></p>
  //       <p>Office number: ${worker.officeNumber}</p>
  //       `
  //   })}
  //   </div>
  //   `
  // }

  const createManager = () => {
    return manager.map(worker => {
      return `
      <div class="m-2 card pl-2 pr-2 text-white bg-dark">
      <h2 class="text-center">${worker.getName()}</h2>
      <p><i class="fas fa-mug-hot"></i> ${worker.getRole()}</p>
      <p>ID Number: ${worker.getID()}</p>
      <p>Email: <a href="mailto:${worker.getEmail()}" target="_blank">${worker.getEmail()}</a></p>
      <p>Office number: ${worker.officeNumber}</p>
      </div>
      `
    })
  }

  const createEngineer = () => {
    return engineer.map(worker => {
      return `
      <div class="m-2 card pl-2 pr-2 text-white bg-dark">
      <h2 class="text-center">${worker.getName()}</h2>
      <p><i class="fas fa-glasses"></i> ${worker.getRole()}</p>
      <p>ID Number: ${worker.getID()}</p>
      <p>Email: <a href="mailto:${worker.getEmail()}" target="_blank">${worker.getEmail()}</a></p>
      <p>GitHub: <a href="https://github.com/${worker.getGithub()}" target="_blank">${worker.getGithub()}</a></p>
      </div>`
    }).join("")
  }

  const createIntern = () => {
    return intern.map(worker => {
      return `
      <div class="m-2 pl-2 pr-2 card text-white bg-dark">
      <h2 class="text-center">${worker.getName()}</h2>
      <p><i class="fas fa-graduation-cap"></i> ${worker.getRole()}</p>
      <p>ID Number: ${worker.getID()}</p>
      <p>Email: <a href="mailto:${worker.getEmail()}" target="_blank">${worker.getEmail()}</a></p>
      <p>School: ${worker.getSchool()}</p>
      </div>`
    }).join("")
  }


  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <title>Team-Generator</title>
    </head>
    <body>
      <header>
      <nav class="container-fluid-nav pb-2 text-center navbar-dark bg-dark">
      <h1 class="text-light"><i class="fas fa-users"></i> My Team <i class="fas fa-users"></i></h1>
      </nav>
      </header>
      <div class="container d-flex flex-wrap align-items-center justify-content-center">
      ${createManager()}
      </div>
      <div class="container d-flex flex-wrap align-items-center justify-content-center">
      ${engineer.length > 0 ? createEngineer() : ""}
      ${intern.length > 0 ? createIntern() : ""}
      </div>
    </body>
    </html>
    `;
};
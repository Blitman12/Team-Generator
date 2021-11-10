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


  const createManager = () => {
    return `
    <div>
      ${manager.map(worker => {
      return `
        <h2>Name: ${worker.getName()}</h2>
        <p>Role: ${worker.getRole()}</p>
        <p>ID Number: ${worker.getID()}</p>
        <p>Email: ${worker.getEmail()}</p>
        <p>Office number:${worker.officeNumber}</p>
        `
    })}
    </div>
    `
  }

  const createEngineer = () => {
    return `
    <div>
      ${engineer.map(worker => {
      return `
        <h2>Name: ${worker.getName()}</h2>
        <p>Role: ${worker.getRole()}</p>
        <p>ID Number: ${worker.getID()}</p>
        <p>Email: ${worker.getEmail()}</p>
        <p>GitHub Username: ${worker.getGithub()}</p>
        `
    }).join('')}
    </div>
    `
  }
  const createIntern = () => {
    return `
    <div>
      ${intern.map(worker => {
      return `
        <h2>Name: ${worker.getName()}</h2>
        <p>Role: ${worker.getRole()}</p>
        <p>ID Number: ${worker.getID()}</p>
        <p>Email: ${worker.getEmail()}</p>
        <p>School: ${worker.getSchool()}</p>
        `
    }).join('')}
    </div>
    `
  }


  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      <title>Employee Portfolio</title>
    </head>
    <body>
      <header>
      <nav class="container-fluid-nav pb-2 text-center navbar-dark bg-dark">
      <h1 class="text-light">Here is your team</h1>
      </nav>
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
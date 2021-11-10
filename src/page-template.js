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
        <h2>${worker.getName()}</h2>
        <p>${worker.getRole()}</p>
        <p>${worker.getID()}</p>
        <p>${worker.getEmail()}</p>
        <p>${worker.officeNumber}</p>
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
        <h2>${worker.getName()}</h2>
        <p>${worker.getRole()}</p>
        <p>${worker.getID()}</p>
        <p>${worker.getEmail()}</p>
        <p>${worker.getGithub()}</p>
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
        <h2>${worker.getName()}</h2>
        <p>${worker.getRole()}</p>
        <p>${worker.getID()}</p>
        <p>${worker.getEmail()}</p>
        <p>${worker.getSchool()}</p>
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
      <title>Employee Portfolio</title>
    </head>
    <body>
      <header>
      <h1>Here is your team</h1>
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
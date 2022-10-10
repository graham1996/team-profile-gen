// generate main html
function genTeam(employeeDisplay) {   
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
          </style>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="card-display">
                    <!-- Cards go here -->
                    ${employeeDisplay}
                </div>
            </div>
        </main>
        
    </body>
    </html>
  `;
  }


// pushing manager card to html
function getManager(manager) {
    return `
    
    <div class="col-5 mt-3" style="height: 22rem">
        <div class="card h-100">
            <div class="card-header">
                <h1 id="name">${manager.name}</h1>
                <h4 id="role">Manager</h4><i class="material-icons">supervisor_accounts</i>
            </div>

            <div class="card-body">
                <p class="id">${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class="office">Office Number: ${manager.officeNumber}</p>
            </div>

        </div>
    </div>
    `;
    
}

// pushing engineer card to html
function getEngineer(engineer) {
    return `
    <div class="col-5 mt-3" style="height: 22rem">
        <div class="card h-100">
            <div class="card-header">
                <h1 id="name">${engineer.name}</h1>
                <h4 id="role">Engineer</h4><i class="material-icons">account_tree</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineer.id}</p>
                <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `
}

// pushing intern card to html
function getIntern(intern) {
    return `
    <div class="col-5 mt-3" style="height: 22rem">
        <div class="card h-100">
            <div class="card-header">
                <h1 id="name">${intern.name}</h1>
                <h4 id="role">Intern</h4><i class="material-icons">assignment_ind</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${intern.id}</p>
                <p class="email">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
    </div>
</div>
    `
};

// pushing array to html
function generatePage(data) {

    htmlArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        if (role === 'Manager') {
            const managerCard = getManager(employee);

            htmlArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = getEngineer(employee);

            htmlArray.push(engineerCard);
        } 
        if (role === 'Intern') {
            const internCard = getIntern(employee);

            htmlArray.push(internCard);
        }
        
    }
    const employeeDisplay = htmlArray.join('')

    const generateTeam = genTeam(employeeDisplay); 
    return generateTeam;

}

module.exports = generatePage; 

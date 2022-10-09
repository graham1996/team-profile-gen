const manager = managerData => {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${managerData.getName()}</h3>
            <h4>Manager</h4><i class="material-icons">content_paste</i>
        </div>
        <div class="card-body">
            <p class="id">ID: ${managerData.getId()}</p>
            <p class="email">Email: <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a></p>
            <p class="office">Office Number: ${managerData.getOffice()}</p>
        </div>
    </div>
</div>
    `
}

const engineer = engineerData => {
    return `
    <div class="col-4 mt-4">
    <div class="card h-100">
        <div class="card-header">
            <h3>${engineerData.getName()}</h3>
            <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
        </div>
        <div class="card-body">
            <p class="id">ID: ${engineerData.getId()}</p>
            <p class="email">Email: <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a></p>
            <p class="github">Github: <a href="https://github.com/${engineerData.getGit()}">${engineerData.getGit()}</a></p>
        </div>
    </div>
</div>
    `
}
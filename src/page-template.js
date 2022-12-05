const generateTeam = team => {

    // create the manager html
    const generateManager = manager => {
        return ` <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div> `;
    };

    // create the html for engineers
    const generateEngineer = engineer => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>`;
    };

    // create the html for interns
    const generateIntern = intern => {
        return `<div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                the card's content.</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>`;
    };

    // use the team array to generate pieces of html based on the employee role
}

module.exports = team => {
    // template literal - html body that calls the generate team function
}
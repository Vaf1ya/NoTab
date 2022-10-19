const contacts = document.getElementById('contacts');
document.getElementById('contacts__btn').addEventListener('click', (event) => {
    event.preventDefault();

    let Name = document.getElementById('Name').value;
    let VenueName = document.getElementById('VenueName').value;
    let VenueCity = document.getElementById('VenueCity').value;
    let StateCity = document.getElementById('StateCity').value;
    let Email = document.getElementById('Email').value;
    let Subject = document.getElementById('Subject').value;
    let NameForm = document.getElementById('Name');
    let VenueNameForm = document.getElementById('VenueName');
    let VenueCityForm = document.getElementById('VenueCity');
    let StateCityForm = document.getElementById('StateCity');
    let EmailForm = document.getElementById('Email');
    let SubjectForm = document.getElementById('Subject');
    if (Name === '') {
        NameForm.classList.add('error');
    } else {
        NameForm.classList.remove('error');
    }
    if (VenueName === '') {
        VenueNameForm.classList.add('error');
    } else {
        VenueNameForm.classList.remove('error');
    }
    if (VenueCity === '') {
        VenueCityForm.classList.add('error');
    } else {
        VenueCityForm.classList.remove('error');
    }
    if (StateCity === '') {
        StateCityForm.classList.add('error');
    } else {
        StateCityForm.classList.remove('error');
    }
    if (Email === '') {
        EmailForm.classList.add('error');
    } else {
        EmailForm.classList.remove('error');
    }
    if (Subject === '') {
        SubjectForm.classList.add('error');
    } else {
        SubjectForm.classList.remove('error');
    }
});

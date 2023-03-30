var resumeName = document.getElementById(`name`);

var updateResume = document.getElementById(`upddateResume`);

let firstName = document.getElementById(`firstName`);
let middleName = document.getElementById(`middleName`);
let lastName = document.getElementById(`lastName`);

var createResume = () => {
    resumeName.innerHTML = firstName + middleName + lastName;
}
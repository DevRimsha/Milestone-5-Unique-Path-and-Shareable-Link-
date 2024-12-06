console.log("Welcome to my Editable Resume Builder!");
var formEleement = document.getElementById('resume-form');
var nameDisplayEelement = document.getElementById('display-name');
var skillDisplayElement = document.getElementById('display-skills');
var editButtonn = document.getElementById('edit-btn');
function loadStoredesumeData() {
    var savedName = localStorage.getItem('name');
    var savedSkills = localStorage.getItem('skills');
    if (savedName && savedSkills) {
        if (nameDisplayEelement && skillDisplayElement) {
            nameDisplayEelement.textContent = "Name: ".concat(savedName);
            skillDisplayElement.textContent = "Skills: ".concat(savedSkills);
        }
    }
}
window.addEventListener('load', loadStoredesumeData);
if (editButtonn) {
    editButtonn.addEventListener('click', function () {
        var _a, _b;
        console.log("Edit button clicked!");
        if (nameDisplayEelement && skillDisplayElement) {
            var name_1 = ((_a = nameDisplayEelement.textContent) === null || _a === void 0 ? void 0 : _a.replace('Name: ', '')) || '';
            var skills = ((_b = skillDisplayElement.textContent) === null || _b === void 0 ? void 0 : _b.replace('Skills: ', '')) || '';
            var nameInput = document.getElementById('name');
            var skillsInput = document.getElementById('skills');
            nameInput.value = name_1;
            skillsInput.value = skills;
        }
    });
}
if (formEleement && nameDisplayEelement && skillDisplayElement) {
    formEleement.addEventListener('submit', function (event) {
        event.preventDefault();
        var nameInput = document.getElementById('name');
        var skillsInput = document.getElementById('skills');
        var name = nameInput.value;
        var skills = skillsInput.value;
        localStorage.setItem('name', name);
        localStorage.setItem('skills', skills);
        if (nameDisplayEelement && skillDisplayElement) {
            nameDisplayEelement.textContent = "Name: ".concat(name);
            skillDisplayElement.textContent = "Skills: ".concat(skills);
        }
        nameInput.value = '';
        skillsInput.value = '';
    });
}
else {
    console.error('Form or display elements not found!');
}
"";

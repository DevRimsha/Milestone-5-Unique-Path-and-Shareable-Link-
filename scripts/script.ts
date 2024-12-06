console.log("Welcome to my Editable Resume Builder!");

const formElement = document.getElementById('resume-form') as HTMLFormElement | null;
const nameDisplayElement = document.getElementById('display-name') as HTMLParagraphElement | null;
const skillsDisplayElement = document.getElementById('display-skills') as HTMLParagraphElement | null;
const editButton = document.getElementById('edit-btn') as HTMLButtonElement | null;
function loadStoredresumeData() {
  const savedName = localStorage.getItem('name');
  const savedSkills = localStorage.getItem('skills');
  if (savedName && savedSkills) {
    if (nameDisplayEelement && skillDisplayElement) {
      nameDisplayEelement.textContent = `Name: ${savedName}`;
      skillDisplayElement.textContent = `Skills: ${savedSkills}`;
    }
  }
}
window.addEventListener('load', loadStoredesumeData);
if (editButtonn) {
  editButtonn.addEventListener('click', () => {
    console.log("Edit button clicked!");

    if (nameDisplayEelement && skillDisplayElement) {
      const name = nameDisplayEelement.textContent?.replace('Name: ', '') || '';
      const skills = skillDisplayElement.textContent?.replace('Skills: ', '') || '';
      const nameInput = document.getElementById('name') as HTMLInputElement;
      const skillsInput = document.getElementById('skills') as HTMLInputElement;

      nameInput.value = name;
      skillsInput.value = skills;
    }
  });
}

if (formEleement && nameDisplayEelement && skillDisplayElement) {
  formEleement.addEventListener('submit', (event) => {
    event.preventDefault();
    const nameInput = document.getElementById('name') as HTMLInputElement;
    const skillsInput = document.getElementById('skills') as HTMLInputElement;
    const name = nameInput.value;
    const skills = skillsInput.value;
    localStorage.setItem('name', name);
    localStorage.setItem('skills', skills);
    if (nameDisplayEelement && skillDisplayElement) {
      nameDisplayEelement.textContent = `Name: ${name}`;
      skillDisplayElement.textContent = `Skills: ${skills}`;
    }
    nameInput.value = '';
    skillsInput.value = '';
  });
} else {
  console.error('Form or display elements not found!');
}
``
export function createProjectElement(name){
    const projectDiv=document.createElement("div");
    projectDiv.classList.add("Project");

    const projectTitle = document.createElement("h4")
    projectTitle.textContent=name;

    //create text field
    const projectDesc = document.createElement("input");
    projectDesc.classList.add("projectDesc");
    projectDesc.type="text";
    projectDesc.placeholder="Description of your task";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("deleteBtn"); //what we use when we edit in ccs

    deleteButton.textContent="delete";

    deleteButton.addEventListener("click",()=>{
        projectDiv.remove();
    })
    projectDiv.appendChild(projectTitle);
    projectDiv.appendChild(projectDesc);
    projectDiv.appendChild(deleteButton);

    return projectDiv; 
}

export function createLeftProjects(name){
    const leftProjectDiv = document.createElement("div");
    leftProjectDiv.classList.add("LeftProject");
    const leftProjectTitle = document.createElement('h4');
    leftProjectTitle.textContent=name;
    leftProjectTitle.classList.add("LeftProjectTitle");
    leftProjectDiv.appendChild(leftProjectTitle);
    return leftProjectDiv;
}
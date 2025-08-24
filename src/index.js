
import './styles.css';
import {template} from './template.js';
import { createLeftProjects, createProjectElement } from './project.js';

  const leftSide = document.getElementById("leftProjectsList");
  const leftProjectOne=createLeftProjects("My first left project")
  leftSide.appendChild(leftProjectOne);

  const rightSide = document.getElementById("spaceForProjects");
  const projectOne = createProjectElement("My First Project");
  rightSide.appendChild(projectOne);



  const addButton = document.getElementById("addProjects");
  console.log("addButton:", addButton); // should NOT be null now

  addButton.addEventListener('click', () => {
   
    const name = prompt("Enter the name for your project: ");
    if (name && name.trim() !== "") {   
      const project = createProjectElement(name);
      const leftProject = createLeftProjects(name);
      rightSide.appendChild(project);
      leftSide.appendChild(leftProject);
    }
  });

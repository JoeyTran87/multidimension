// JavaScript to handle add panel button click
const addPanelButton = document.querySelector('.add-panel-button');
const treePanelsContainer = document.querySelector('.tree-panels-container');

addPanelButton.addEventListener('click', () => {
    const newPanel = document.createElement('div');
    newPanel.classList.add('tree-panel');
    newPanel.innerHTML = `
        <ul>
            <li><a href="#">Mục mới 1</a></li>
            <li><a href="#">Mục mới 2</a></li>
        </ul>
    `;

    treePanelsContainer.appendChild(newPanel);
});
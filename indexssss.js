const taskList = [
    {
        id: 0,
        title: "Visit the Doctor",
        body: "I need to see my Doctor, to do a proper check up and plan against Ramadan",
        date: new Date('2022-02-25')
    },
    {
        id: 1,
        title: "Visit the Doctor",
        body: "I need to see my Doctor, to do a proper check up and plan against Ramadan",
        date: new Date('2022-02-25')
    }
];

// console.log(taskList[0].body);

let taskDiv = document.getElementById('tasks');

const showTask = () =>{
    taskDiv.innerHTML = '';
    for(let i=0; i<taskList.length; i++){
        taskDiv.innerHTML += `
            <div class="card p-3 mb-3">
                <h1>${taskList[i].title}</h1>
                <p>${taskList[i].body}</p>
                <p>${taskList[i].date}</p>
            </div>
        `;
    }
}
showTask();




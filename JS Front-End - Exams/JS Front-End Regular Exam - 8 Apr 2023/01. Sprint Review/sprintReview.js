function sprintReview(input) {

    let n = input.shift();
    let initialState = input.splice(0, n);
    let sprintBoard = [];

    initialState.forEach(el => {
        const [assignee, taskId, title, taskStatus, estimatedPoints] = el.split(":");

        let task = {
            taskId,
            title,
            taskStatus,
            estimatedPoints: Number(estimatedPoints),
        }

        let person;

       

        if (isSuchPerson(assignee)) {
           person = isSuchPerson(assignee);
        } else {
            person = {
                name: assignee,
                tasks: []
            }
            sprintBoard.push(person);
        }

        person.tasks.push(task);

    });

    input.forEach(c => {

        const [command, ...rest] = c.split(":");

        if (command === "Add New") {

            assignee = rest[0];
            taskId = rest[1];
            title = rest[2];
            taskStatus = rest[3];
            estimatedPoints = Number(rest[4]);

            let person = isSuchPerson(assignee);

            if(person){

                let task = {
                    taskId,
                    title,
                    taskStatus,
                    estimatedPoints: Number(estimatedPoints),
                }

                person.tasks.push(task);

            }else{
                console.log(`Assignee ${assignee} does not exist on the board!`)
            }

        } else if (command === "Change Status") {

            assignee = rest[0];
            taskId = rest[1];
            newStatus = rest[2];

            let person = isSuchPerson(assignee);

            if(person){

                let task = person.tasks.find(t=> t.taskId === taskId);
                if(task){
                    task.taskStatus = newStatus;
                }else{
                    console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
                }


            }else{
                console.log(`Assignee ${assignee} does not exist on the board!`)
            }

        } else if (command === "Remove Task") {

            assignee = rest[0];
            index = Number(rest[1]);

            let person = isSuchPerson(assignee);

            if(person){

                if(index >= 0 && index < person.tasks.length){
                    person.tasks.splice(index,1);
                }else{
                    console.log(`Index is out of range!`);
                }

            }else{
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }

        }
    });
    let toDoPts = sumAllPoints(sprintBoard,"ToDo");
    let inProgressPts = sumAllPoints(sprintBoard,"In Progress");
    let codeReviewPts = sumAllPoints(sprintBoard,"Code Review");
    let donePts = sumAllPoints(sprintBoard,"Done");

    console.log(`ToDo: ${toDoPts}pts`);	
    console.log(`In Progress: ${inProgressPts}pts`);	
    console.log(`Code Review: ${codeReviewPts}pts`);	
    console.log(`Done Points: ${donePts}pts`);
    
    if(donePts >= toDoPts + inProgressPts + codeReviewPts){
        console.log("Sprint was successful!");
    }else{
        console.log("Sprint was unsuccessful...");
    }


    function isSuchPerson(assignee) {
        let person = sprintBoard.find(p => p.name === assignee);
        return person;
    }

    function sumAllPoints(sprintBoard, taskStatus){
        let sum = 0;
        sprintBoard.forEach(p=> {
            p.tasks.forEach(t=>{
                if(t.taskStatus === taskStatus){
                    sum+= t.estimatedPoints;
                }
            })
        })

        return sum;

    }
    // console.log(JSON.stringify(sprintBoard, null, 2));
}

sprintReview([
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]
);

sprintReview(  [
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
]
);
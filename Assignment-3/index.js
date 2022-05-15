const express = require('express');
const app = express();
const PORT = 5000;

// You have to write two api’s for getting studentInfo
// 1. Create an hardcoded array in your app.js file
let studentInfo = [
    {
        id: 1,
        name: "Daniel",
        college: "Cornerstone"
    },
    {
        id: 2,
        name: "Mauricio",
        college: "Cornerstone"
    },
    {
        id: 3,
        name: "Samantha",
        college: "Cornerstone"
    },
]

// 2. get api to get the following data

// 3. http://localhost:5000/students
app.get('/students', (request, response) => {
    return response.status(200).json(studentInfo);
})

// 4. Return the list of hardcoded students
// 5. http://localhost:5000/students/:id
app.get('/students/:id', (request, response) => {
    // console.log(request.params.id);

    const requestedID = request.params.id; // it is of string format by default
    console.log(requestedID, "Requested ID");
    const foundItem = studentInfo.find(function(item) {
        if (item.id == requestedID) {
            return item;
        }
    });

    console.log(foundItem, "Found Item");
    return response.status(200).json(foundItem);
})

app.listen(PORT, (request, response) => {
    console.log(`Server running at port ${PORT}`);
})


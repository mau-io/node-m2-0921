const express = require('express');
const PORT = 5000;
const app = express();


// Middleware
// Middleware is like a wall in between your backend code that could perform any manipulation
// This middleware converts incoming data to json format
app.use(express.json());

// Create an hardcoded array in your app.js file
// a. studentName
// b. studentCollege
// c. studentAge
// d. studentRollNumber

const students = [
    {
        id: 1,
        name: "Smith",
        college: "Vancouver",
        age: 22,
        rollNumber: 1
    },
    {
        id: 2,
        name: "Akhil",
        college: "Vancouver",
        age: 20,
        rollNumber: 2
    },
    {
        id: 3,
        name: "Maurice",
        college: "Vancouver",
        age: 19,
        rollNumber: 3
    },
    {
        id: 4,
        name: "Sophia",
        college: "Vancouver",
        age: 21,
        rollNumber: 4
    }
]

// GET API
app.get('/api/v1/students', (request, response) => {
    // 200 --> Succesfull response
    return response.status(200).json({
        message: "Succesfully fetched the data",
        data: students
    });
})

// GET API BY ID
app.get('/api/v1/students/:id', (request, response) => {
    const id = request.params.id;

    const foundItem = students.find((item) => {
        if (item.id == id) {
            return true;
        }
    })

    if (!foundItem) {
        // 404 --> Resource Not Found
        return response.status(404).json({
            message: "Student not found!",
            data: {}
        })
    }

    return response.status(200).json({
        message: "Student succesfully found!",
        data: foundItem
    });

})

// POST API
app.post('/api/v1/students', (request, response) => {
    const incomingData = request.body;

    if (!incomingData.name || !incomingData.college || !incomingData.age || !incomingData.rollNumber) {

        // 500 --> Whenever client sends incorrect format of data, or there is some issue in database we send 500 error (Internal server error)
        return response.status(500).json({
            message: "One of the information is missing!"
        })
    }

    students.push({...incomingData, id: Math.random()});

    // 201 ---> When a new resource is created we give 201 status code
    return response.status(201).json({
        message: "Succesfully created a student!",
        data: incomingData
    });
})



// PUT API
// When you want to update a data!
app.put('/api/v1/students/:id', (request, response) => {
    const incomingData = request.body;
    const id = request.params.id;

    if (!incomingData.name || !incomingData.college || !incomingData.age || !incomingData.rollNumber) {

        // 500 --> Whenever client sends incorrect format of data, or there is some issue in database we send 500 error (Internal server error)
        return response.status(500).json({
            message: "One of the information is missing!"
        })

    }

    // .map of an array
    let updatedStudents = students.map(function(item) {
        console.log(item);
        if (item.id == id) {

            item = incomingData;
        }
        return item;
    })

    // console.log(updatedStudents, 'value');

    return response.status(200).json({
        message: "Succesfully updated the students!",
        data: updatedStudents
    })
})


// DELETE API
app.delete('/api/v1/students/:id', (request, response) => {
    const id = request.params.id;

    // pop is used to delete a value from the array but it only deletes the last value
    // Filter
    // splice functionality

    let index = students.findIndex((item) => item.id == id);

    if (index === -1) {
        return response.status(404).json({
            message: "Given student not found!"
        })
    } else {
        students.splice(index, 1);
    }

    return response.status(200).json({
        message: "Succesfully deleted",
        data: students
    })
})

app.listen(PORT, (request, response) => {
    console.log(`Server running at port ${PORT}`)
})

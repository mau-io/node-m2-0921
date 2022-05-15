const http = require('http');
const fs = require('fs');
const PORT = 5000;


// Status Code is a way to determine the type of response
// 200 --> Give a succesfull response
// 401 --> This is an error response for not authorized

const server = http.createServer((request, response) => {


    if (request.url === "/") {
       fs.rename("index.html", 'home.html', (error) => {

           if (error) {
               throw error;
           }
        //    response.writeHead(404, { 'Content-type': 'text/html'});
        //    response.write(data);
           console.log("File Renamed!");
           response.write("File Renamed");
           return response.end();
       })
    }

    // Try to use File system module to test
    // a. Read (should be on http://localhost:5000/read)

    if (request.url === "/read") {
        fs.readFile('home.html', (error, data) => {
            if (error) {
                throw error;
            }
            response.writeHead(200, { 'Content-type': 'text/html'});
            response.write(data);
            return response.end();
        })
    }

    // b. Update (should be on http://localhost:5000/update)
    if (request.url === "/update") {
        fs.writeFile('home.html', '<h1>This is a new file</h1>', (error) => {
            if (error) {
                throw error;
            }
            response.writeHead(200, { 'Content-type': 'text/html'});
            response.write("File Updated");
            return response.end();
        })
    }

    // c. Delete (should be on http://localhost:5000/delete)
    if (request.url === "/delete") {
        fs.unlink('home.html', (error) => {
            if (error) {
                throw error;
            }
            response.writeHead(200, { 'Content-type': 'text/html'});
            response.write("File Deleted");
            return response.end();
        })
    }
    // d. Create (should be on http://localhost:5000/create)
    if (request.url === "/create") {
        fs.writeFile('home.html', '<h1>This is a new file</h1>', (error) => {
            if (error) {
                throw error;
            }
            response.writeHead(200, { 'Content-type': 'text/html'});
            response.write("File Created");
            return response.end();
        })
    }
    // e. Rename (should be on http://localhost:5000/rename)
    if (request.url === "/rename") {
        fs.rename('home.html', 'home.html', (error) => {
            if (error) {
                throw error;
            }
            response.writeHead(200, { 'Content-type': 'text/html'});
            response.write("File Renamed");
            return response.end();
        })
    }
})

server.listen(PORT, (request, response) => {
    console.log(`Server running at port ${PORT}`);
})
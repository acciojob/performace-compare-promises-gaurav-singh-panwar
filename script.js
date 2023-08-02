// Array of API URLs to fetch data from
const apiUrls = [
   "https://jsonplaceholder.typicode.com/todos/1",
   "https://jsonplaceholder.typicode.com/todos/2",
   "https://jsonplaceholder.typicode.com/todos/3",
   "https://jsonplaceholder.typicode.com/todos/4",
   "https://jsonplaceholder.typicode.com/todos/5",
   "https://jsonplaceholder.typicode.com/todos/6",
   "https://jsonplaceholder.typicode.com/todos/7",
   "https://jsonplaceholder.typicode.com/todos/8",
   "https://jsonplaceholder.typicode.com/todos/9",
   "https://jsonplaceholder.typicode.com/todos/10",
 ];
 

 async function fetchApiData(url) {
   const response = await fetch(url);
   return response.json();
 }
 
 async function all() {
   console.time('all'); // Start the timer for 'all()' function
 
   const promises = apiUrls.map(url => fetchApiData(url));
   const results = await Promise.all(promises);
 
   console.timeEnd('all'); // Stop the timer for 'all()' function
   return results;
 }
 
 async function any() {
   console.time('any'); // Start the timer for 'any()' function
 
   const promises = apiUrls.map(url => fetchApiData(url));
   const result = await Promise.any(promises);
 
   console.timeEnd('any'); // Stop the timer for 'any()' function
   return result;
 }
 
 // Call the function and store the calculated time
 (async function () {
   timeTakenForAll = await calculateTimeTaken(all);
 
   timeTakenForAny = await calculateTimeTaken(any);
 
   let outputAllTag = document.getElementById('output-all');
   let outputAnyTag = document.getElementById('output-any');
   outputAllTag.innerText =  timeTakenForAll.timeTaken;
   outputAnyTag.innerText =  timeTakenForAny.timeTaken;
 })();
  
 // Function to calculate time taken by a function to execute
 async function calculateTimeTaken(func) {
   const startTime = performance.now();
   const result = await func();
   const endTime = performance.now();
   const timeTaken = endTime - startTime;
 
   return { result, timeTaken, results: result };
 }
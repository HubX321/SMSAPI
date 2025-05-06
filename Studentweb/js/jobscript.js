
const JOB_API_LINK =  "https://psychic-space-orbit-q7px94pvpg9x3xrr-5001.app.github.dev/jobs"

fetch(JOB_API_LINK).then(response=>{
if(!response.ok)
    throw new Error ("Failed to fetch data");
return response.json();
}).then(data=> {

    const tbody = document.querySelector("#jobtable tbody");

    data.forEach(jobs=>{
const row = document.createElement("tr");

row.innerHTML=
 ` <td>${jobs.job_id }</td> 
 <td>${jobs.job_title }</td> 
<td>${jobs.min_salary}</td> 
<td>${jobs.max_salary }</td> 
`;
tbody.appendChild(row);
    });

}).catch(err=>{
    console.log(err.message);

});
    

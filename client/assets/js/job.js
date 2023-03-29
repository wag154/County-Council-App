
const displayJobs = async(data)=>{
  data.forEach(e=>{
    const container = document.createElement("div");
    const jobTitle = document.createElement("h1");
    const jobContent = document.createElement("p1");
    const applyButton = document.createElement("button");
    
    applyButton.onclick = ()=>{} //func here
    jobTitle.textContent = e.title;
    jobContent.innerHTML = `${e.description}`;
    applyButton.textContent = "Apply";

    container.appendChild(jobTitle);
    container.appendChild(jobContent);
    container.appendChild(applyButton);

    container.classList.add("JobBox");
    document.getElementById("JobDisplay").appendChild(container);
  })
}
const getJobs = async()=>{
  try{
   const options = {
    method:"GET"
   }
    const resp = fetch("https://council-app-backend.onrender.com/jobs",options)
    const data =  await (await resp).json()
    displayJobs(data)
  }
  catch {
    console.log("Unable to get jobs")
  }
}
getJobs()

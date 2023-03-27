const db = require ("../database/connect");

class Jobs {
  constructor(jobs_id,job_title,job_description, job_contactInfo){
    this.jobs_id = jobs_id;
    this.job_title = job_title;
    this.job_description = job_description;
    this.job_contactInfo = job_contactInfo;
  }
  static async index (){
    try{
      const all = await db.query("SELECT * FROM jobs;");
    }
    catch{
      console.log("Couldn't query from jobs table");
    }
    if (all.rows.length === 0){
      console.log("No jobs at the moment");
    }
    return all.rows.map(e => Jobs(e));
  }
}
module.exports = Jobs;
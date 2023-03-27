const db = require ("../database/connect");

class Jobs {
  constructor(jobs_id,job_title,job_description, job_contactInfo){
    this.id = jobs_id;
    this.job_title = job_title;
    this.job_description = job_description;
    this.job_contactInfo = job_contactInfo;
  }
  static async getAll () {
    const response = await db.query('SELECT * FROM jobs;')
    if(response.rows.length === 0){
      console.log("No current jobs")
    }
    return response.rows.map(job => new Jobs(job))
  }

  static async getOneById (id) {
    const response = await db.query('SELECT * FROM jobs WHERE jobs_id = $1;',[id])
    if(response.rows.length != 1){
      console.log("Job not found")
    }
    return new Items(response.rows[0])
  }

static async create (data) {
  const {job_title, job_description, job_contactInfo} = data;
  let response = await db.query('INSERT INTO jobs (job)job_title, job_description, job_contactInfo) VALUES ($1, $2, $3) RETURNING *;', [job_title, job_description, job_contactInfo]
  );
  const newJob = response.rows[0]
  return new Jobs(newJob) 
}

async update (data) {
  let response = await db.query('UPDATE jobs SET job_title = $1, job_description = $2, job_contactInfo = $3 WHERE jobs_id = $4 RETURNING *;', [job_title, this.job_description, this.job_description, this.id]);
  if(response.rows.length!= 1){
    throw new Error('Cannot update job')
  }
  const updatedJob = response.rows[0];
  return new Jobs(updatedJob)
}

async destroy() {
const response = await db.query('DELETE FROM jobs WHERE jobs_id = $1 RETURNING *;', [this.id]
)
return new Items(response.rows[0])
}
}
module.exports = Jobs;
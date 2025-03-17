import { useEffect, useState } from "react";
import styles from "../styles/JobListings.module.css";
import ParticleBackground from "./ParticleBackground";
const JobListings = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("https://www.themuse.com/api/public/jobs?page=1");
        const data = await response.json();
        setJobs(data.results);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  return (
<div><ParticleBackground />

    <div className={styles.gridContainer} >
    <h1>Latest Job Listings</h1>
    <div></div>
    <div></div>
      {jobs.map((job) => (
        <div key={job.id} className={styles.card}>
          <div className={styles.header}>
            <img
              src={"https://th.bing.com/th/id/OIP.QgTdWf-SgYULyOu_KvswYQHaHa?w=1920&h=1920&rs=1&pid=ImgDetMain"}
              alt={job.company?.name || "Company Logo"}
              className={styles.logo}
            />
            <div>
              <h2>{job.company?.name || "Unknown Company"}</h2>
              <p>📍 {job.locations?.[0]?.name || "Remote"}</p>
            </div>

            <span className={styles.salary}>
              {job.metadata?.find((m) => m.name === "salary")?.value || "N/A"}
            </span>
          </div>

          <h3>{job.name}</h3>

          <div className={styles.skills}>
            {job.refs?.tags?.map((tag, index) => (
              <span key={index} className={styles.skill}>
                {tag}
              </span>
            ))}
          </div>

          <div className={styles.footer}>
            <p>📅 Posted: {new Date(job.publication_date).toDateString()}</p>
            <a href={job.refs?.landing_page} target="_blank" rel="noopener noreferrer" className={styles.detailsBtn}>
              🔍 Check Details
            </a>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default JobListings;

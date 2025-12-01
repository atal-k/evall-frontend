// ============================================================================
// FILE: src/components/sections/careers/JobOpeningSection.js (with JobCard)
// ============================================================================
import React, { useState, useEffect, useRef } from "react";
import { careersData } from "../../../data/careersData";
import styles from './JobOpeningSection.module.css'

const JobCard = ({ job }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const departmentColors = {
      Sales: '#FF6B35',
      Engineering: '#4E54C8',
      Technology: '#8E2DE2'
    };
  
    const departmentIcons = {
      Sales: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 32 32">
              <path fill="currentColor" d="M30 6V4h-3V2h-2v2h-1c-1.103 0-2 .898-2 2v2c0 1.103.897 2 2 2h4v2h-6v2h3v2h2v-2h1c1.103 0 2-.897 2-2v-2c0-1.102-.897-2-2-2h-4V6zm-6 14v2h2.586L23 25.586l-2.292-2.293a1 1 0 0 0-.706-.293H20a1 1 0 0 0-.706.293L14 28.586L15.414 30l4.587-4.586l2.292 2.293a1 1 0 0 0 1.414 0L28 23.414V26h2v-6zM4 30H2v-5c0-3.86 3.14-7 7-7h6c1.989 0 3.89.85 5.217 2.333l-1.49 1.334A5 5 0 0 0 15 20H9c-2.757 0-5 2.243-5 5zm8-14a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-12a5 5 0 1 1 0 10a5 5 0 0 1 0-10" />
            </svg>,
      Engineering: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M1.05 21v-2.8q0-.825.425-1.55t1.175-1.1q1.275-.65 2.875-1.1T9.05 14t3.525.45t2.875 1.1q.75.375 1.175 1.1t.425 1.55V21zm8-8q-1.65 0-2.825-1.175T5.05 9H4.8q-.225 0-.362-.137T4.3 8.5t.138-.363T4.8 8h.25q0-1.125.55-2.025T7.05 4.55v.95q0 .225.138.363T7.55 6t.363-.137t.137-.363V4.15q.225-.075.475-.112T9.05 4t.525.038t.475.112V5.5q0 .225.138.363T10.55 6t.363-.137t.137-.363v-.95q.9.525 1.45 1.425T13.05 8h.25q.225 0 .363.138t.137.362t-.137.363T13.3 9h-.25q0 1.65-1.175 2.825T9.05 13m0-2q.825 0 1.413-.587T11.05 9h-4q0 .825.588 1.413T9.05 11m7.5 4l-.15-.75q-.15-.05-.287-.112t-.263-.188l-.7.25l-.5-.9l.55-.5v-.6l-.55-.5l.5-.9l.7.25q.1-.1.25-.175t.3-.125l.15-.75h1l.15.75q.15.05.3.125t.25.175l.7-.25l.5.9l-.55.5v.6l.55.5l-.5.9l-.7-.25q-.125.125-.262.188t-.288.112l-.15.75zm.5-1.75q.3 0 .525-.225t.225-.525t-.225-.525t-.525-.225t-.525.225t-.225.525t.225.525t.525.225m1.8-3.25l-.2-1.05q-.225-.075-.412-.187T17.9 8.5l-1.05.35l-.7-1.2l.85-.75q-.05-.125-.05-.2v-.4q0-.075.05-.2l-.85-.75l.7-1.2l1.05.35q.15-.15.338-.263t.412-.187l.2-1.05h1.4l.2 1.05q.225.075.413.188t.337.262l1.05-.35l.7 1.2l-.85.75q.05.125.05.2v.4q0 .075-.05.2l.85.75l-.7 1.2l-1.05-.35q-.15.15-.337.263t-.413.187l-.2 1.05zm.7-2.25q.525 0 .888-.363T20.8 6.5t-.363-.888t-.887-.362t-.888.363t-.362.887t.363.888t.887.362" />
                    </svg>,
      Technology: <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 14 14">
                    <path fill="currentColor" fill-rule="evenodd" d="M7.527 9.331a5 5 0 0 0 1.49-1.319a2 2 0 0 1-.273-.661l-.019-.088a1.29 1.29 0 0 0-1.042-.998c-2.072-.36-2.072-3.334 0-3.695a1.29 1.29 0 0 0 1.03-.948a5 5 0 1 0-6.187 7.709V10.5a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1zm-5 3.919a.75.75 0 0 1 .75-.75h3.5a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75m7.28-11.533C9.99.881 11.18.876 11.37 1.71l.009.04l.018.078a2.4 2.4 0 0 0 1.921 1.812c.872.152.872 1.404 0 1.556a2.4 2.4 0 0 0-1.925 1.827l-.023.102c-.19.835-1.381.83-1.565-.007l-.019-.087A2.38 2.38 0 0 0 7.87 5.194c-.871-.151-.871-1.401 0-1.553a2.38 2.38 0 0 0 1.915-1.826L9.8 1.75z" clip-rule="evenodd" />
                  </svg>
    };
  
    return (
      <div className={styles['job-card']}>
        <div
          className={styles['job-icon']}
          style={{ backgroundColor: `${departmentColors[job.department]}15` }}
        >
          <span style={{ color: departmentColors[job.department] }}>
            {departmentIcons[job.department]}
          </span>
        </div>
    
        <div className={styles['job-header']}>
          <h3 className={styles['job-title']}>{job.title}</h3>
    
          <div className={styles['job-meta']}>
            <span className={`${styles['job-badge']} ${styles['location']}`}>{job.location}</span>
            <span className={`${styles['job-badge']} ${styles['type']}`}>{job.type}</span>
            <span className={`${styles['job-badge']} ${styles['experience']}`}>{job.experience}</span>
          </div>
        </div>
    
        <p className={styles['job-description']}>
          {isExpanded ? job.description : `${job.description.slice(0, 150)}...`}
        </p>
    
        {isExpanded && (
          <div className={styles['job-responsibilities']}>
            <h4>Key Responsibilities:</h4>
            <ul>
              {job.responsibilities.map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        )}
    
        <div className={styles['job-actions']}>
          <button className={styles['btn-apply']}>Apply Now</button>
    
          <button
            className={styles['btn-details']}
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less' : 'View Details'}
          </button>
        </div>
      </div>
    );    
  };
  
  const JobOpeningSection = () => {
    const [filter, setFilter] = useState('All');
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
  
    useEffect(() => {
      const element = sectionRef.current;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );
    
      if (element) {
        observer.observe(element);
      }
    
      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }, []);
  
    const departments = ['All', 'Sales', 'Engineering', 'Technology'];
    const filteredJobs = filter === 'All' 
      ? careersData.jobOpenings 
      : careersData.jobOpenings.filter(job => job.department === filter);
  
    const jobCount = filteredJobs.length;
    return (
      <section
        id="job-openings"
        className={styles['job-openings-section']}
        ref={sectionRef}
      >
        <div className={styles['job-openings-container']}>
    
          <div
            className={`${styles['section-header']} ${
              isVisible ? styles['fade-in-up'] : ''
            }`}
          >
            <h2 className={styles['section-title']}>Be The ChangeMaker: Job Openings</h2>
            <p className={styles['section-subtitle']}>Current Opportunities At EVall Mobility</p>
          </div>
    
          <div
            className={`${styles['job-filters']} ${
              isVisible ? `${styles['fade-in-up']} ${styles['delay-1']}` : ''
            }`}
          >
            {departments.map((dept) => (
              <button
                key={dept}
                className={`${styles['filter-btn']} ${
                  filter === dept ? styles['active'] : ''
                }`}
                onClick={() => setFilter(dept)}
              >
                {dept}
              </button>
            ))}
          </div>
    
          <div
            className={`${styles['job-grid']} ${
              jobCount <= 2 ? styles['centered'] : ''
            }`}
          >
            {filteredJobs.map((job, idx) => (
              <div
                key={job.id}
                className={`${styles['job-card-wrapper']} ${
                  isVisible ? styles['fade-in-up'] : ''
                }`}
                style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
              >
                <JobCard job={job} />
              </div>
            ))}
          </div>
        </div>
      </section>
    );    
  };

export default JobOpeningSection;
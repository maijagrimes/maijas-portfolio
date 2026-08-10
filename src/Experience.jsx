import { useState } from 'react'
import './style.css'
import './experience.css'

import Dropdown from './Dropdown'

function JobCard({ job }) {
    const { title, dateRange, hours, department, company, responsibilities, tools, skills, highlight } = job
    return (
        <div className='job'>
            <div className='job-top'>
                <h2>{title}</h2>
                <div className='job-dates'>
                    <p>{dateRange}</p>
                    {hours && <p className='hours'>{hours}</p>}
                </div>
            </div>

            <div className='job-meta'>
                <h3 className='department'>
                    <span>Department: </span>
                    <Dropdown label={department.name}>{department.description}</Dropdown>
                </h3>
                <h3 className='company'>
                    <span>Company: </span>
                    <Dropdown label={company.name}>{company.description}</Dropdown>
                </h3>
            </div>

            <div className='job-body'>
                <div className='job-col' style={{flex: 3}}>
                    <h4>Responsibilities</h4>
                    <ul>
                        {responsibilities.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                </div>

                <div className='job-col'>
                    <h4>Tools</h4>
                    <ul>
                        {tools.map((r, i) => <li key={i}>{r}</li>)}
                    </ul>
                </div>

                <div className='job-col'>
                    <h4>Skills</h4>
                    <div className='skill-tags'>
                        {skills.map((skill) => <span className='skill-tag' key={skill}>{skill}</span>)}
                    </div>
                </div>
            </div>

            {highlight && (
                <div className='job-highlight'>
                    <p><span>💛 What I enjoyed most: </span>{highlight}</p>
                </div>
            )}
        </div>
    )
}

const jobs = [
    {
        title: 'Student I.T. Analyst',
        dateRange: 'July 2024 - Present',
        department: {
            name: 'Identity & Access Management',
            description: (
                <>
                    Provides campus-relevant services supporting entity identification, authentication,
                    entitlement, and authorization for campus applications and resources. Team of 20–30 staff,
                    plus a group of ~5–10 student employees.
                </>
            ),
        },
        company: {
            name: 'University of Colorado Boulder',
            description: 'Large public research university with records and databases of ~40,000 students and ~4,000 staff members.',
        },
        responsibilities: [
            'Diagnose and resolve authentication and identity issues (MFA, SSO) across a university-wide user base',
            'Work hands-on with IAM platforms including Azure, Oracle, Grouper, and RabbitMQ to investigate and fix access issues',
            'Build and troubleshoot composite group logic in Grouper to manage nuanced, rule-based access (e.g. exclusion rules for specific campus services)',
            'Off-hold and work escalated support cases, tracking trends and updating internal knowledge base documentation',
            'Collaborate with staff and student teammates in an Agile framework, delivering improvements in two-week sprints',
        ],
        tools: [
            'Oracle',
            'Grouper',
            'RabbitMQ',
            'MySQL',
            'Microsoft Teams',
            'DUO Admin'
        ],
        skills: ['Access Control', 'Troubleshooting', 'Identity Management', 'SSO / MFA', 'Documentation', 'Agile'],
        highlight: ''
    },
    {
        title: 'Data & Membership Analyst',
        dateRange: 'July 2024 - May 2025',
        department: {
            name: 'Higher Education Alliance',
            description: (
                <>
                    A network of university-based programs working to increase the number of women earning
                    computing degrees, spanning member institutions across the U.S.
                </>
            ),
        },
        company: {
            name: 'National Center for Women & Info. Tech.',
            description: (
                <>
                    A national nonprofit coalition of universities, companies, and organizations working to
                    increase women's meaningful participation in computing. Headquartered at CU Boulder.
                </>
            ),
        },
        responsibilities: [
            'Managed and cleaned large membership datasets using Excel, Airtable, and SuiteCRM',
            'Maintained data integrity across systems to support internal reporting and research initiatives',
            'Built reports in SuiteCRM to track membership trends for the HigherEd Alliance team',
            'Conducted research on member institutions and individuals to improve data accuracy',
            'Collaborated with the team using Slack and Wrike to keep projects on track',
        ],
        tools: [
            'Excel',
            'Google Sheets',
            'SuiteCRM',
            'Wrike',
            'Slack',
            'Airtable',
        ],
        skills: ['Data Cleaning', 'Data Analysis', 'CRM Management', 'Reporting', 'Research', 'Collaboration'],
        highlight: '',
    },
]

export default function Experience() {
    return (
        <section className='experience' id='experience'>
            <h1>Professional Experience</h1>
            {jobs.map((job) => <JobCard job={job} key={job.title} />)}
        </section>
    )
}
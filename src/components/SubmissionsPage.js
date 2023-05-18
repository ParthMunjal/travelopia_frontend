import React, { useEffect, useState } from 'react';

function SubmissionsPage() {
    const [submissions, setSubmissions] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/submissions/')
        .then(response => response.json())
        .then(data => {
            setSubmissions(data);
            console.log(data);
        })
        .catch(err => {
            console.error('Error fetching submissions: ', err);
        });

    }, [])

    return (
        <>
        <h1>Submissions</h1>
        <h3>This page displays all the submissions made till date</h3>
        <div className = 'SubmissionsPage'>
            <ul>
                {submissions.map((submission, index) => (
                    <li key={index}>
                        Name: {submission.name},
                        Email: {submission.email},
                        Destination: {submission.destination},
                        Travelers: {submission.travelers}, 
                        Budget: ${submission.budget}
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default SubmissionsPage;

import Edit from "./Buttons/Edit";
import Submit from "./Buttons/Submit";
import Education from "./Education";
import Experience from "./Experience";
import GeneralInfo from "./GeneralInfo";
import { useState } from "react";

function CVForm() {

    const [cvData, setCvData] = useState({
        generalInfo: {
            name: 'kelly cochran',
            email: 'kac1011@icloud.com',
            phone: '8438225482'
        },
        education: [{
            id: 0,
            school: 'clemson',
            degree: 'cs',
            graduationYear: '2025'
        }],
        experience: [{
            id: 0,
            title: 'software development intern',
            company: 'lpl financial',
            startDate: '6/2024',
            endDate: '8/2024'
        }],
    })

    const handleGeneralInfoChange = (e) => {
        setCvData({
            ...cvData,
            generalInfo: {
                ...cvData.generalInfo,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleEducationChange = (e) => {
        setCvData({
            ...cvData,
            education: cvData.education.map(edu => {
                if (edu.id === Number(e.target.id)) {
                    return {
                        ...edu,
                        [e.target.name]: e.target.value
                    }
                }
                return edu;
            })
        })
    }

    const handleExperienceChange = (e) => {
        setCvData({
            ...cvData,
            experience: cvData.experience.map(exp => {
                if (exp.id === Number(e.target.id)) {
                    return {
                        ...exp,
                        [e.target.name]: e.target.value
                    }
                }
                return exp;
            })
        })
    }

    const [editMode, setEditMode] = useState(false);

    const toggleEditMode = () => {
        setEditMode(!editMode);
    }
    
    return (
        <>
            <h1>cv form</h1>
            <GeneralInfo data={cvData.generalInfo} onChange={handleGeneralInfoChange} editMode={editMode}/>
            <Education data={cvData.education} onChange={handleEducationChange} editMode={editMode}/>
            <Experience data={cvData.experience} onChange={handleExperienceChange} editMode={editMode}/>
            {editMode ? <Submit onClick={toggleEditMode}/> : <Edit onClick={toggleEditMode}/>}
        </>
    )
}

export default CVForm;
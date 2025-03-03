function Education({data, onChange, editMode}) {
    return (
        <>
            <h4>education</h4>
            {editMode ? (
                    data.map(edu => (
                        <div key={edu.id}>
                            <div>
                                school<input type="text" name="school" value={edu.school} onChange={onChange}/>
                            </div>
                            <div>
                                degree<input type="text" name="degree" value={edu.degree} onChange={onChange}/>
                            </div>
                            <div>
                                graduation year<input type="text" name="grad year" value={edu.graduationYear} onChange={onChange}/>
                            </div>
                        </div>
                    ))
            ) : (
                    data.map(edu => (
                        <div key={edu.id}>
                            <p>school: {edu.school}</p>
                            <p>degree: {edu.degree}</p>
                            <p>graduation year: {edu.graduationYear}</p>
                        </div>
                    ))
            )}
        </>
    );
}

export default Education;
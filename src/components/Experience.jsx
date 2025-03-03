function Experience({data, onChange, editMode}) {
    return (
        <>
            <h4>experience</h4>
            {editMode ? ( 
                data.map(exp => (
                    <div key={exp.id}>
                        <div>
                            title<input type="text" name="title" value={exp.title} onChange={onChange}/>
                        </div>
                        <div>
                            company<input type="text" name="company" value={exp.company} onChange={onChange}/>
                        </div>
                        <div>
                            start date<input type="text" name="startDate" value={exp.startDate} onChange={onChange}/>
                        </div>
                        <div>
                            end date<input type="text" name="endDate" value={exp.endDate} onChange={onChange}/>
                        </div>
                    </div>
                ))
            ) : (
                data.map(exp => (
                    <div key={exp.id}>
                        <p>title: {exp.title}</p>
                        <p>company: {exp.company}</p>
                        <p>start date: {exp.startDate}</p>
                        <p>end date: {exp.endDate}</p>
                    </div>
                ))
            )}
        </>
    )
}

export default Experience;
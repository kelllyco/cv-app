function GeneralInfo({data, onChange, editMode}) {
    return (
        <>
            <h4>general info</h4>
            {editMode ?
            <>
                <div>
                    name
                    <input type="text" name="name" value={data.name} onChange={onChange}/>
                </div>
                <div>
                    email
                    <input type="text" name="email" value={data.email} onChange={onChange}/>
                </div>
                <div>
                    phone
                    <input type="text" name="phone" value={data.phone} onChange={onChange} placeholder="Phone"/>
                </div>
            </>
            :
            <div>
                <p>name: {data.name}</p>
                <p>email: {data.email}</p>
                <p>phone: {data.phone}</p>
            </div>
    }

        </>
    )
}

export default GeneralInfo;
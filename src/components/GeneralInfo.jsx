function GeneralInfo({data, onChange, editMode}) {
    return (
        <>
            <h4>general info</h4>
            {editMode ?
            <form>
                <div className="mb-2">
                    <label for ="name" className="form-label">name</label>
                    <input class="form-control" type="text" id="name" value={data.name} onChange={onChange}/>
                </div>
                <div className="mb-2">
                    <label for="email" className="form-label">email</label>
                    <input class="form-control" type="text" id="email" value={data.email} onChange={onChange}/>
                </div>
                <div className="mb-2">
                    <label for="phone" className="form-label">phone</label>
                    <input class="form-control" type="text" id="phone" value={data.phone} onChange={onChange} placeholder="Phone"/>
                </div>
            </form>
            :
            <div>
                <div>{data.name}</div>
                <div>{data.email}</div>
                <div>{data.phone}</div>
            </div>
    }

        </>
    )
}

export default GeneralInfo;
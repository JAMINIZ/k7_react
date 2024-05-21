export default function TailSelect({id, ops, selRef, initText, handleChange}) {
    const opTag = ops.map(item => 
                    <option key={item}
                            value={item}>{item}</option>
    );

    return (
        <div>
            <select id={id}
                onChange={handleChange} ref={selRef}> 
                <option defaultValue={""}>{initText}</option>
                {opTag}        
            </select>
        </div>
    )
}

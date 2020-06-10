import React from 'react';

export function Checkbox({onChange, checked, title, dataId}) {
    return (
        <>
            <div className = "Small-checkbox">


            <input type="checkbox" onChange={onChange} title={title} checked={checked} dataId={dataId}/>
                <label>{title}</label>
            </div>
        </>
    );
}
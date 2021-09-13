import React from 'react'
import { IconButton } from '@material-ui/core'
import { MdModeEdit } from 'react-icons/md'


const Edit_Icon = (props) => {

    return (
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton className={props.cName} onClick={props.OnClick}><MdModeEdit fontSize={18} /></IconButton>
        </div>
    )
}

export default Edit_Icon

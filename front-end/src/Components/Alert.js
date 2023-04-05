import React, { useContext, useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from '../Context/Context';

const Alert = () => {
    const {ref,alert} = useContext(Context);
    const notify = () => toast(alert);
    return (
        <div>
            <button style={{display:"none"}} ref={ref} onClick={notify}>Notify!</button>
            <ToastContainer position='top-center' />
        </div>

    )
}

export default Alert

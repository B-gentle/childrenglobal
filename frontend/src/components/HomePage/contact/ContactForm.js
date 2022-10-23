import React, { useRef, useState, useReducer } from 'react';
import { Snackbar, Button } from '@mui/material';
import emailjs from '@emailjs/browser';

const ContactForm = ({heading}) => {

    const reducer = (state, action) => {
        switch (action.type) {
            case 'SUCCESS':
                return {...state, pending: false}
            case 'PENDING':
                return { ...state, pending: true }
            case 'ERROR':
                return {...state, error: true, pending: false}

            default:
                break;
        }
    }

    const form = useRef();
    const [{ pending, error }, dispatch] = useReducer(reducer, { pending: false, error: false })
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const sendEmail = (e) => {
        e.preventDefault();
        dispatch({ type: 'PENDING' });

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                dispatch({type: 'SUCCESS'})
                setOpen(true);
                form.current.reset();
            }, (error) => {
                dispatch({type: 'ERROR'})
                setOpen(true);
                setTimeout(() => {
                    form.current.reset();
                }, 5000)
            });
    };

    return (
        <div className='contact-form'>
            <h4>{heading}</h4>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" placeholder='Full Name' name="full_name" required />
                <input type="email" placeholder='email address' name="user_email" required />
                <textarea placeholder='message' name='message' required></textarea>
                <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}
                    sx={{
                        position: 'relative',
                        marginTop: '24px',
                        padding: '13px 14px'
                    }}>
                    <Button variant="contained" color={error ? 'error' : 'success'}
                        sx={{ width: '90%' }}>{error ? 'Error Sending' : 'Sent'}</Button>
                </Snackbar>
                <button className='form-button' type='submit'>{pending ? 'Sending' : 'Submit'}</button>
            </form>
        </div>
    )
}

export default ContactForm
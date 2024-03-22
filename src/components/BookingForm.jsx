import React from 'react'
import '../styles/BookingForm.css'
import {validationSchema} from "../validations/UserValidation";
import {useFormik} from "formik";

const BookingForm = (props) => {

    const onSubmit = async (values, actions) => {
        console.log('submitted')
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
        props.submitForm(actions);
    }

    const {values, errors, handleBlur, touched, isSubmitting, handleChange, handleSubmit} = useFormik({
        initialValues: {

            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
            age: '',
            gender: 'selectGender',
            interests: [],
            birthDate: '',
            bookDate: '',
            bookTimes: 'Select a Time',
            bookGuests: '',
            bookOccasion: '',
        },

        validationSchema: validationSchema,
        onSubmit,
    });
    console.log(errors);


    return (
        <header className='booking-form'>
            <section>
                <form onSubmit={handleSubmit} className='booking-form-container'>
                    <fieldset className='formField'>
                        <div className='formField-content'>
                            <div className='booking-form-firstName'>
                                <label>First Name:</label>
                                <input
                                    id='firstName'
                                    type='text'
                                    name='firstName'
                                    value={values.firstName}
                                    placeholder='First Name'
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.firstName && touched.firstName ? 'input-error' : ''}
                                />
                                {errors.firstName && touched.firstName && <p className='error'>{errors.firstName}</p>}
                            </div>
                            <div className='booking-form-lastName'>
                                <label>Last Name:</label>
                                <input
                                    id='lastName'
                                    type='text'
                                    name='lastName'
                                    value={values.lastName}
                                    placeholder='Last Name'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className={errors.lastName && touched.lastName ? 'input-error' : ''}
                                />
                                {errors.lastName && touched.lastName && <p className='error'>{errors.lastName}</p>}
                            </div>
                            <div className='booking-form-email'>
                                <label>Email:</label>
                                <input
                                    id='email'
                                    type='email'
                                    name='email'
                                    value={values.email}
                                    placeholder='Email'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className={errors.email && touched.email ? 'input-error' : ''}
                                />
                                {errors.email && touched.email && <p className='error'>{errors.email}</p>}
                            </div>
                            <div className='booking-form-phoneNumber'>
                                <label>Phone Number:</label>
                                <input
                                    id='phoneNumber'
                                    type='text'
                                    name='phoneNumber'
                                    value={values.phoneNumber}
                                    placeholder='Phone Number'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className={errors.phoneNumber && touched.phoneNumber ? 'input-error' : ''}
                                />
                                {errors.phoneNumber && touched.phoneNumber &&
                                    <p className='error'>{errors.phoneNumber}</p>}
                            </div>
                            <div className='booking-form-password'>
                                <label>Password:</label>
                                <input
                                    id='password'
                                    type='password'
                                    name='password'
                                    value={values.password}
                                    placeholder='Password'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className={errors.password && touched.password ? 'input-error' : ''}
                                />
                                {errors.password && touched.password && <p className='error'>{errors.password}</p>}
                            </div>
                            <div className='booking-form-confirmPassword'>
                                <label>Confirm Password:</label>
                                <input
                                    id='confirmPassword'
                                    type='password'
                                    name='confirmPassword'
                                    value={values.confirmPassword}
                                    placeholder='Confirm Password'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className={errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''}
                                />
                                {errors.confirmPassword && touched.confirmPassword &&
                                    <p className='error'>{errors.confirmPassword}</p>}
                            </div>
                            <div className='booking-form-age'>
                                <label>Confirm Age:</label>
                                <input
                                    id='age'
                                    type='number'
                                    name='age'
                                    value={values.age}
                                    placeholder='Age'
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className={errors.age && touched.age ? 'input-error' : ''}
                                />
                                {errors.age && touched.age && <p className='error'>{errors.age}</p>}
                            </div>
                            <div className='booking-form-gender'>
                                <label>Gender:</label>
                                <select id='gender' name='gender' value={values.gender} onBlur={handleBlur}
                                        onChange={handleChange}
                                        className={errors.gender && touched.gender ? 'input-error' : ''}>
                                    <option id='selectGender' value='Select Gender'>Gender</option>
                                    <option id='male' value='male'>Male</option>
                                    <option id='female' value='female'>Female</option>
                                </select>
                                {errors.gender && touched.gender && <p className='error'>{errors.gender}</p>}
                            </div>
                            <div className='booking-form-interests'>
                                <label>Interests:</label>
                                    <label htmlFor='coding'><input type='checkbox' name='coding' onChange={handleChange}
                                                                   value={values.interests.includes('coding')}/>    Coding</label>
                                    <label htmlFor='sports'><input type='checkbox' name='sports' onChange={handleChange}
                                                                   value={values.interests.includes('sports')}/>    Sports</label>
                                    <label htmlFor='reading'><input type='checkbox' name='reading'
                                                                    onChange={handleChange}
                                                                    value={values.interests.includes('reading')}/>  Reading</label>

                            </div>
                            <div className='booking-form-dob'>
                                <label>Date of Birth:</label>
                                <input
                                    id='birthDate'
                                    type='date'
                                    name='birthDate'
                                    value={values.birthDate}
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    className={errors.birthDate && touched.birthDate ? 'input-error' : ''}
                                />
                                {errors.birthDate && touched.birthDate && <p className='error'>{errors.birthDate}</p>}
                            </div>
                            <div className='booking-form-date'>
                                <label htmlFor='book-date'>Choose Date:</label>
                                <input
                                    id='bookDate'
                                    value={values.bookDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    type='date'
                                    className={errors.bookDate && touched.bookDate ? 'input-error' : ''}
                                />
                                {errors.bookDate && touched.bookDate && <p className='error'>{errors.bookDate}</p>}
                            </div>
                            <div className='booking-form-time'>
                                <label htmlFor='bookTimes'>Choose Time:</label>
                                <select
                                    id='bookTimes'
                                    value={values.bookTimes}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.bookTimes && touched.bookTimes ? 'input-error' : ''}
                                >
                                    <option value='Select a Time'>Select a Time:</option>
                                    <option value='05:00PM'>05:00PM</option>
                                    <option value='06:00PM'>06:00PM</option>
                                    <option value='07:00PM'>07:00PM</option>
                                    <option value='08:00PM'>08:00PM</option>
                                    <option value='09:00PM'>09:00PM</option>
                                    <option value='10:00PM'>10:00PM</option>
                                </select>
                                {errors.bookTimes && touched.bookTimes && <p className='error'>{errors.bookTimes}</p>}
                            </div>
                            <div className='booking-form-guests'>
                                <label htmlFor='bookGuests'>Number of Guests:</label>
                                <input
                                    id='bookGuests'
                                    value={values.bookGuests}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.bookGuests && touched.bookGuests ? 'input-error' : ''}
                                />
                                {errors.bookGuests && touched.bookGuests && <p className='error'>{errors.bookGuests}</p>}
                            </div>
                            <div className='booking-form-occasion'>
                                <label htmlFor='bookOccasion'>Occasion:</label>
                                <select
                                    id='bookOccasion'
                                    value={values.bookOccasion}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.bookOccasion && touched.bookOccasion ? 'input-error' : ''}
                                >
                                    <option value=''>Occasion</option>
                                    <option value='Birthday'>Birthday</option>
                                    <option value='Engagement'>Engagement</option>
                                    <option value='Anniversary'>Anniversary</option>
                                </select>
                                {errors.bookOccasion && touched.bookOccasion &&
                                    <p className='error'>{errors.bookOccasion}</p>}
                            </div>
                        </div>
                        <div className='formField-button'>
                            <input aria-disabled={isSubmitting} aria-label='On Click' type='submit'
                                   value='Make Your Reservation'
                                   disabled={isSubmitting}/>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    )
}

export default BookingForm

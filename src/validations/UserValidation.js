import * as yup from 'yup'

export const validationSchema = yup.object().shape({
    firstName: yup.string()
        .min(3, 'FirstName should be at least 3')
        .required('First Name is Required'),
    lastName: yup.string()
        .required('Last Name is Required'),
    email: yup.string()
        .email('Invalid Email Format')
        .required('Email is Required'),
    phoneNumber: yup.string()
        .matches(/^\d{10}$/, 'Phone Number must be 10 digits')
        .required('Phone Number is Needed'),
    password: yup.string()
        .min(5, 'Password should not be less than 5 digits')
        .max(10, 'Password should not be more than 10 digits')
        .required('Password is Required')
        .matches(/[!@#$%^&*(),.?:{}~|<>]/, 'Password must contain at least one symbol')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter'),
    confirmPassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password'),
    age: yup.number()
        .typeError('Age must be a Number')
        .positive()
        .integer()
        .min(18, 'You must be at least 18 Years old')
        .max(100, 'You cannot be older than 100 Years')
        .required('Age is Required'),
    gender: yup.string()
        .oneOf(['male', 'female'], 'Select Gender')
        .required('Gender is Required'),
    interests: yup.array()
        .required('Select at least one interest'),
    birthDate: yup.date()
        .required('Date of Birth is Required'),
    bookDate: yup.date()
        .required('Booking Date is Required'),
    bookTimes: yup.string()
        .oneOf(['05:00PM', '06:00PM', '07:00PM', '08:00PM', '09:00PM', '10:00PM'], 'Select Time')
        .required('Required'),
    bookGuests: yup.number()
        .positive()
        .integer()
        .required('Required')
        .min(2, 'Only You???')
        .max(5, 'It is much now, should be less than 5'),
    bookOccasion: yup.string()
        .oneOf(['Birthday', 'Engagement', 'Anniversary'], 'Select Occasion')
        .required('Required')
})
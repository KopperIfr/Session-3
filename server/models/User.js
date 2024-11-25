import mongoose, { mongo } from 'mongoose';
import validatorModule from 'validator';

const UserSchema = new mongoose.Schema({

    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },

    username: {
        type: String,
        unique: [true, 'Username already exists!'],
        required: [true, 'Username is required!'],
        minLength: [4, 'Username must be at least 4 characters long!'],
        immutable: true,
        uppercase: true
    },

    email: {
        type: String,
        required: [true, 'Username is required!'],
        validate: {
            validator: validatorModule.isEmail,
            message: 'Email address is not valid!'
        }
    },

    password: {
        type: String,
        required: [true, 'Password is required!'],
        validate: {
            validator: (password) => {
                const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                return regex.test(password); // Retorna true si cumple con el patrón
            },
            message: 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.'
        }
    },

    age: {
        default: 0,
        min: [18, 'You must be at least 18'],
        max: [99, 'You are already dead']
    },

    events: {
        type: [String],
        default: []
    }

});


const User = mongoose.model('User', UserSchema);

export default User;
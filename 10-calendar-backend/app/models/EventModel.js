const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
    title: { 
        type: String,
        required: true,
    },
    notes: {
        type: String,
    },
    start: {
        type: String,
        required: true
    },
    end: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    }
}, {
    toJSON: {
        transform: (doc, ret) => {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    }
});


module.exports = model('Event', eventSchema);

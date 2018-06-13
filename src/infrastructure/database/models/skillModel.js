import mongoose from 'mongoose';

const { Schema } = mongoose;

const skillSchema = new Schema({
  skillTitle: {
    type: String,
    required: true,
  },
  certificated: {
    type: Boolean,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Skill', skillSchema);

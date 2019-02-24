import mongoose from 'mongoose';

export const questionSchema = mongoose.Schema();

export const BOOLEAN_TYPE = 1;

questionSchema.add({
  question: String,
  type: Number,
  answers: [
    {
      group: String,
      answer: String,
      creationDate: Date,
    },
  ],
  logicalDelete: Boolean,
});

export default mongoose.model('Question', questionSchema);

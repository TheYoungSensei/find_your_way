import mongoose from 'mongoose';

export const questionSchema = mongoose.Schema();

questionSchema.add({
  question: String,
  answers: [
    {
      id: Number,
      label: String,
    },
  ],
  id: Number,
  correctAnswer: Number,
  logicalDelete: Boolean,
});

export default mongoose.model('Question', questionSchema);

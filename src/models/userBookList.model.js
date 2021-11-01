const mongoose = require("mongoose");

const userBookListSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  book: [{ type: mongoose.Schema.Types.ObjectId, ref: "book", required: true }],
  academic: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "academic",
      required: true,
    },
  ],
});

const UserBookList = new mongoose.model("user_book_list", UserBookListSchema);

module.exports = UserBookList;

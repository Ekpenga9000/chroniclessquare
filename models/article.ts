import { Schema, model, models } from "mongoose";

const ArticleSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: [true, "Please add at least one tag"],
  },
  votes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // article: [
  //     {
  //         type: Schema.Types.ObjectId,
  //         ref: "Article",
  //     },
  // ],
});

const Article = models.Article || model("Article", ArticleSchema);

export default Article;

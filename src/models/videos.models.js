import mongoose, { Schema } from "mongoose"
import aggregatePaginate from "mongoose-aggregate-paginate-v2"
const videoSchema = new Schema({
    videoFile: {
        type: String,
        required: true,
        
        index: true
    },
    thumbnail: {
        type: String,
        required: true,
        unique: true,

    },
    title: {
        type: String,
        required: [true,"password is required"],

    },
    description: {
        type: String,
        required: true,

    },
    duration: {
        type: Number,
        required: true,

    },
    views: {
        type: Number,
        required: true,
        default: 0,

    },
    owner: {
        type: Schema.Types.ObjectId,
        ref:"User"

    },
    isPublished: {
        type: Boolean,
        default: true,

    }



}, {
    timestamps: true
})




videoSchema.plugin(aggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)
import mongoose from 'mongoose'

const PromotionalDetailsSchema = mongoose.Schema({

    // _id: String,
    PromotionalDetails: {
        PromotedFrom: String,
        DateOfPromotion: String,
        PromotedTo: String,
        NewCurrentCTC: String,
    }
}
)

const PromotionalDetails = mongoose.model('PromotionalDetails', PromotionalDetailsSchema)

export default PromotionalDetails;
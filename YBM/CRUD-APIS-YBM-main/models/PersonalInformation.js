import mongoose from 'mongoose'

const PersonalInformationSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    PersonalInformation: {
        FirstName: String,
        LastName: String,
        EmployeeID: String,
        DateOfBirth: String,
        EmailAddress: String,
        OfficialEmailAddress: String,
        CommunicationAddress: String,
        PermanentAddress: String
    }
}
)

const PersonalInformation = mongoose.model('PersonalInformation', PersonalInformationSchema)

export default PersonalInformation;
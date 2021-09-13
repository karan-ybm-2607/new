import mongoose from 'mongoose'

const BasicInformationSchema = mongoose.Schema({
    BasicDetails: {
        OrganizationName: String,
        OrgAddress: {
            FullAddress: String,
            City: String,
            State: String,
            Region: String,
            ZipCode: Number
        },
        TotalEmployees: Number,
        OfficialSite: String,
        TaxInformation: {
            official_PAN: String,
            official_GSTIN: String,
            official_TAN: String
        }
    }
}
)

const BasicInformation = mongoose.model('BasicInformation', BasicInformationSchema)

export default BasicInformation;
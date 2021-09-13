import mongoose from 'mongoose'

const EmploymentDetailsSchema = mongoose.Schema({

    // _id: String,
    EmployeeDetails: {
        Department: String,
        DateOfJoining: String,
        EmployementType: String,
        EmployeeCtc: String,
        Status: String,
        SalaryStructure: String,
        EmployeeID: String
    }
}
)

const EmployementDetails = mongoose.model('EmploymentDetails', EmploymentDetailsSchema)

export default EmployementDetails;
import mongoose from 'mongoose'

const EmployeeDetailsSchema = mongoose.Schema(
    {
        employee_id: String,
        basicDetails: {
            Name: String,
            Address: String,
            ContactInformation: {
                PhoneNo: {
                    Extension: String,
                    PhoneNumber: Number
                },
                Email: String,
                Official_mail_id: String
            }
        },
        NoticePeriod: {
            ServingNoticePeriod: Boolean,
            TotalDaysOfNoticePeriod: Number,
            LastWorkingDay: String
        },
        currentPortfolio: {
            dateOfJoining: String,
            currentWorkingTimePeriod: String,
            currentSalary: Number,
            currencySymbol: String,
            SalaryStructure: {
                TemplateName: String,
                TemplateId: String
            },
            BankDetails: {
                bankName: String,
                accountHolderName: String,
                accountNumber: Number,
                accountType: String,
                ifscCode: String
            },
            promotions: [
                {
                    promotedFrom: String,
                    promotedTo: String,
                    monthOfPromotion: String,
                    hikeInSalary: String
                }
            ]
        },
        WorkHistory: [
            {
                companyName: String,
                designation: String,
                workDuration: String,
                salary: String
            }
        ]
    }
)

const EmployeeDetails = mongoose.model('EmployeeDetails', EmployeeDetailsSchema)

export default EmployeeDetails;
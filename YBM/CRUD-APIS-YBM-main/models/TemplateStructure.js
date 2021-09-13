import mongoose from 'mongoose'

const SalaryStructureTemplateSchema = mongoose.Schema({
    salaryHeads: [
        {
            DefaultHeads: [{
                salaryHeadsName: String,
                SalaryHeadDefaultStr: String,
                manualSalaryHeadInput: Boolean,
                salaryHeadManualStr: String
            }],
            customSalaryHeads: [
                {
                    isCustomSalaryHead: Boolean,
                    customSalaryHeadName: String,
                    customSlaryHeadStr: String
                }

            ]
        }
    ],
    allowance: [
        {
            DefaultAllowance: [{
                allowanceGiven: Boolean,
                allowanceName: String,
                allowanceStr: String,
                allowanceAmount: String,
            }],
            customallowance: [
                {
                    isCustomAllowance: Boolean,
                    customAllowanceName: String,
                    customAllowanceStr: String
                }
            ]
        }
    ],
    Deduction: [
        {
            DefaultDeduction: [{
                allowDeduction: Boolean,
                deductionName: String,
                decutionStr: String,
                deductionAmount: String,
            }],
            customSalaryHeads: [
                {
                    isCustomDeduction: Boolean,
                    customDeductionName: String,
                    customDeductionStr: String
                }
            ]
        }
    ]
}

)

const SalaryTemplate = mongoose.model('SalaryTemplate', SalaryStructureTemplateSchema)

export default SalaryTemplate;
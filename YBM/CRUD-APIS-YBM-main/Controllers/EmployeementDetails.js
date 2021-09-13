import mongoose from 'mongoose';
import EmployementDetails from '../models/EmployementDetails.js'

//Get All details
export const GetEmploymentInformation = async (req, res) => {
    try {
        console.log('1')
        // if (!mongoose.Types.ObjectId.isValid(id)) return false;
        const EmploymentInformations = await EmployementDetails.find();
        res.status(200).json(EmploymentInformations)
        console.log('11D')

    } catch (error) {
        res.status(404).json({ status: "Error!", message: error.message })
    }
    console.log('h')
}

// Add details
export const AddEmployementInformation = async (req, res) => {
    const EmpEmployeeInformation = req.body;
    const newEmpEmployeeInformation = new EmployementDetails(EmpEmployeeInformation);

    try {
        await newEmpEmployeeInformation.save();
        res.status(201).json({ status: "Success", newEmpEmployeeInformation })
    } catch (error) {
        res.status(409).json({ status: "Field", message: error.message });
    }

}

// Get details by ID
export const GetEmpEmployementInfoById = async (req, res) => {

    const { id } = req.params;
    try {
        const Info = await EmployementDetails.findById(id);
        res.status(200).json(Info)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}


// Delete details by ID
export const DelEmpEmployementInfoById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data of ${id}`);
    await EmployementDetails.findByIdAndRemove(id);
    res.json({ message: `${id} deleted!` })
}

// Update details
export const PatchEmpEmployementInfoById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('ID', id)
        const { Department, DateOfJoining, EmployementType, EmployeeCtc, Status, } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data of ${id}`);
        const updatedEmpEmployementInfoById = {
            $set: {
                Department: Department,
                DateOfJoining: DateOfJoining,
                EmployeeID: EmployeeID,
                EmployementType: EmployementType,
                EmployeeCtc: EmployeeCtc,
                Status: Status,
            }
        };
        // var objectId = mongoose.Types.ObjectId(id);
        // console.log(objectId)
        await EmployementDetails.findOneAndUpdate(id, updatedEmpEmployementInfoById, { new: true });

        res.json(updatedEmpEmployementInfoById)
    } catch (error) {
        console.log(error.message)
    }

}
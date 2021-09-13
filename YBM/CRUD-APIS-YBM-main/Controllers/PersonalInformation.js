import mongoose from 'mongoose';
import PersonalInformation from '../models/PersonalInformation.js'


//Get All details
export const GetPersonalInformation = async (req, res) => {
    try {
        // if (!mongoose.Types.ObjectId.isValid(id)) return false;
        const PersonalInformations = await PersonalInformation.find();
        res.status(200).json(PersonalInformations)
    } catch (error) {
        res.status(404).json({ status: "Error!", message: error.message })
    }
}

// Add details
export const AddPersonalInformation = async (req, res) => {
    const EmpPersonalInformation = req.body;
    const newEmpPersonalInformation = new PersonalInformation(EmpPersonalInformation);

    try {
        await newEmpPersonalInformation.save();
        res.status(201).json({ status: "Success", newEmpPersonalInformation })
    } catch (error) {
        res.status(409).json({ status: "Field", message: error.message });
    }

}

// Get details by ID
export const GetEmpPersonalInfoById = async (req, res) => {

    const { id } = req.params;
    try {
        const Info = await PersonalInformation.findById(id);
        res.status(200).json(Info)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}


// Delete details by ID
export const DelEmpPersonalInfoById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data of ${id}`);
    await PersonalInformation.findByIdAndRemove(id);
    res.json({ message: `${id} deleted!` })
}

// Update details

export const PatchEmpPersonalInfoById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('ID', id)
        const { FirstName, LastName, EmployeeID, DateOfBirth, EmailAddress, OfficialEmailAddress, CommunicationAddress, PermanentAddress } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data of ${id}`);
        const updatedEmpPersonalInfoById = {
            $set: {
                FirstName: FirstName,
                LastName: LastName,
                EmployeeID: EmployeeID,
                DateOfBirth: DateOfBirth,
                EmailAddress: EmailAddress,
                OfficialEmailAddress: OfficialEmailAddress,
                CommunicationAddress: CommunicationAddress,
                PermanentAddress: PermanentAddress
            }
        };
        // var objectId = mongoose.Types.ObjectId(id);
        // console.log(objectId)
        await PersonalInformation.findOneAndUpdate(id, updatedEmpPersonalInfoById, { new: true });

        res.json(updatedEmpPersonalInfoById)
    } catch (error) {
        console.log(error.message)
    }

}
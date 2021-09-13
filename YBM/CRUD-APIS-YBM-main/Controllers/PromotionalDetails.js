import mongoose from 'mongoose';
import PromotionalDetails from '../models/PromotionalDetails.js'

//Get All details
export const GetPromotionalInformation = async (req, res) => {
    try {
        // if (!mongoose.Types.ObjectId.isValid(id)) return false;
        const PromotionalInformations = await PromotionalDetails.find();
        res.status(200).json(PromotionalInformations)

    } catch (error) {
        res.status(404).json({ status: "Error!", message: error.message })
    }
}

// Add details
export const AddPromotionalInformation = async (req, res) => {
    const EmpPromotionalInformation = req.body;
    const newEmpPromotionalInformation = new PromotionalDetails(EmpPromotionalInformation);

    try {
        await newEmpPromotionalInformation.save();
        res.status(201).json({ status: "Success", newEmpPromotionalInformation })
    } catch (error) {
        res.status(409).json({ status: "Field", message: error.message });
    }

}

// Get details by ID
export const GetEmpPromotionalInfoById = async (req, res) => {

    const { id } = req.params;
    try {
        const Info = await PromotionalDetails.findById(id);
        res.status(200).json(Info)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


// Delete details by ID
export const DelEmpPromotionalInfoById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data of ${id}`);
    await PromotionalDetails.findByIdAndRemove(id);
    res.json({ message: `${id} deleted!` })
}

// Update details
export const PatchEmpPromotionalInfoById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('ID', id)
        const { PromotedFrom, DateOfPromotion, PromotedTo, NewCurrentCTC, } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data of ${id}`);
        const updatedEmpPromotionalInfoById = {
            $set: {
                PromotedFrom: PromotedFrom,
                DateOfPromotion: DateOfPromotion,
                PromotedTo: PromotedTo,
                NewCurrentCTC: NewCurrentCTC,

            }
        };
        // var objectId = mongoose.Types.ObjectId(id);
        // console.log(objectId)
        await PromotionalDetails.findOneAndUpdate(id, updatedEmpPromotionalInfoById, { new: true });

        res.json(updatedEmpPromotionalInfoById)
    } catch (error) {
        console.log(error.message)
    }

}
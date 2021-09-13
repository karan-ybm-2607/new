import mongoose from 'mongoose';
import BasicInformation from '../models/BasicInformation.js'

export const GetOrganizationInfo = async (req, res) => {
    try {
        const BasicInformations = await BasicInformation.find();
        res.status(200).json(BasicInformations)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const AddOrganizaionInfo = async (req, res) => {
    const OrgBasicDetails = req.body;
    const newOrgBasicDetails = new BasicInformation(OrgBasicDetails);

    try {
        await newOrgBasicDetails.save();
        res.status(201).json(newOrgBasicDetails)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }

}
export const GetOrgInfoById = async (req, res) => {

    const { id } = req.params;
    try {
        const Info = await BasicInformation.findById(id);
        res.status(200).json(Info)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}
export const DelOrgInfoById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data of ${id}`);
    await BasicInformation.findByIdAndRemove(id);
    res.json({ message: `${id} deleted!` })
}

export const PatchOrgInfoById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log('ID', id)
        const { OrganizationName, FullAddress, City, State, Region, ZipCode, TotalEmployees } = req.body;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data of ${id}`);
        const updatedOrgInfoById = {
            $set: {
                OrganizationNam: OrganizationName,
                OrgAddress: {
                    FullAddress: FullAddress,
                    City: City,
                    State: State,
                    Region: Region,
                    // ZipCode: ZipCode
                },
                TotalEmployees: TotalEmployees,
            }
        };
        // var objectId = mongoose.Types.ObjectId(id);
        // console.log(objectId)
        await BasicInformation.findOneAndUpdate(id, updatedOrgInfoById, { new: true });

        res.json(updatedOrgInfoById)
    } catch (error) {
        console.log(error.message)
    }

}
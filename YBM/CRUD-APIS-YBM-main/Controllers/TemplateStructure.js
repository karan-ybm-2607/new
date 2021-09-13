import mongoose from 'mongoose'
import SalaryTemplate from '../models/TemplateStructure.js'

export const GetSalaryTemplate = async (req, res) => {
    try {
        const SalaryTemplates = await SalaryTemplate.find();
        res.status(200).json(SalaryTemplates)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const CreateSalaryTemplate = async (req, res) => {

    const SalaryStr = req.body;
    const newSalaryStr = new SalaryTemplate(SalaryStr);

    try {
        await newSalaryStr.save();
        res.status(201).json(newSalaryStr)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const GetSalaryStrById = async (req, res) => {

    const { id } = req.params;
    try {
        const Structure = await SalaryTemplate.findById(id);
        res.status(200).json(Structure)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const DeleteSalaryStrById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data of ${id}`);
    await SalaryTemplate.findByIdAndRemove(id);
    res.json({ message: `${id} deleted!` })
}

export const UpdateSalaryStrById = async (req, res) => {
    const { id } = req.params;
    const { OrganizationName, FullAddress, City, State, Region, ZipCode, TotalEmployees } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data of ${id}`);
    const updatedStr = { OrganizationName, FullAddress, City, State, Region, ZipCode, TotalEmployees, _id: id };
    await SalaryTemplate.findOneAndUpdate(id, updatedStr, { new: true });

    res.json(updatedStr)
}
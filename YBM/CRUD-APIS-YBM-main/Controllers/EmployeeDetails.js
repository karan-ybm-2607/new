import mongoose from 'mongoose'
import EmployeeData from '../models/EmployeeDetails.js'

export const GetEmployeeDetails = async (req, res) => {
    try {
        const EmployeeDatas = await EmployeeData.find();
        res.status(200).json(EmployeeDatas)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const CreateEmployeeDetail = async (req, res) => {

    const EmpData = req.body;
    const newEmployeeData = new EmployeeData(EmpData);

    try {
        await newEmployeeData.save();
        res.status(201).json(newEmployeeData)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const GetEmployeeById = async (req, res) => {

    const { id } = req.params;
    try {
        const Employee = await EmployeeData.findById(id);
        res.status(200).json(Employee)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}

export const DeleteEmployeeById = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data of ${id}`);
    await EmployeeData.findByIdAndRemove(id);
    res.json({ message: `${id} deleted!` })
}

export const UpdateEmployeeDetailsById = async (req, res) => {
    const { id } = req.params;
    const { OrganizationName, FullAddress, City, State, Region, ZipCode, TotalEmployees } = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No data of ${id}`);
    const updatedEmpData = { OrganizationName, FullAddress, City, State, Region, ZipCode, TotalEmployees, _id: id };
    await EmployeeData.findOneAndUpdate(id, updatedEmpData, { new: true });

    res.json(updatedEmpData)
}
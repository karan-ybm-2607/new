import express from "express";
import bodyParser from "body-parser";
import SalaryStructureRoutes from './Routes/TemplateStructure.js'
import OrganizationRoutes from './Routes/BasicInformation.js'
import EmployeeDataRoutes from './Routes/EmployeeDetails.js'
import PersonalInformationRoutes from './Routes/PersonalInformation.js'
import EmployementDetails from './Routes/EmployementDetails.js'
import PromotionalDetails from './Routes/PromotionalDetails.js';
import mongoose from "mongoose";
import cors from 'cors'
const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

// const CONNECTION_MONGO = 'mongodb+srv://karan:karanYBM123@cluster0.lfxve.mongodb.net/YBMdb?retryWrites=true&w=majority'
const CONNECTION_MONGO = 'mongodb://karan:karanYBM123@cluster0-shard-00-00.lfxve.mongodb.net:27017,cluster0-shard-00-01.lfxve.mongodb.net:27017,cluster0-shard-00-02.lfxve.mongodb.net:27017/YBMdb?ssl=true&replicaSet=atlas-3fmm5q-shard-0&authSource=admin&retryWrites=true&w=majority'

mongoose.connect(CONNECTION_MONGO, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

// mongoose.set('useFindAndModify', false);
// app.use('/Organization', OrganizationRoutes);
// app.use('/SalaryStructure', SalaryStructureRoutes);
// app.use('/Employee', EmployeeDataRoutes);
// individual APIS
app.use('/Employee', PersonalInformationRoutes, EmployementDetails, PromotionalDetails);

app.get('/', (req, res) => res.send('API working'));

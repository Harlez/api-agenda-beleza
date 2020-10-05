import Router from 'express';
import {companyController} from '../controllers/company';

const companyRouter = Router();

companyRouter.post('/', companyController.insertCompany)
companyRouter.get('/', companyController.listCompany)
companyRouter.post('/login', companyController.getLogin)
companyRouter.delete('/:id', companyController.deleteCompany)

export{
    companyRouter
}
import express from "express";

import { getDepartments, postDepartment, deleteDepartment, updateDepartment } from "../controllers/department_controller.js";

const departmentRouter = express.Router();

departmentRouter.get("/", getDepartments);
departmentRouter.post("/", postDepartment);
departmentRouter.put("/:_id", updateDepartment),
departmentRouter.delete("/:_id", deleteDepartment);

export default departmentRouter;
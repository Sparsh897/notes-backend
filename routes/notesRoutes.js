import express from "express";
const router = express.Router();
import {
    getNotes,
    createNote,
    updateNote,
    deleteNotes,
    moveToRecycleBin,
    moveMultipleToRecycleBin,
    getrecycledNotes,
    setPassword,
    removePassword,
} from "../controllers/notescontroller.js"
import validateToken from "../middleware/tokenHandler.js";

router.use(validateToken);
router.route("/getAllnotes").get(getNotes);
router.route("/getrecyclednotes").get(getrecycledNotes);
router.route("/createnote").post(createNote);
router.route("/updatenote/:id").put(updateNote);
router.route('/deletenotes').delete(deleteNotes);
router.route("/tobin/:id").put(moveToRecycleBin);
router.route('/tobin').put(moveMultipleToRecycleBin);
router.route('/password/:id').put(setPassword);
router.route('/removepassword/:id').put(removePassword);

export default router;

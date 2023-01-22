const express = require("express");
const router = express.Router();
const path = require("path");

const multer = require('multer');
const Employee = require("../models/employee");


const image_path = path.join(__dirname, "../public/all_image")


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, image_path)
    },
    filename: function (req, file, cb) {
        // console.log(file)
      cb(null, Date.now() + path.extname(file.originalname)) //Appending .jpg
    }
  })
 
const upload = multer({ storage: storage });
  

router.get("/", async (req,res) => {
    res.render("create");
})


// For Create Employee
router.post("/create", upload.single('file'), async (req, res) => {
     
    try {
        req.body.file = req.file.filename;
        console.log(req.body);
        const Data = new Employee(req.body);
        await Data.save();
        res.redirect("/show");  
    } catch (err) {
        res.send(err);
    }
})


// For Show all Employee
router.get("/show", async (req, res) => {
    try {
    const all_data = await Employee.find();
    res.render("show",{all_data});
    } catch (err) {
        res.send(err);
    }
    
})

//For Edit and Show Data
// Also use FindOne
router.get("/edit_employee/:id", async (req, res) => {
    try {
        const Edit_Employee = await Employee.findById(req.params.id);
        res.render("edit", { Edit_Employee }); 
    } catch (err) {
        res.send(err);
    }
})

// For Update Employee

router.post("/update_employee/:id",upload.single('file'), async (req, res) => {
    try {
        
        const _id = req.params.id;
        if (req.file) {
            req.body.file = req.file.filename;
        }
        const updateEmployee = await Employee.findByIdAndUpdate(_id, req.body);
        res.redirect("/show");
    
    } catch (err) {
        res.send(err);
   }

})



// for delete Employee
router.get("/delete_employee/:id", async (req, res) => {
    try {
        const DeleteEmployee = await Employee.findByIdAndDelete(req.params.id)
        res.redirect("/show");
    } catch (err) {
        res.send(err);
    }
})

module.exports = router;
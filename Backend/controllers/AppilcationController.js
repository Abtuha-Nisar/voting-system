// const Application = require("../models/ApplicationModel");
// const multer = require("multer");

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       if (file.fieldname === "image") {
//         cb(null, "uploads/images");
//       } else if (file.fieldname === "pdfFile") {
//         cb(null, "uploads/pdf");
//       } else {
//         cb(new Error("Invalid file field"), null);
//       }
//     },
//     filename: function (req, file, cb) {
//       cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`);
//     },
//   });
  
//   const fileFilter = function (req, file, cb) {
//     if (
//       file.mimetype === "image/jpeg" ||
//       file.mimetype === "image/png" ||
//       file.mimetype === "application/pdf"
//     ) {
//       cb(null, true);
//     } else {
//       cb(new Error("Invalid file type"), false);
//     }
//   };
  
//   const upload = multer({ storage: storage, fileFilter: fileFilter });
  
//   const createApplication = async (req, res) => {
//     try {
//       upload.fields([
//         { name: "degreeImage", maxCount: 1 },
//         { name: "degreePdf", maxCount: 1 },
//       ])(req, res, async function (err) {
//         if (err instanceof multer.MulterError) {
//           console.error(err);
//           return res.status(400).send("Bad request");
//         } else if (err) {
//           console.error("errrr", err);
//           return res.status(500).send("Internal server error");
//         }
  
//         const { fullname, gender, CNIC_No, Degree_Reg_No, university, passing_year } = req.body;
  
//         let degreeImage = "";
//         let degreePdf = "";
  
//         if (req.files && req.files.degreeImage && req.files.degreeImage.length > 0) {
//             degreeImage = req.files.degreeImage[0].path;
//         } else {
//           return res.status(400).send({ success: false, msg: "Image not found" });
//         }
  
//         if (req.files && req.files.degreePdf && req.files.degreePdf.length > 0) {
//             degreePdf = req.files.degreePdf[0].path;
//         } else {
//           return res
//             .status(400)
//             .send({ success: false, msg: "PDF file not found" });
//         }
  
//         const application = new Application({
//             fullname,
//             gender,
//             CNIC_No,
//             Degree_Reg_No,
//             university,
//             passing_year,   
//             degreeImage,
//             degreePdf
//         });
//         const savedApplication = await application.save();
  
//         res
//           .status(201)
//           .send({ success: true, msg: "Application submitted successfully" });
//       });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Internal server error");
//     }
//   };
//   // Handle GET request to retrieve all applications
// const  getAllApplications = async (req, res) => {
//     try {
//       const applications = await Application.find({});
//       res.status(200).json(applications);
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Internal server error");
//     }
//   };
// // Count All applications
// // User Count 
// const count_Applications = async(req,res)=>{
//     try {
//      const count = await Application.countDocuments();
//      if(count){
//          res.send({ count });
//      }
//      else{
//          res.send({msg:"No Users Found"})
//      }
    
//     } catch (error) {
//      console.log(error);
//     }
//  }
 
// module.exports={
//     createApplication,
//     getAllApplications,
//     count_Applications
// }
const Iso = require("../models/isoModel");
exports.writeData = async (req, res) => {
  console.log("first", req.file);
  console.log("second", req.files);
  try {
    if (req.files.length>0) {
      const filePath = req.files.map((el) => el.path);
      console.log("first", filePath);
      if (filePath.length>0) {    
          const newIsoData = await Iso.create({ ...req.body, files: filePath });
          res.status(201).json({
            status: "success",
            data: newIsoData,
          });
      }
    } else {
      const newIsoData = await Iso.create(req.body );
      res.status(201).json({
        status: "success",
        data: newIsoData,
      });
    }
  } catch (error) {
    res.status(400).json({
      status: "bad request",
      message: "Invalid data send",
    });
  }
};

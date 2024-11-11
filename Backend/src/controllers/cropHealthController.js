exports.getCropHealthData = (req, res, next) => {
    res.json({ message: 'Get all crop health data' });
  };
  
  exports.getCropHealthDataById = (req, res, next) => {
    const { dataId } = req.params;
    res.json({ message: `Get crop health data with ID ${dataId}` });
  };
  
  exports.createCropHealthData = (req, res, next) => {
    res.json({ message: 'Create new crop health data' });
  };
  
  exports.updateCropHealthData = (req, res, next) => {
    const { dataId } = req.params;
    res.json({ message: `Update crop health data with ID ${dataId}` });
  };
  
  exports.deleteCropHealthData = (req, res, next) => {
    const { dataId } = req.params;
    res.json({ message: `Delete crop health data with ID ${dataId}` });
  };
  
  // Field-related endpoints
  exports.getFields = (req, res, next) => {
    res.json({ message: 'Get all fields' });
  };
  
  exports.getFieldById = (req, res, next) => {
    const { fieldId } = req.params;
    res.json({ message: `Get field with ID ${fieldId}` });
  };
  
  exports.createField = (req, res, next) => {
    res.json({ message: 'Create new field' });
  };
  
  exports.updateField = (req, res, next) => {
    const { fieldId } = req.params;
    res.json({ message: `Update field with ID ${fieldId}` });
  };
  
  exports.deleteField = (req, res, next) => {
    const { fieldId } = req.params;
    res.json({ message: `Delete field with ID ${fieldId}` });
  };  
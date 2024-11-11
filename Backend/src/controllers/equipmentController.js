exports.getEquipmentList = (req, res, next) => {
    res.json({ message: 'Get all equipment' });
  };
  
  exports.getEquipmentById = (req, res, next) => {
    const { equipmentId } = req.params;
    res.json({ message: `Get equipment with ID ${equipmentId}` });
  };
  
  exports.createEquipment = (req, res, next) => {
    res.json({ message: 'Add new equipment' });
  };
  
  exports.updateEquipment = (req, res, next) => {
    const { equipmentId } = req.params;
    res.json({ message: `Update equipment with ID ${equipmentId}` });
  };
  
  exports.deleteEquipment = (req, res, next) => {
    const { equipmentId } = req.params;
    res.json({ message: `Delete equipment with ID ${equipmentId}` });
  };
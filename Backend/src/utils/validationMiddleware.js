// utils/validationMiddleware.js
const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);

const userSchema = require('../schemas/User.json');
const farmerSchema = require('../schemas/FarmerProfile.json');
const vendorSchema = require('../schemas/VendorProfile.json');
const supplierSchema = require('../schemas/SupplierProfile.json');

ajv.addSchema(userSchema, 'User');

exports.validateUser = (data) => {
  const validate = ajv.compile(userSchema);
  if (!validate(data)) {
    const errors = ajv.errorsText(validate.errors);
    throw new Error('Invalid User Data: ' + errors);
  }
};

exports.validateFarmerProfile = (data) => {
  const validate = ajv.compile(farmerSchema);
  if (!validate(data)) {
    const errors = ajv.errorsText(validate.errors);
    throw new Error('Invalid Farmer Profile Data: ' + errors);
  }
};

exports.validateVendorProfile = (data) => {
  const validate = ajv.compile(vendorSchema);
  if (!validate(data)) {
    const errors = ajv.errorsText(validate.errors);
    throw new Error('Invalid Vendor Profile Data: ' + errors);
  }
};

exports.validateSupplierProfile = (data) => {
  const validate = ajv.compile(supplierSchema);
  if (!validate(data)) {
    const errors = ajv.errorsText(validate.errors);
    throw new Error('Invalid Supplier Profile Data: ' + errors);
  }
};

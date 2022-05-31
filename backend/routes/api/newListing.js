const express = require('express');
const asyncHandler = require('express-async-handler');

const { check } = require('express-validator'); // check will be used with handleValidationErrors to validate req bodies
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Listing } = require('../../db/models');

const router = express.Router();

const validateListing = [
  check('name')
    .exists({ checkFalsy: true })
    .withMessage('Listing must have a name.')
    .isLength({ max: 50 })
    .withMessage('Listing cannot be longer than 50 characters.'),
  check('state')
    .exists({ checkFalsy: true })
    .withMessage('Please select the state where listing is located.'),
  check('country')
    .exists({ checkFalsy: true })
    .withMessage('Please select the country where listing is located.'),
  check('cost')
    .exists({ checkFalsy: true })
    .withMessage('Please provide the cost per day for your listing.')
    .isDecimal()
    .withMessage('Cost must be a number.'),
  check('img1')
    .exists({ checkFalsy: true })
    .withMessage('Please upload an image for your listing.'),
  check('img2')
    .exists({ checkFalsy: true })
    .withMessage('Please upload an image for your listing.'),
  check('img3')
    .exists({ checkFalsy: true })
    .withMessage('Please upload an image for your listing.'),
  check('img4')
    .exists({ checkFalsy: true })
    .withMessage('Please upload an image for your listing.'),

  handleValidationErrors
];

router.post('/', requireAuth, validateListing, asyncHandler(async (req, res) => {
  const newListing = await Listing.create(req.body);
  return res.json(newListing);
  // res.redirect('/listings')
}));

  module.exports = router;
const router = require ('express').Router();
const {
    getAllThoughts,
    createThought
} = require('../../controllers/thoughtController');

router.route('/').get(getAllThoughts).post(createThought)


module.exports = router;
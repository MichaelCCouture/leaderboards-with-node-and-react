const Run = require('./../models/run');

module.exports = {
    getRun: (req, res) => {
        Run.findById(req.params.id).populate('game').populate('runner').exec((err, run) => {
            if (err) throw err;
            res.send(run);
            res.end();
        });
    },
    addRun: (req, res) => {
        //TODO
        return null;
    },
    editRun: (req, res) => {
        //TODO
        return null;
    },
    deleteRun: (req, res) => {
        //TODO
        return null;
    }
}
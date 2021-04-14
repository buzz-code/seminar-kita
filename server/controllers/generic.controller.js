import HttpStatus from 'http-status-codes';

export const fetchPage = async (dbQuery, { page, pageSize, orderBy, orderDirection }, res, fromServerToClient) => {
    if (orderBy) {
        dbQuery = dbQuery.query('orderBy', orderBy, orderDirection);
    }

    const countQuery = dbQuery.clone();
    dbQuery.query(qb => qb.offset(Number(pageSize) * Number(page)).limit(Number(pageSize)));
    try {
        const [count, result] = await Promise.all([countQuery.count(), dbQuery.fetchAll()])
        const resultToSend = fromServerToClient ? result.toJSON().map(fromServerToClient) : result.toJSON();
        res.json({
            error: null,
            data: resultToSend,
            page: +page,
            total: count,
        });
    }
    catch (err) {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
            error: err.message
        });
    }
};

export default (model, fromClientToServer, fromServerToClient) => ({
    /**
     * Find all the items
     *
     * @param {object} req
     * @param {object} res
     * @returns {*}
     */
    findAll: function (req, res) {
        const dbQuery = new model({ user_id: req.currentUser.id });
        fetchPage(dbQuery, req.query, res, fromServerToClient);
    },

    /**
     *  Find item by id
     *
     * @param {object} req
     * @param {object} res
     * @returns {*}
     */
    findById: function (req, res) {
        new model({ id: req.params.id, user_id: req.currentUser.id })
            .fetch()
            .then(item => {
                let itemToReturn = fromServerToClient ? fromServerToClient(item.toJSON()) : item.toJSON();
                if (!item) {
                    res.status(HttpStatus.NOT_FOUND).json({
                        error: 'לא נמצא'
                    });
                }
                else {
                    res.json({
                        error: null,
                        data: itemToReturn
                    });
                }
            })
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err.message
            }));
    },

    /**
     * Store new item
     *
     * @param {object} req
     * @param {object} res
     * @returns {*}
     */
    store: function (req, res) {
        const itemToSave = fromClientToServer ? fromClientToServer(req.body) : req.body;
        new model({ user_id: req.currentUser.id, ...itemToSave })
            .save()
            .then(() => res.json({
                error: null,
                data: { message: 'הרשומה נוספה בהצלחה.' }
            }))
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err.message
            }));
    },

    /**
     * Update item by id
     *
     * @param {object} req
     * @param {object} res
     * @returns {*}
     */
    update: function (req, res) {
        const itemToSave = fromClientToServer ? fromClientToServer(req.body) : req.body;
        new model({ id: req.params.id, user_id: req.currentUser.id })
            .fetch({ require: true })
            .then(item => item.save({
                ...itemToSave,
            }))
            .then(() => res.json({
                error: null,
                data: { message: 'הרשומה נשמרה בהצלחה.' }
            }))
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err.message
            }));
    },

    /**
     * Destroy item by id
     *
     * @param {object} req
     * @param {object} res
     * @returns {*}
     */
    destroy: function (req, res) {
        new model({ id: req.params.id, user_id: req.currentUser.id })
            .fetch({ require: true })
            .then(item => item.destroy())
            .then(() => res.json({
                error: null,
                data: { message: 'הרשומה נמחקה בהצלחה.' }
            }))
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                error: err.message
            }));
    }
});
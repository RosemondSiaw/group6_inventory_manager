import ItemsDAO from "../dao/itemsDAO.js";

export default class ItemsController {
    static async apiGetItems(req, res, next) {
        const itemsPerPage = req.query.itemsPerPage ? parseInt(req.query.itemsPerPage, 10) : 20
        const page = req.query.page ? parseInt(req.query.page, 10) : 0

        let filters = {}
        if (req.query.itemName) {
            filters.name = req.query.itemName
        } else if (req.query.manufacturer) {
            filters.manufacturer = req.query.manufacturer
        } else if (req.query.barcode) {
            filters.barcode = req.query.barcode
        }

        const { itemsList, totalNumItems } = await ItemsDAO.getUsers({
            filters,
            page,
            itemsPerPage,
        })

        let response = {
            items: itemsList,
            page: page,
            filters: filters,
            entries_per_page: itemsPerPage,
            total_results: totalNumItems,
        }
        res.json(response)
    }
}
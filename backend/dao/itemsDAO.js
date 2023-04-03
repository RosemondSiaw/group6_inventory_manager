// import mongodb from "mongodb"
// const ObjectId = mongodb.ObjectID
let items

export default class ItemsDAO {
    static async injectDB(conn) {
        if (items) {
            return
        }
        try {
            items = await conn.db(process.env.INVENTORY_NS).collection("item")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in itemsDAO: ${e}`,
            )
        }
    }

    static async getItems({
        filters = null,
        page = 0,
        itemsPerPage = 20,
    } = {}) {
        let query
        if (filters) {
            if ("name" in filters) {
                query = { $text: { $search: filters["name"] } }
            } else if ("manufacturer" in filters) {
                query = { "manufacturer": { $eq: filters["manufacturer"] } }
            } else if ("barcode" in filters) {
                query = { "barcode": { $eq: filters["barcode"] } }
            }
        }

        let cursor

        try {
            cursor = await items
                .find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { itemsList: [], totalNumItems: 0 }
        }

        const displayCursor = cursor.limit(itemsPerPage).skip(itemsPerPage * page)

        try {
            const itemsList = await displayCursor.toArray()
            const totalNumItems = await items.countDocuments(query)

            return { itemsList, totalNumItems }
        } catch (e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents, ${e}`,
            )
            return { itemsList: [], totalNumItems: 0 }
        }
    }

    // static async getUserByID(id) {
    //     try {
    //         const pipeline = [
    //             {
    //                 $match: {
    //                     _id: new ObjectId(id),
    //                 },
    //             },
    //             {
    //                 $lookup: {
    //                     from: "reviews",
    //                     let: {
    //                         id: "$_id",
    //                     },
    //                     pipeline: [
    //                         {
    //                             $match: {
    //                                 $expr: {
    //                                     $eq: ["$restaurant_id", "$$id"],
    //                                 },
    //                             },
    //                         },
    //                         {
    //                             $sort: {
    //                                 date: -1,
    //                             },
    //                         },
    //                     ],
    //                     as: "reviews",
    //                 },
    //             },
    //             {
    //                 $addFields: {
    //                     reviews: "$reviews",
    //                 },
    //             },
    //         ]
    //         return await users.aggregate(pipeline).next()
    //     } catch (e) {
    //         console.error(`Something went wrong in getUserByID: ${e}`)
    //         throw e
    //     }
    // }

    // static async getCuisines() {
    //     let cuisines = []
    //     try {
    //         cuisines = await users.distinct("cuisine")
    //         return cuisines
    //     } catch (e) {
    //         console.error(`Unable to get cuisines, ${e}`)
    //         return cuisines
    //     }
    // }
}
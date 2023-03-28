// import mongodb from "mongodb"
// const ObjectId = mongodb.ObjectID
let users

export default class UsersDAO {
    static async injectDB(conn) {
        if (users) {
            return
        }
        try {
            users = await conn.db(process.env.INVENTORY_NS).collection("user")
        } catch (e) {
            console.error(
                `Unable to establish a collection handle in usersDAO: ${e}`,
            )
        }
    }

    static async getUsers({
        filters = null,
        page = 0,
        usersPerPage = 20,
    } = {}) {
        let query
        if (filters) {
            if ("name" in filters) {
                query = { $text: { $search: filters["name"] } }
            } else if ("cuisine" in filters) {
                query = { "cuisine": { $eq: filters["cuisine"] } }
            } else if ("zipcode" in filters) {
                query = { "address.zipcode": { $eq: filters["zipcode"] } }
            }
        }

        let cursor

        try {
            cursor = await users
                .find(query)
        } catch (e) {
            console.error(`Unable to issue find command, ${e}`)
            return { usersList: [], totalNumUsers: 0 }
        }

        const displayCursor = cursor.limit(usersPerPage).skip(usersPerPage * page)

        try {
            const usersList = await displayCursor.toArray()
            const totalNumUsers = await users.countDocuments(query)

            return { usersList, totalNumUsers }
        } catch (e) {
            console.error(
                `Unable to convert cursor to array or problem counting documents, ${e}`,
            )
            return { usersList: [], totalNumUsers: 0 }
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
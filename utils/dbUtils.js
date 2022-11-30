const MONGO_URL =
  "mongodb+srv://Groupie:j0O5PczHaUNPwyAq@cluster0.klnh8lb.mongodb.net/?retryWrites=true&w=majority";

const mongoose = require("mongoose");
const { GroupModel } = require("../models/groupSchema");
const { UserModel } = require("../models/userSchema");

/* Register models */

/* Connect to MongoDB */
mongoose.connect(
  MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  async (err, client) => {
    if (err) {
      return console.error(err);
    }

    console.log(`Database Configured. MongoDB Connected: ${MONGO_URL}`);

    // await insertOne(UserModel, {username:"userA", userID:"1", ownedGroups:["1"], memberGroups:["1", "3"]})
    // await insertOne(UserModel, {username:"userB", userID:"2", ownedGroups:["2"], memberGroups:["2", "3"]})
    // await insertOne(UserModel, {username:"userC", userID:"3", ownedGroups:["3"], memberGroups:["3", "2"]})

    // await insertOne(GroupModel, {groupName:"Group1", groupID:"1", owner:"1", members:["1"]})
    // await insertOne(GroupModel, {groupName:"Group2", groupID:"2", owner:"2", members:["2", "3"]})
    // await insertOne(GroupModel, {groupName:"Group3", groupID:"3", owner:"3", members:["1", "2", "3"]})
  }
);

/* Insert one */
const insertOne = async (Object, query) => {
  try {
    const d = new Object(query);

    const data = await d.save();

    return { data: data, code: 201 };
  } catch (e) {
    if (e.message.includes("duplicate")) {
      e.code = 400;
      e.message = "Duplicate document identifier.";
    }
    return { error: e.message ? e.message : e, code: e.code ? e.code : 400 };
  }
};

/* Get some */
const findSome = async (Collection, query) => {
  try {
    const data = await Collection.find(query);

    if (!data || data == null)
      throw { message: "No documents found with this query.", code: 404 };

    return { data: data, code: 200 };
  } catch (e) {
    return { error: e.message ? e.message : e, code: e.code ? e.code : 400 };
  }
};

/* Get one */
const findOne = async (Collection, query) => {
  try {
    const data = await Collection.findOne(query);

    if (!data || data == null)
      throw { message: "No documents found with this query.", code: 404 };

    return { data: data, code: 200 };
  } catch (e) {
    return { message: e.message ? e.message : e, code: e.code ? e.code : 400 };
  }
};

/* Get all */
const findAll = async (Collection) => {
  try {
    const data = await Collection.find();

    if (!data || data == null)
      throw { message: "No documents found in collection.", code: 404 };

    return { data: data, code: 200 };
  } catch (e) {
    return { message: e.message ? e.message : e, code: e.code ? e.code : 400 };
  }
};

/* Delete one */
const deleteOne = async (Collection, query) => {
  try {
    const data = await Collection.deleteOne(query);

    if (data.deletedCount == 0)
      throw {
        message: "Document not found or something went wrong.",
        code: 404,
      };

    return { data: data, code: 204 };
  } catch (e) {
    return { message: e.message ? e.message : e, code: e.code ? e.code : 400 };
  }
};

/* Update one */
const updateOne = async (Collection, filter, query) => {
  try {
    for (i in query) {
      const data = await Collection.updateOne(filter, {
        $set: { [i]: query[i] },
      });

      if (data.modifiedCount == 0 && data.matchedCount == 0) {
        throw { message: "Document not found.", code: 404 };
      } else if (data.modifiedCount == 0 && data.matchedCount == 1) {
        throw { message: "Documet not modified.", code: 304 };
      }
    }

    return { code: 204 };
  } catch (e) {
    return { message: e.message ? e.message : e, code: e.code ? e.code : 400 };
  }
};

module.exports = {
  insertOne,
  findSome,
  findAll,
  findOne,
  updateOne,
  deleteOne,
};

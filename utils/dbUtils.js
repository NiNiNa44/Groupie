const MONGO_URL = "mongodb://127.0.0.1:27017/neuropacsDB";

const mongoose = require("mongoose");

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

/* Remove all subjects 2 weeks old (run once a day) */
setInterval(async () => {
  const subjects = await findAll(Subject);

  for (let i = 0; i < subjects.length; i++) {
    const subject_creation = new Date(subjects[i].dataCreated);

    let date_difference_in_seconds =
      (new Date().getTime() - subject_creation.getTime()) / 1000;

    let num_seconds_in_2_weeks = 86400 * 14;

    if (date_difference_in_seconds >= num_seconds_in_2_weeks) {
      await deleteOne(Subject, { userID: subjects[i].userID });
    }
  }
}, 86400);

module.exports = {
  insertOne,
  findSome,
  findAll,
  findOne,
  updateOne,
  deleteOne,
  Job,
  Subject,
  JobType,
};

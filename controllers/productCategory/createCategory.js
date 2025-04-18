const category = require("../../models/category.js");
const slugify = require("slugify");

const createCategory = async (req, res) => {
  try {
    const checkname = await checkIfCategoryExists(
      "name",
      req.body.category_name
    );

    if (checkname == false) {
      const checkurl = await checkIfCategoryExists(
        "url",
        req.body.category_url
      );
      console.log("checkurl:", checkurl);
      if (checkurl == false) {
        const {
          category_name,
          category_url,
          editor,
          meta_description,
          meta_title,
          meta_keywords,
          parent_category,
          status,
        } = req.body;
        console.log("this is reques form client:", req.body);
        const addcategory = new category({
          name: category_name,
          url: slugify(category_url),
          desc: editor,
          metatitle: meta_title,
          metadesc: meta_description,
          status,
          meta_keywords: meta_keywords,
          parentcategory: parent_category == "" ? [] : parent_category,
          banner: req.files.category_image[0].filename,
        });

        const rel = await addcategory.save();
        console.log("this is category data :", rel);
        res.status(201).json({ status: "successfull", data: rel });
      } else {
        res.status(404).json({
          status: "failed",
          error: {
            url: {
              message: "category with this url already exists",
              path: "url",
            },
          },
        });
      }
    } else {
      res.status(404).json({
        status: "faild",
        error: {
          name: {
            message: "category with this name already exist",
            path: "name",
          },
        },
      });
    }
  } catch (error) {
    res.send({ status: "faild", error: error.error });
  }
};

async function checkIfCategoryExists(key, value) {
  let category_response;
  if (key == "name") {
    category_response = await category.findOne({ name: value });
  } else {
    category_response = await category.findOne({ url: value });
    console.log("this is category url :", category_response);
  }
  if (category_response == null) {
    return false;
  } else {
    return true;
  }
}

module.exports = createCategory;

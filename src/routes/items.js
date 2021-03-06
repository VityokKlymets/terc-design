const express = require("express");
const Item = require("../models/Item");
const saveItem = require("./utils").saveItem;

const router = express.Router();
router.get("/get", (req, res) => {
  const id = req.query.id;
  Item.findById(id).then(item => {
    if (item) {
      item.views++;
      item.save();
      res.json({ item });
    } else {
      res.json({ item: {} });
    }
  });
});
router.post("/load", (req, res) => {
  const { ids } = req.body;
  Promise.all(ids.map(id => Item.findById(id))).then(data =>
    res.json({ data })
  );
});
router.post("/paginate", (req, res) => {
  const paginator = req.body.paginator;
  const { itemPerPage, currentPage } = paginator.page;
  const resPaginator = { ...paginator };
  const { functional, material, type } = paginator;
  findOption = {
    functional
  };
  if (material !== "любой") {
    findOption = { ...findOption, material };
  }
  if (type !== "все") {
    findOption = { ...findOption, type };
  }
  Item.countAndFind(findOption)
    .skip(itemPerPage * currentPage)
    .limit(itemPerPage)
    .exec((err, items, count) => {
      resPaginator.page.itemsCount = count;
      resPaginator.page.pagesLength = Math.ceil(count / itemPerPage);
      res.json({ items, paginator: resPaginator });
    });
});
router.post("/delete", (req, res) => {
  const { id } = req.body;
  Item.findById(id).then(record => {
    if (record) record.remove();
  });
  res.json({});
});
router.get("/getAll", (req, res) => {
  Item.find({})
    .limit(100)
    .then(items => res.json({ items }));
});
router.post("/change", (req, res) => {
  const { id, data } = req.body;
  Item.findById(id).then(itemRecord => {
    if (itemRecord) {
      itemRecord.name = data.name;
      itemRecord.description = data.description;
      itemRecord.material = data.material;
      itemRecord.type = data.type;
      itemRecord.functional = data.functional;
      itemRecord.params = data.params;
      itemRecord.checkAndUpdateImgs(data.images);
      itemRecord.save().then(() => itemRecord._id);
    }
  });
  res.json({});
});
router.post("/", (req, res) => {
  const item = req.body.item;
  saveItem(item).then(id => {
    res.json({});
  });
});
module.exports = router;

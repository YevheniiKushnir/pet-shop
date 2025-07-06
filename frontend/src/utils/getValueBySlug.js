import slugify from "./slugify";

const getValueBySlug = (dataFromRedux, slug) => {
  return dataFromRedux.find((dataItem) => slugify(dataItem.title) === slug);
};

export default getValueBySlug;

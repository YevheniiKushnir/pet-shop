export const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

export const getValueBySlug = (dataFromRedux, slug) => {
  return dataFromRedux.find((dataItem) => slugify(dataItem.title) === slug);
};

export const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");

export const getCategoryBySlug = (dataFromRedux, slug) => {
  return dataFromRedux.find((dataItem) => slugify(dataItem.title) === slug);
};

export const getCategorySlug = (title) => slugify(title);

export const getProductSlug = (title, id) => `${slugify(title)}-${id}`;

export const getIdFromSlug = (slug) => {
  const parts = slug.split("-");
  const id = parts[parts.length - 1];
  return parseInt(id, 10);
};

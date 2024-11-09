export const getPostId = (title: string) => {
  return title.toLowerCase().replaceAll(' ', '-');
};

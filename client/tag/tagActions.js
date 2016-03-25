export const toggleTag = (tagName) => ({
  type: 'TOGGLE_TAG',
  payload: {
    tagName,
  },
});

export const clearTags = () => ({
  type: 'CLEAR_TAGS',
});

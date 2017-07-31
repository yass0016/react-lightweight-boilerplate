export const selectWord = (word) => {
 console.log(word);

 return {
  type: 'WORD_SELECTED',
  payload: word
 };
};

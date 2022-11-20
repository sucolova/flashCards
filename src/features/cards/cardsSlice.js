import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: 'cards',
  initialState: {
    cards: {},
  },
  reducers: {
    addCards: (state, action) => {
      action.payload.forEach(card => {
        state.cards[card.id] = card;
      })
    }
  }
});

export const selectCardsSlice = (state) => state.cards;
export const addCards = cardsSlice.actions.addCards;
export default cardsSlice.reducer;

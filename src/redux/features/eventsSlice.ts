import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EventState = {
    id?: number;
    eventName: string;
    date: String;
};

const initialState = {
    events: [] as EventState[],
    nextEventId: 10001 as number
};

export const event = createSlice({
    name: "events",
    initialState,
    reducers: {
        reset: () => initialState,
        addEvent: (state, action: PayloadAction<EventState>) => {
            action.payload.id = state.nextEventId;
            state.events.push(action.payload);
            state.nextEventId += 1;
        },
        deleteEvent: (state, action: PayloadAction<number>) => {
            state.events.filter(event => event.id != action.payload);
        }
    },
});

export const {
    reset,
    addEvent,
    deleteEvent
} = event.actions;
export default event.reducer;
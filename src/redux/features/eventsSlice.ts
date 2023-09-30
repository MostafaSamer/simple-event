import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type EventState = {
    id: number;
    eventName: string;
    date: Date;
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
            state.events.push(action.payload);
            state.nextEventId += 1;
        },
        deleteEvent: (state, action: PayloadAction<number>) => {
            // to be done
        }
    },
});

export const {
    reset,
    addEvent,
    deleteEvent
} = event.actions;
export default event.reducer;
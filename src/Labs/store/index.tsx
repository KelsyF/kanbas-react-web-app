
import { configureStore } from "@reduxjs/toolkit";
import helloReducer from "../Lab4/ReduxExamples/HelloRedux/helloReducer";
import counterReducer from "../Lab4/ReduxExamples/CounterRedux/counterReducer";
import addReducer from "../Lab4/ReduxExamples/AddRedux/addReducer";
import todosReducer from "../Lab4/ReduxExamples/ToDos/todosReducer";

const store = configureStore({
    reducer: {
        helloReducer,
        counterReducer,
        addReducer,
        todosReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
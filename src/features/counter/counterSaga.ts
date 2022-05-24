import {delay, put, takeEvery} from "@redux-saga/core/effects"
import { PayloadAction } from "@reduxjs/toolkit"
import { incrementSaga, incrementSagaSuccess } from "./counterSlice"

// export function* log(action: PayloadAction) {
//     console.log("log", action)
// }

function* handleIncrementSage(action: PayloadAction<number>) {
    // Waiting 2s
    console.log("Waiting for 2s")
    yield delay(2000)
    console.log("finish waiting 2s")

    // Dispatch an action
    yield put(incrementSagaSuccess(action.payload))
}

export default function* counterSaga() {
    console.log("Counter Saga")

    yield takeEvery(incrementSaga.toString(),handleIncrementSage)
}
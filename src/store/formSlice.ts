import { type PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface FormState {
  firstName: string
  lastName: string
}
const initialState: FormState = {
  firstName: '',
  lastName: ''
}

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setFirstNameAsync.fulfilled, (state, action: PayloadAction<string>) => {
      state.firstName = action.payload
    })
    builder.addCase(setLastNameAsync.fulfilled, (state, action: PayloadAction<string>) => {
      state.lastName = action.payload
    })
  }
})

export const setFirstNameAsync = createAsyncThunk(
  'form/setFirstNameAsync',
  async (firstName: string) => {
    return firstName
  }
)
export const setLastNameAsync = createAsyncThunk(
  'form/setLastNameAsync',
  async (lastName: string) => {
    return lastName
  }
)

export default formSlice.reducer

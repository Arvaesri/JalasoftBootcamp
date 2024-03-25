import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
        initialState:[{
        id: 0,
        name: "jhon",
        email: "jhon@mail.com",
        phone: "2345678",
        password: "secret_password"
    }],
    reducers: {
      createUser: (state, action) => {
        //state = [...state, action.payload] // adiciona o novo user a copia da lista anterior
        console.log(action.payload);
        state.push(action.payload);
      },
      updateUser: (state, action) => {
        state = state.map((user) => {
          return user.id === action.payload.id ? action.payload : user;}) // subistitui o user com mesmo id pelo novo
      },
      deleteUser: (state, action) => {
        console.log(action.payload)
        console.log(state)
        state.pop(action.payload);
        console.log(action.payload)
        console.log(state)
        //state = state.filter((user) => {return user.id !== action.payload})
        console.log(state)
      },
    }
  })
  // Action creators are generated for each case reducer function
  export const { createUser, updateUser, deleteUser} = userSlice.actions

  export const selectUser = (state) => state

  export default userSlice.reducer
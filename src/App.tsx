/* eslint-disable @typescript-eslint/no-floating-promises */
import { type AppDispatch, type RootState } from './store/index'
import { useDispatch, useSelector } from 'react-redux'
import { setFirstNameAsync, setLastNameAsync } from './store/formSlice'
import { useEffect, useState } from 'react'
import { breakify } from './util'

function App () {
  const { firstName, lastName } = useSelector((state: RootState) => state.formReducer)
  const dispatch = useDispatch<AppDispatch>()
  const [first, setFirst] = useState(['', '', ''])
  const [last, setLast] = useState(['', '', ''])
  useEffect(() => {
    const first = breakify(firstName)
    first !== '' ? setFirst(first) : setFirst(['', '', ''])
  }, [firstName])
  useEffect(() => {
    const last = breakify(lastName)
    last !== '' ? setLast(last) : setLast(['', '', ''])
  }, [lastName])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    dispatch(setFirstNameAsync(firstName))
    dispatch(setLastNameAsync(lastName))
  }
  const handleOnchage = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()
    if (e.target.name === 'firstName') {
      console.log(e.target.value)
      dispatch(setFirstNameAsync(e.target.value))
    }
    if (e.target.name === 'lastName') {
      dispatch(setLastNameAsync(e.target.value))
    }
  }

  return (
    <div className='flex justify-center items-center w-full h-screen flex-col '>
      <div className='flex gap-4 flex-col flex-wrap justify-center items-center bg-stone-900 text-white p-8 w-[500px] h-[500px] overflow-hidden'>
        <h1 className='text-6xl font-extrabold my-2 text-center overflow-auto max-w-full'>
          {
            (first.join() !== '')
              ? (
                <>
                  {first[0]}<span className='text-green-950 mr-[-10px]'>{first[1]}</span> {first[2]} <br />
                </>
                )
              : firstName
          }
          {
            (last.join() !== '')
              ? (
                <>
                  {last[0]}<span className='text-green-950 mr-[-10px]'>{last[1]}</span> {last[2]} <br />
                </>
                )
              : lastName
          }
        </h1>
        <form className='flex gap-4 flex-col items-center' onSubmit={(e) => { handleSubmit(e) }}>
          <div className='flex gap-2'>
            <div className='flex flex-col'>
              <label htmlFor='firstName'>First Name</label>
              <input name='firstName' type='text' className='text-slate-700' onChange={handleOnchage} value={firstName} />
            </div>
            <div className='flex flex-col'>
              <label htmlFor='lastName'>Last Name</label>
              <input name='lastName' type='text' className='text-slate-700' onChange={handleOnchage} value={lastName} />
            </div>
          </div>
          <button className='border-2 border-red-200  bg-green-950 p-2 self-stretch' type='submit'>
            <span>BreaKify</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default App

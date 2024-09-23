# counter + concept of callback in counter

if counter value is required to be increased by 2 or more than 2 then this code won't work

const [counter, setCounter] = useState(0);

  const addValue = () => {
    if(counter < 20) {
      setCounter(counter + 1) 
      setCounter(counter + 1)
      setCounter(counter + 1)
      setCounter(counter + 1)
    }
  }

If counter starts at 0, all four calls to setCounter(counter + 1) will schedule an update to set counter to 1, not 4. Since these updates are batched and processed together, React will take the last setCounter call and render the state based on that.

**correct code => use of call back**
If counter starts at 0, all four calls to setCounter((prevCounter) => prevCounter + 1) will each schedule an update that increments the previous state value. Each update uses the most recent counter value, so the first call will increment it to 1, the second to 2, the third to 3, and the fourth to 4. Since React batches these updates but applies them sequentially based on the latest state, the final value of counter will correctly be 4.

The callback ensures each update references the most up-to-date state, preventing stale values from being used.

**another case**
  const addValue = () => {
    if(counter < 20) {
      setCounter(counter + 1) 
      setCounter((prevCounter) => prevCounter + 1) 
      setCounter(counter + 1)
    }
  }

The first and third setCounter(counter + 1) calls both use the stale value of counter (which is 0).
The second setCounter((prevCounter) => prevCounter + 1) increments the updated state, but it gets overwritten by the third setCounter(counter + 1), which is based on the stale value.
So even though the second call increments the value to 2, the third call ultimately resets it back to 1, and that’s why the final result is 1.

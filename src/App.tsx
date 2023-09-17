import { useAtom } from 'jotai';
import { atomWithObservable } from 'jotai/utils';
import { Subject } from 'rxjs';

const subject = new Subject<number>();
const counterAtom = atomWithObservable(() => subject, {
  initialValue: 10,
});

function App() {
  const [counter, setCounter] = useAtom(counterAtom);
  return (
    <>
      <div>count: {counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+1</button>
    </>
  );
}

export default App;

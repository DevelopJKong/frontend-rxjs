import { useAtom } from 'jotai';
import { atomWithObservable } from 'jotai/utils';
import { Subject } from 'rxjs';
import { confirmAlert } from 'react-confirm-alert';
const subject = new Subject<number>();
const counterAtom = atomWithObservable(() => subject, {
  initialValue: 10,
});

function App() {
  const submit = () => {
    confirmAlert({
      title: 'Confirm to submit',
      message: 'Are you sure to do this.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => setCounter(counter + 1),
        },
        {
          label: 'No',
          onClick: () => alert('Click No'),
        },
      ],
    });
  };

  const [counter, setCounter] = useAtom(counterAtom);

  return (
    <>
      <div>count: {counter}</div>
      <button
        onClick={() => {
          submit();
        }}
      >
        +1
      </button>
    </>
  );
}

export default App;

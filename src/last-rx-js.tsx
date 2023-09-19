import { useAtom } from 'jotai';
import { atomWithObservable } from 'jotai/utils';
import { confirmAlert } from 'react-confirm-alert';
import { Subject } from 'rxjs';

const subject = new Subject<number>();
const counterAtom = atomWithObservable(() => subject, {
  initialValue: 10,
});

const LastRxjs = () => {
  const [counter, setCounter] = useAtom(counterAtom);
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
  return <div onClick={submit}>LastRxjs</div>;
};

export default LastRxjs;

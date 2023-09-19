import { useEffect } from 'react';
import { webSocket } from 'rxjs/webSocket';

const subject = webSocket('ws://localhost:8081');

const Rxjs = () => {
  useEffect(() => {
    subject.subscribe();
    subject.next({ message: 'some message' });
    subject.complete(); // Closes the connection.
    subject.error({ code: 4000, reason: 'I think our app just broke!' });
  }, []);

  return (
    <button type='button' onClick={undefined}>
      Rxjs
    </button>
  );
};

export default Rxjs;

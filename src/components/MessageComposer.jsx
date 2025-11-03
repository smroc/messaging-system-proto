import PropTypes from 'prop-types';
import { useState } from 'react';

function MessageComposer({ onSend, isSending, disabled }) {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    onSend(text.trim());
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 p-md-4 border-top bg-white rounded-bottom shadow-sm">
      <div className="input-group">
        <div className="input-group-prepend d-none d-md-flex">
          <span className="input-group-text bg-white border-right-0 text-muted">
            <span role="img" aria-hidden="true">
              📎
            </span>
          </span>
        </div>
        <textarea
          className="form-control border-left-0 rounded-lg"
          rows="3"
          placeholder="Send a respectful, iMessage-worthy note…"
          value={text}
          onChange={(event) => setText(event.target.value)}
          disabled={isSending || disabled}
        ></textarea>
        <div className="input-group-append">
          <button
            type="submit"
            className="btn btn-primary d-flex align-items-center px-3 px-md-4"
            disabled={isSending || disabled}
          >
            {isSending ? (
              <>
                <span className="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>
                Sending
              </>
            ) : (
              <>
                <span className="mr-2" role="img" aria-hidden="true">
                  🚀
                </span>
                Send
              </>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

MessageComposer.propTypes = {
  onSend: PropTypes.func.isRequired,
  isSending: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default MessageComposer;

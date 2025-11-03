import PropTypes from 'prop-types';
import { useEffect, useRef } from 'react';

function MessageList({ messages, isLoading }) {
  const listRef = useRef(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages]);

  return (
    <div ref={listRef} className="flex-grow-1 overflow-auto px-3 px-md-4 py-4 message-list">
      {isLoading ? (
        <div className="d-flex flex-column align-items-center justify-content-center h-100 text-muted">
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="sr-only">Loading conversation…</span>
          </div>
          <p className="mb-0">Styling your chat experience…</p>
        </div>
      ) : (
        messages.map((message) => (
          <div
            key={message.id}
            className={`d-flex mb-3 ${message.sender === 'me' ? 'justify-content-end' : 'justify-content-start'}`}
          >
            <div
              className={`message-bubble shadow-sm ${
                message.sender === 'me'
                  ? 'bg-gradient-primary text-white align-self-end'
                  : 'bg-white text-dark border'
              }`}
            >
              <p className="mb-1">{message.text}</p>
              <span className="message-time small text-muted">
                {new Date(message.timestamp).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      sender: PropTypes.oneOf(['me', 'contact']).isRequired,
      text: PropTypes.string.isRequired,
      timestamp: PropTypes.number.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default MessageList;

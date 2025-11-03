import PropTypes from 'prop-types';

function ConversationHeader({ contact, onSimulateReply, isSimulating }) {
  return (
    <div className="d-flex align-items-center justify-content-between py-3 px-4 border-bottom border-0 shadow-sm rounded-top bg-white">
      <div className="d-flex align-items-center">
        <div className="position-relative">
          <img
            src={contact.avatar}
            alt={contact.name}
            className="rounded-circle shadow-sm mr-3 avatar-lg"
          />
          <span className="status-dot" aria-hidden="true"></span>
        </div>
        <div>
          <h2 className="h5 mb-1 font-weight-semibold text-primary mb-0">{contact.name}</h2>
          <div className="text-muted small">{contact.status}</div>
        </div>
      </div>
      <button
        type="button"
        className="btn btn-outline-primary btn-sm d-none d-sm-inline-flex align-items-center"
        onClick={onSimulateReply}
        disabled={isSimulating}
      >
        <span className="mr-2" role="img" aria-hidden="true">
          ✨
        </span>
        {isSimulating ? 'Summoning reply…' : 'Nudge for reply'}
      </button>
    </div>
  );
}

ConversationHeader.propTypes = {
  contact: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  onSimulateReply: PropTypes.func.isRequired,
  isSimulating: PropTypes.bool.isRequired,
};

export default ConversationHeader;

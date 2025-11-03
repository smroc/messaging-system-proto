import { useEffect, useMemo, useState } from 'react';
import ConversationHeader from './components/ConversationHeader.jsx';
import MessageComposer from './components/MessageComposer.jsx';
import MessageList from './components/MessageList.jsx';
import { fetchConversation, sendMessage, simulateIncomingMessage } from './mock/api.js';

function App() {
  const [contact, setContact] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const [isSimulating, setIsSimulating] = useState(false);

  useEffect(() => {
    let isMounted = true;
    fetchConversation().then((response) => {
      if (!isMounted) return;
      setContact(response.contact);
      setMessages(response.messages);
      setIsLoading(false);
    });
    return () => {
      isMounted = false;
    };
  }, []);

  const handleSend = async (text) => {
    setIsSending(true);
    const newMessage = await sendMessage(text);
    setMessages((prev) => [...prev, newMessage]);
    setIsSending(false);
  };

  const handleSimulateReply = async () => {
    setIsSimulating(true);
    const incoming = await simulateIncomingMessage();
    setMessages((prev) => [...prev, incoming]);
    setIsSimulating(false);
  };

  const lastSeen = useMemo(() => {
    if (!messages.length) return '';
    const last = messages[messages.length - 1];
    const time = new Date(last.timestamp).toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
    });
    return `${last.sender === 'me' ? 'You' : contact?.name || 'They'} • ${time}`;
  }, [messages, contact]);

  return (
    <div className="app-shell d-flex align-items-center justify-content-center py-4 py-md-5">
      <div className="chat-card d-flex flex-column shadow-lg rounded-xl border-0 overflow-hidden">
        {contact ? (
          <ConversationHeader
            contact={contact}
            onSimulateReply={handleSimulateReply}
            isSimulating={isSimulating}
          />
        ) : (
          <div className="py-3 px-4">Loading header…</div>
        )}
        <MessageList messages={messages} isLoading={isLoading} />
        <div className="px-4 pb-2 text-right text-muted small last-seen">{lastSeen}</div>
        <MessageComposer onSend={handleSend} isSending={isSending} disabled={isLoading} />
      </div>
    </div>
  );
}

export default App;

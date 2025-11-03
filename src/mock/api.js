const contact = {
  id: 'contact-1',
  name: 'Sierra Lane',
  avatar: 'https://i.pravatar.cc/80?img=68',
  status: 'Active now',
};

let mockMessages = [
  {
    id: 'm1',
    sender: 'contact',
    text: 'Hey! The moodboard you sent is gorgeous. 💙',
    timestamp: new Date().setHours(9, 12),
  },
  {
    id: 'm2',
    sender: 'me',
    text: 'Right? I leaned into that airy coastal vibe you love.',
    timestamp: new Date().setHours(9, 14),
  },
  {
    id: 'm3',
    sender: 'contact',
    text: 'It feels like iMessage but elevated. Can we bring that gradient into the hero?',
    timestamp: new Date().setHours(9, 17),
  },
  {
    id: 'm4',
    sender: 'me',
    text: 'Already experimenting! Sending you a sneak peek in a bit. ✨',
    timestamp: new Date().setHours(9, 19),
  },
];

let counter = mockMessages.length;

export function fetchConversation() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        contact,
        messages: [...mockMessages],
      });
    }, 650);
  });
}

export function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newMessage = {
        id: `m${++counter}`,
        sender: 'me',
        text,
        timestamp: Date.now(),
      };
      mockMessages = [...mockMessages, newMessage];
      resolve(newMessage);
    }, 400);
  });
}

export function simulateIncomingMessage() {
  return new Promise((resolve) => {
    const replies = [
      'Absolutely! I will add it to the style guide.',
      'Love where this is going. Maybe add a subtle shadow?',
      'Can we review the microcopy after lunch?',
      'Obsessed! Dropping a calendar invite for the handoff. 💌',
    ];
    const message = {
      id: `m${++counter}`,
      sender: 'contact',
      text: replies[Math.floor(Math.random() * replies.length)],
      timestamp: Date.now() + 120000,
    };

    setTimeout(() => {
      mockMessages = [...mockMessages, message];
      resolve(message);
    }, 1800);
  });
}

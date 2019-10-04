const courts = {
  'badminton': [
    { id: 30, court: 1 },
    { id: 31, court: 2 },
    { id: 32, court: 3 },
    { id: 33, court: 4 },
    { id: 34, court: 5 },
    { id: 35, court: 6 },
    { id: 45, court: 7 },
    { id: 46, court: 8 },
    { id: 47, court: 9 },
    { id: 48, court: 10 },
  ]
};

const findCourt = (type, courtNumber) => courts[type].find(({ court }) => court === courtNumber).id;

module.exports = {
  courts,
  findCourt
};

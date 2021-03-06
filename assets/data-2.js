const flights = [
  {
    id: 1,
    fields: {
      company: 'SpaceEx',
      expirianceLevel: ['#dba617'],
      featured: false,
      price: 3450000,
      name: 'Earth Orbit- Experience the Blue Planet from over 300 km up',
      image: [
        {
          url:
            'https://images.pexels.com/photos/586063/pexels-photo-586063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
      ],
      desc:
        "I'm baby authentic chillwave mlkshk jean shorts readymade paleo. Drinking vinegar flexitarian knausgaard farm-to-table. Intelligentsia hexagon readymade deep v yr, man braid cardigan XOXO roof party cold-pressed adaptogen. Fam raclette green juice food truck godard bitters dreamcatcher chambray bespoke edison bulb glossier. Chartreuse air plant hell of seitan. Wolf kombucha bushwick next level you probably haven't heard of them echo park. Leggings butcher wolf waistcoat, cronut migas post-ironic.",
    },
  },
  {
    id: 2,
    fields: {
      company: 'SpaceEx',
      expirianceLevel: ['#dba617', '#f86368', '#00ba37'],
      featured: true,
      price: 8450000,
      name: 'Mars and Beyond - The road to make Humanity multiplanetary',
      image: [
        {
          url:
            'https://images.pexels.com/photos/73910/mars-mars-rover-space-travel-robot-73910.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
      ],
      desc:
        "I'm baby authentic chillwave mlkshk jean shorts readymade paleo. Drinking vinegar flexitarian knausgaard farm-to-table. Intelligentsia hexagon readymade deep v yr, man braid cardigan XOXO roof party cold-pressed adaptogen. Fam raclette green juice food truck godard bitters dreamcatcher chambray bespoke edison bulb glossier. Chartreuse air plant hell of seitan. Wolf kombucha bushwick next level you probably haven't heard of them echo park. Leggings butcher wolf waistcoat, cronut migas post-ironic.",
    },
  },
  {
    id: 3,
    fields: {
      company: 'SpaceEx',
      expirianceLevel: ['#dba617', '#f86368'],
      featured: false,
      price: 5450000,
      name: 'Moon - Returning humans to our Lunar Neighbor',
      image: [
        {
          url:
            'https://images.pexels.com/photos/684441/pexels-photo-684441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
      ],
      desc:
        "I'm baby authentic chillwave mlkshk jean shorts readymade paleo. Drinking vinegar flexitarian knausgaard farm-to-table. Intelligentsia hexagon readymade deep v yr, man braid cardigan XOXO roof party cold-pressed adaptogen. Fam raclette green juice food truck godard bitters dreamcatcher chambray bespoke edison bulb glossier. Chartreuse air plant hell of seitan. Wolf kombucha bushwick next level you probably haven't heard of them echo park. Leggings butcher wolf waistcoat, cronut migas post-ironic.",
    },
  },
  {
    id: 4,
    fields: {
      company: 'SpaceEx',
      expirianceLevel: ['#dba617', '#f86368'],
      featured: false,
      price: 5450000,
      name:
        'Space Station - Transporting Humans to the orbiting laboratory in the sky',
      image: [
        {
          url:
            'https://images.pexels.com/photos/41006/satellite-soyuz-spaceship-space-station-41006.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
      ],
      desc:
        "I'm baby authentic chillwave mlkshk jean shorts readymade paleo. Drinking vinegar flexitarian knausgaard farm-to-table. Intelligentsia hexagon readymade deep v yr, man braid cardigan XOXO roof party cold-pressed adaptogen. Fam raclette green juice food truck godard bitters dreamcatcher chambray bespoke edison bulb glossier. Chartreuse air plant hell of seitan. Wolf kombucha bushwick next level you probably haven't heard of them echo park. Leggings butcher wolf waistcoat, cronut migas post-ironic.",
    },
  },
  {
    id: 5,
    fields: {
      company: 'Virgin Galactic',
      expirianceLevel: ['#dba617', '#f86368', '#00ba37'],
      featured: false,
      price: 5450000,
      name: 'Olympus Mons, Mars',
      image: [
        {
          url:
            'https://images.pexels.com/photos/4355348/pexels-photo-4355348.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
      ],
      desc:
        "I'm baby authentic chillwave mlkshk jean shorts readymade paleo. Drinking vinegar flexitarian knausgaard farm-to-table. Intelligentsia hexagon readymade deep v yr, man braid cardigan XOXO roof party cold-pressed adaptogen. Fam raclette green juice food truck godard bitters dreamcatcher chambray bespoke edison bulb glossier. Chartreuse air plant hell of seitan. Wolf kombucha bushwick next level you probably haven't heard of them echo park. Leggings butcher wolf waistcoat, cronut migas post-ironic.",
    },
  },
  {
    id: 6,
    fields: {
      company: 'Blue Origin',
      expirianceLevel: ['#dba617', '#f86368'],
      featured: true,
      price: 2330000,
      name: 'Apollo 11 landing site, Sea of Tranquility, Moon',
      image: [
        {
          url:
            'https://images.pexels.com/photos/39896/space-station-moon-landing-apollo-15-james-irwin-39896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
      ],
      desc:
        "I'm baby authentic chillwave mlkshk jean shorts readymade paleo. Drinking vinegar flexitarian knausgaard farm-to-table. Intelligentsia hexagon readymade deep v yr, man braid cardigan XOXO roof party cold-pressed adaptogen. Fam raclette green juice food truck godard bitters dreamcatcher chambray bespoke edison bulb glossier. Chartreuse air plant hell of seitan. Wolf kombucha bushwick next level you probably haven't heard of them echo park. Leggings butcher wolf waistcoat, cronut migas post-ironic.",
    },
  },
  {
    id: 7,
    fields: {
      company: 'Virgin Galactic',
      expirianceLevel: ['#dba617', '#f86368', '#00ba37'],
      featured: true,
      price: 5450000,
      name: 'Valles Marineris, Mars',
      image: [
        {
          url:
            'https://images.pexels.com/photos/8474484/pexels-photo-8474484.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        },
      ],
      desc:
        "I'm baby authentic chillwave mlkshk jean shorts readymade paleo. Drinking vinegar flexitarian knausgaard farm-to-table. Intelligentsia hexagon readymade deep v yr, man braid cardigan XOXO roof party cold-pressed adaptogen. Fam raclette green juice food truck godard bitters dreamcatcher chambray bespoke edison bulb glossier. Chartreuse air plant hell of seitan. Wolf kombucha bushwick next level you probably haven't heard of them echo park. Leggings butcher wolf waistcoat, cronut migas post-ironic.",
    },
  },
];
module.exports = flights;

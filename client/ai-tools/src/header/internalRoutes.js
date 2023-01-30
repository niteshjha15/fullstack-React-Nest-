export const internalRoutes = [
  {
    name: "Ask AI",
    path: "/askAi",
    hasNested:false
  },
  {
    name: "Of The Day",
    hasNested:true,
    path:'/of-the-day',
    links:[{
      name:'Asteriod Of The Day',
      path:'/asteriod-of-the-day'
    }]
  },
];

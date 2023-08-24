export const PublicRoutes = {
  LANDING: "landing",
  LOGIN: "login",
  REGISTER: "register",
};

export const PrivateRoutes = {
  HOME: "home",
  ROUTINES: "routines",
  PROFILE: "profile",
  MESOCICLOS: `${PrivateRoutes.ROUTINES}/:routineId/mesociclos/:mesocicloId`,
  DAY: "day",
  ACCOUNT: "account",
  TRAINERS: "trainers",
  BECOME_TRAINER: "become-trainer",
  ABOUT_US: "about-us",
  TRAINER: "trainer",
};

export const TrainerRoutes = {
  DASHBOARD: "dashboard",
  CREATE_ROUTINE: "create-routine",
  VIEW_ROUTINE: "view-routine",
};

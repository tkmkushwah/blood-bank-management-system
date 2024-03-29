export const userMenu = [
  {
    name: "Home",
    path: "/",
    icon: "fa-solid fa-house",
  },
  {
    name: "Requests",
    path: "/blood-request",
    icon: "fa-solid fa-list",
  },
  {
    name: "Apply Donor",
    path: "/apply-donor", 
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "fa-solid fa-user",
  },
];

// admin menu
export const adminMenu = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: "fa-solid fa-house",
  },

  {
    name: "Donations",
    path: "/admin/donar_requests",
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "Receivers",
    path: "/admin/receiver_requests",
    icon: "fa-solid fa-user",
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: "fa-solid fa-user",
  },
];

export const donarMenu = [
  {
    name: "Dashboard",
    path: "/donor/dashboard",
    icon: "fa-solid fa-house",
  },

  {
    name: "Requests",
    path: "/donor/requests",
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "Profile",
    path: "/profile",
    icon: "fa-solid fa-user",
  },
];


export const receiverMenu = [
  {
    name: "Dashboard",
    path: "/receiver/dashboard",
    icon: "fa-solid fa-house",
  },

  {
    name: "Requests",
    path: "/receiver/requests",
    icon: "fa-solid fa-user-doctor",
  },
  {
    name: "BloodBank",
    path: "/receiver/reqbloodbank",
    icon: "fa-solid fa-user",
  },
];

const profileDetails = {
  name: "Saurav Sanjay",
  about: "Associate Software Engineer",
  college: "Sant Longowal Institute of Engineering and Technology",
};

const socialPlatforms = [
  {
    name: "twitter",
    label: "Twitter",
    url: "https://twitter.com/saurav_sanjay_",
    icon: "fab fa-twitter",
    legacyIcon: "fab fa-twitter",
    handle: "twitter/saurav_sanjay_",
  },
  {
    name: "facebook",
    label: "Facebook",
    url: "https://www.facebook.com/saurav.sanjay.14",
    icon: "fab fa-facebook",
    legacyIcon: "fab fa-facebook",
    handle: "facebook/saurav.sanjay.14",
  },
  {
    name: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/saurav_sanjay_",
    icon: "fab fa-instagram",
    legacyIcon: "fab fa-instagram",
    handle: "instagram/saurav_sanjay_",
  },
  {
    name: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/sauravsanjay",
    icon: "fab fa-linkedin",
    legacyIcon: "fab fa-linkedin",
    handle: "linkedin/sauravsanjay",
  },
  {
    name: "bluesky",
    label: "Bluesky",
    url: "https://bsky.app/profile/saurav-sanjay.github.io",
    icon: "fab fa-react",
    legacyIcon: "fab fa-react",
    handle: "bluesky/saurav-sanjay.github.io",
  },
  {
    name: "youtube",
    label: "YouTube",
    url: "https://www.youtube.com/@saurav-sanjay",
    icon: "fab fa-youtube",
    legacyIcon: "fab fa-youtube",
    handle: "youtube/@saurav-sanjay",
  },
  {
    name: "github",
    label: "GitHub",
    url: "https://www.github.com/saurav-sanjay",
    icon: "fab fa-github",
    legacyIcon: "fab fa-github",
    handle: "github/saurav-sanjay",
  },
  {
    name: "leetcode",
    label: "LeetCode",
    url: "https://www.leetcode.com/saurav-sanjay",
    icon: "fas fa-code",
    legacyIcon: "fas fa-code",
    handle: "leetcode/saurav-sanjay",
  },
  {
    name: "geeksforgeeks",
    label: "GeeksforGeeks",
    url: "https://auth.geeksforgeeks.org/user/saujay",
    icon: "fas fa-book",
    legacyIcon: "fas fa-book",
    handle: "geeksforgeeks/saujay",
  },
  {
    name: "codechef",
    label: "CodeChef",
    url: "https://www.codechef.com/users/saurav_sanjay",
    icon: "fas fa-terminal",
    legacyIcon: "fas fa-terminal",
    handle: "codechef/saurav_sanjay",
  },
];

const navigationMenuItems = [
  {
    id: "about",
    title: "About",
    leftIcon: "far fa-user-circle",
    rightIcon: "fas fa-chevron-right",
    screenId: "about",
  },
  {
    id: "projects",
    title: "Projects",
    leftIcon: "fas fa-tasks",
    rightIcon: "fas fa-chevron-right",
    screenId: "projects",
  },
  {
    id: "contact",
    title: "Contact me",
    leftIcon: "far fa-paper-plane",
    rightIcon: "fas fa-chevron-right",
    screenId: "contact",
  },
];

const aboutTimeline = [
  {
    role: "Associate Software Engineer",
    company: "Unthinkable Solutions LLP",
    period: "Jan 2026 - Present",
  },
  {
    role: "Junior Associate Software Engineer",
    company: "Unthinkable Solutions LLP",
    period: "July 2024 - Dec 2025",
  },
  {
    role: "Intern",
    company: "Unthinkable Solutions LLP",
    period: "Jan 2024 - June 2024",
  },
];

const contactConfig = {
  email: "resourcesatresource@gmail.com",
  mailSubject: "Portfolio contact from saurav-sanjay.github.io",
};

const contactPlatforms = socialPlatforms.filter(({ name }) =>
  ["linkedin", "bluesky", "twitter", "github", "instagram", "youtube"].includes(
    name,
  ),
);

export {
  aboutTimeline,
  contactConfig,
  contactPlatforms,
  navigationMenuItems,
  profileDetails,
  socialPlatforms,
};

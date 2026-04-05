const platforms = [
  {
    name: "projects",
    url: "/projects",
    icon: "fas fa-tasks",
  },
  {
    name: "twitter",
    url: "https://twitter.com/saurav_sanjay_",
    icon: "fab fa-twitter",
  },
  {
    name: "facebook",
    url: "https://www.facebook.com/saurav.sanjay.14",
    icon: "fab fa-facebook",
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/saurav_sanjay_",
    icon: "fab fa-instagram",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/sauravsanjay",
    icon: "fab fa-linkedin",
  },
  {
    name: "bluesky",
    url: "https://bsky.app/profile/saurav-sanjay.github.io",
    icon: "fab fa-react",
  },
  {
    name: "youtube",
    url: "https://www.youtube.com/@saurav-sanjay",
    icon: "fab fa-youtube",
  },
  {
    name: "github",
    url: "https://www.github.com/saurav-sanjay",
    icon: "fab fa-github",
  },
  {
    name: "leetcode",
    url: "https://www.leetcode.com/saurav-sanjay",
    icon: "fas fa-code",
  },
  {
    name: "geeksforgeeks",
    url: "https://auth.geeksforgeeks.org/user/saujay",
    icon: "fas fa-book",
  },
  {
    name: "codechef",
    url: "https://www.codechef.com/users/saurav_sanjay",
    icon: "fas fa-terminal",
  },
];

const navigationMenuItems = [
  {
    id: "about",
    title: "About",
    url: "/about",
    leftIcon: "far fa-user-circle",
    rightIcon: "fas fa-chevron-right",
    target: "_self",
  },
  {
    id: "contact",
    title: "Contact me",
    leftIcon: "far fa-paper-plane",
    rightIcon: "fas fa-chevron-right",
    screenId: "contact",
  },
];

const myDetails = {
  name: "Saurav Sanjay",
  about: "Associate Software Engineer",
  college: "Sant Longowal Institute of Engineering and Technology",
};

const CONTACT_CONFIG = {
  email: "resourcesatresource@gmail.com",
  mailSubject: "Portfolio contact from saurav-sanjay.github.io",
};

const CONTACT_PLATFORMS = platforms.filter(({ name }) =>
  ["linkedin", "bluesky", "twitter", "github", "instagram", "youtube"].includes(
    name,
  ),
);

const THEME = {
  DARK: "dark",
  LIGHT: "light",
  STORAGE_KEY: "preferred-theme",
};

const rootElement = document.getElementById("root");

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function createIcon(iconClassName, isDecorative = true) {
  const icon = document.createElement("i");
  icon.className = iconClassName;

  if (isDecorative) {
    icon.setAttribute("aria-hidden", "true");
  }

  return icon;
}

function createMenuButton() {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "menu-trigger";
  button.setAttribute("aria-label", "Open navigation menu");
  button.setAttribute("aria-haspopup", "dialog");
  button.setAttribute("aria-expanded", "false");

  const lines = document.createElement("span");
  lines.className = "menu-trigger__lines";

  for (let lineIndex = 0; lineIndex < 3; lineIndex += 1) {
    lines.appendChild(document.createElement("span"));
  }

  button.appendChild(lines);

  return button;
}

function getStoredTheme() {
  const storedTheme = window.localStorage.getItem(THEME.STORAGE_KEY);
  return storedTheme === THEME.LIGHT ? THEME.LIGHT : THEME.DARK;
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  window.localStorage.setItem(THEME.STORAGE_KEY, theme);
}

function createThemeToggle() {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "theme-toggle";
  button.setAttribute("aria-label", "Switch to light theme");
  button.setAttribute("aria-pressed", "false");

  const thumb = document.createElement("span");
  thumb.className = "theme-toggle__thumb";
  thumb.appendChild(createIcon("fas fa-moon"));

  button.appendChild(thumb);

  return button;
}

function updateThemeToggle(toggleButton, theme) {
  const nextTheme = theme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
  const iconClassName = theme === THEME.DARK ? "fas fa-moon" : "fas fa-sun";
  const icon = toggleButton.querySelector(".theme-toggle__thumb i");

  toggleButton.setAttribute("aria-label", `Switch to ${nextTheme} theme`);
  toggleButton.setAttribute("aria-pressed", String(theme === THEME.LIGHT));

  if (icon) {
    icon.style.opacity = "0";
    icon.style.transform = "scale(0.72) rotate(-18deg)";

    window.setTimeout(() => {
      icon.className = iconClassName;
      icon.setAttribute("aria-hidden", "true");
      icon.style.opacity = "1";
      icon.style.transform = "scale(1) rotate(0deg)";
    }, 110);
  }
}

function createNavigationItem(item, options = {}) {
  const { navigateToScreen, onNavigate } = options;
  const isScreenLink = Boolean(item.screenId);
  const isAction = item.type === "action" || isScreenLink;
  const element = document.createElement(isAction ? "button" : "a");
  element.className = "sheet-menu__item";

  if (isAction) {
    element.type = "button";
    element.addEventListener("click", () => {
      if (item.screenId) {
        navigateToScreen?.(item.screenId);
        return;
      }

      item.onSelect?.();
      onNavigate?.(item);
    });
  } else {
    element.href = item.url;

    if (item.target) {
      element.target = item.target;
    }

    if (item.rel) {
      element.rel = item.rel;
    }

    element.addEventListener("click", () => {
      onNavigate?.(item);
    });
  }

  const leading = document.createElement("span");
  leading.className = "sheet-menu__icon sheet-menu__icon--leading";

  if (item.leftIcon) {
    leading.appendChild(createIcon(item.leftIcon));
  }

  const title = document.createElement("span");
  title.className = "sheet-menu__title";
  title.textContent = item.title;

  const trailing = document.createElement("span");
  trailing.className = "sheet-menu__icon sheet-menu__icon--trailing";

  if (item.rightIcon) {
    trailing.appendChild(createIcon(item.rightIcon));
  }

  element.append(leading, title, trailing);

  return element;
}

function createContactSocialLink(platform) {
  const link = document.createElement("a");
  link.className = "contact-sheet__social-link";
  link.href = platform.url;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.setAttribute("aria-label", `Contact on ${capitalize(platform.name)}`);

  const icon = document.createElement("span");
  icon.className = "contact-sheet__social-icon";
  icon.appendChild(createIcon(platform.icon));

  const label = document.createElement("span");
  label.className = "contact-sheet__social-label";
  label.textContent = capitalize(platform.name);

  link.append(icon, label);

  return link;
}

function createMainMenuScreen(items, helpers) {
  const nav = document.createElement("nav");
  nav.className = "sheet-menu";
  nav.setAttribute("aria-label", "Main navigation");

  items.forEach((item) => {
    nav.appendChild(
      createNavigationItem(item, {
        navigateToScreen: helpers.navigateToScreen,
        onNavigate: helpers.closeSheet,
      }),
    );
  });

  return nav;
}

function createContactScreen({ closeSheet }) {
  const container = document.createElement("div");
  container.className = "sheet-screen contact-sheet";

  const description = document.createElement("p");
  description.className = "sheet-screen__description";
  description.textContent =
    "Drop a note here or reach out on the platforms below. The message button opens your default mail app.";

  const form = document.createElement("form");
  form.className = "contact-sheet__form";

  const label = document.createElement("label");
  label.className = "contact-sheet__label";
  label.htmlFor = "contact-sheet-message";
  label.textContent = "Message";

  const textarea = document.createElement("textarea");
  textarea.id = "contact-sheet-message";
  textarea.className = "contact-sheet__textarea";
  textarea.name = "message";
  textarea.rows = 4;
  textarea.placeholder = "Hi Saurav, I wanted to reach out about...";

  const actions = document.createElement("div");
  actions.className = "contact-sheet__actions";

  const sendButton = document.createElement("button");
  sendButton.type = "submit";
  sendButton.className = "contact-sheet__send";
  sendButton.append(
    createIcon("far fa-paper-plane"),
    document.createTextNode("Send"),
  );

  actions.appendChild(sendButton);
  form.append(label, textarea, actions);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const trimmedMessage = textarea.value.trim();

    if (!trimmedMessage) {
      textarea.focus();
      return;
    }

    const mailToUrl = `mailto:${CONTACT_CONFIG.email || ""}?subject=${encodeURIComponent(
      CONTACT_CONFIG.mailSubject,
    )}&body=${encodeURIComponent(trimmedMessage)}`;

    window.location.href = mailToUrl;
    closeSheet();
  });

  const socialSection = document.createElement("div");
  socialSection.className = "contact-sheet__socials";

  const socialHeading = document.createElement("h3");
  socialHeading.className = "contact-sheet__socials-title";
  socialHeading.textContent = "Reach me on";

  const socialGrid = document.createElement("div");
  socialGrid.className = "contact-sheet__social-grid";

  CONTACT_PLATFORMS.forEach((platform) => {
    socialGrid.appendChild(createContactSocialLink(platform));
  });

  socialSection.append(socialHeading, socialGrid);
  container.append(description, form, socialSection);

  return { element: container, initialFocusTarget: textarea };
}

function createBottomSheetMenu({ items, screens, initialScreenId }) {
  const overlay = document.createElement("div");
  overlay.className = "sheet-overlay";
  overlay.hidden = true;

  const sheet = document.createElement("section");
  sheet.className = "sheet";
  sheet.setAttribute("role", "dialog");
  sheet.setAttribute("aria-modal", "true");
  sheet.setAttribute("aria-labelledby", "sheet-title");

  const dragHandle = document.createElement("button");
  dragHandle.type = "button";
  dragHandle.className = "sheet__drag-handle";
  dragHandle.setAttribute("aria-label", "Drag or close navigation menu");

  const dragIndicator = document.createElement("span");
  dragIndicator.className = "sheet__drag-indicator";
  dragHandle.appendChild(dragIndicator);

  const header = document.createElement("div");
  header.className = "sheet__header";

  const backButton = document.createElement("button");
  backButton.type = "button";
  backButton.className = "sheet__back-button";
  backButton.setAttribute("aria-label", "Go back");
  backButton.appendChild(createIcon("fas fa-chevron-left"));

  const title = document.createElement("h2");
  title.id = "sheet-title";
  title.className = "sheet__title";
  title.textContent = "";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "sheet__close-button";
  closeButton.setAttribute("aria-label", "Close navigation menu");
  closeButton.appendChild(createIcon("fas fa-times"));

  header.append(backButton, title, closeButton);

  const content = document.createElement("div");
  content.className = "sheet__content";

  sheet.append(dragHandle, header, content);
  overlay.appendChild(sheet);

  const state = {
    screenStack: [initialScreenId],
  };
  const controls = {
    closeSheet: () => {},
  };

  const updateScreen = () => {
    const currentScreen =
      screens[state.screenStack[state.screenStack.length - 1]];

    if (!currentScreen) {
      return;
    }

    title.textContent = currentScreen.title;
    backButton.hidden = state.screenStack.length === 1;

    const { element, initialFocusTarget } = currentScreen.render({
      closeSheet: () => controls.closeSheet(),
      navigateToScreen,
      goBack,
      items,
    });

    content.replaceChildren(element);
    state.initialFocusTarget = initialFocusTarget ?? closeButton;
  };

  const navigateToScreen = (screenId) => {
    if (!screens[screenId]) {
      return;
    }

    state.screenStack.push(screenId);
    updateScreen();
    window.requestAnimationFrame(() => {
      state.initialFocusTarget?.focus?.();
    });
  };

  const goBack = () => {
    if (state.screenStack.length === 1) {
      return;
    }

    state.screenStack.pop();
    updateScreen();
    window.requestAnimationFrame(() => {
      state.initialFocusTarget?.focus?.();
    });
  };

  const resetScreens = () => {
    state.screenStack = [initialScreenId];
    updateScreen();
  };

  updateScreen();

  return {
    overlay,
    sheet,
    dragHandle,
    closeButton,
    backButton,
    resetScreens,
    bindControls(nextControls) {
      controls.closeSheet = nextControls.closeSheet;
    },
    goBack,
  };
}

function createCard(platform) {
  const id = platform.url.split("/").pop() ?? platform.name;

  return `<div class="textEffect">
        <p><i class="${platform.icon}"></i> ${capitalize(platform.name)}</p>
        <p><a href="${platform.url}" id="${platform.name}Link">${
          platform.name
        }/${id}</a></p>
        </div>`;
}

function createProfile() {
  return `<section class="profile-hero">
    <div class="profile-banner" aria-hidden="true">
      <img class="profile-banner__image" src="/assets/images/defaultPhoto.jpg" alt="" />
      <div class="profile-banner__glow profile-banner__glow--left"></div>
      <div class="profile-banner__glow profile-banner__glow--right"></div>
      <div class="profile-banner__mesh"></div>
    </div>
    <div class="profile-content">
      <a class="profile-avatar-link" href="./socials" aria-label="Open social cards">
        <img src="/assets/images/defaultPhoto.jpg" alt="Profile picture of ${myDetails.name}" width="175px" height="175px" style="object-fit: cover">
      </a>
      <div class="nameBackground">
        <p class="inout">${myDetails.name}<br/>${myDetails.about}</p>
      </div>
    </div>
  </section>`;
}

function mountMenu(
  triggerButton,
  overlay,
  sheet,
  dragHandle,
  closeButton,
  backButton,
  resetScreens,
  goBack,
) {
  const state = {
    isOpen: false,
    startY: 0,
    currentOffset: 0,
    pointerId: null,
    suppressHandleClick: false,
    lastFocusedElement: null,
  };

  const closeThreshold = 120;

  const setDragOffset = (offset) => {
    state.currentOffset = Math.max(0, offset);
    sheet.style.setProperty("--sheet-drag-offset", `${state.currentOffset}px`);

    if (state.isOpen) {
      overlay.style.opacity = `${Math.max(0, 1 - state.currentOffset / 240)}`;
    }
  };

  const resetDragOffset = () => {
    state.pointerId = null;
    state.currentOffset = 0;
    sheet.style.setProperty("--sheet-drag-offset", "0px");

    if (state.isOpen) {
      overlay.style.opacity = "1";
    } else {
      overlay.style.opacity = "0";
    }
  };

  const openSheet = () => {
    if (state.isOpen) {
      return;
    }

    resetScreens?.();
    state.isOpen = true;
    state.lastFocusedElement = document.activeElement;
    overlay.hidden = false;
    triggerButton.setAttribute("aria-expanded", "true");
    document.body.classList.add("sheet-open");
    overlay.style.opacity = "0";
    requestAnimationFrame(() => {
      overlay.classList.add("sheet-overlay--open");
      overlay.style.opacity = "1";
      closeButton.focus();
    });
  };

  const closeSheet = () => {
    if (!state.isOpen) {
      return;
    }

    state.isOpen = false;
    overlay.classList.remove("sheet-overlay--open");
    triggerButton.setAttribute("aria-expanded", "false");
    document.body.classList.remove("sheet-open");
    resetDragOffset();

    window.setTimeout(() => {
      if (!state.isOpen) {
        overlay.hidden = true;
        state.lastFocusedElement?.focus?.();
      }
    }, 220);
  };

  const handlePointerDown = (event) => {
    state.suppressHandleClick = false;
    state.pointerId = event.pointerId;
    state.startY = event.clientY - state.currentOffset;
    dragHandle.setPointerCapture(event.pointerId);
    sheet.classList.add("sheet--dragging");
  };

  const handlePointerMove = (event) => {
    if (state.pointerId !== event.pointerId) {
      return;
    }

    setDragOffset(event.clientY - state.startY);

    if (state.currentOffset > 6) {
      state.suppressHandleClick = true;
    }
  };

  const handlePointerUp = (event) => {
    if (state.pointerId !== event.pointerId) {
      return;
    }

    dragHandle.releasePointerCapture(event.pointerId);
    sheet.classList.remove("sheet--dragging");

    if (state.currentOffset > closeThreshold) {
      closeSheet();
      return;
    }

    resetDragOffset();
  };

  triggerButton.addEventListener("click", openSheet);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeSheet();
    }
  });

  dragHandle.addEventListener("click", () => {
    if (!state.suppressHandleClick) {
      closeSheet();
    }
  });
  backButton?.addEventListener("click", goBack);
  closeButton.addEventListener("click", closeSheet);
  dragHandle.addEventListener("pointerdown", handlePointerDown);
  dragHandle.addEventListener("pointermove", handlePointerMove);
  dragHandle.addEventListener("pointerup", handlePointerUp);
  dragHandle.addEventListener("pointercancel", handlePointerUp);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSheet();
    }
  });

  return { closeSheet };
}

function mountThemeToggle(toggleButton) {
  let currentTheme = getStoredTheme();

  const syncTheme = () => {
    applyTheme(currentTheme);
    updateThemeToggle(toggleButton, currentTheme);
  };

  toggleButton.addEventListener("click", () => {
    currentTheme = currentTheme === THEME.DARK ? THEME.LIGHT : THEME.DARK;
    syncTheme();
  });

  syncTheme();
}

function renderHomePage() {
  const fragment = document.createDocumentFragment();

  const topControls = document.createElement("div");
  topControls.className = "top-controls";

  const sheetScreens = {
    main: {
      title: "Explore",
      render: ({ items, navigateToScreen, closeSheet }) => ({
        element: createMainMenuScreen(items, {
          navigateToScreen,
          closeSheet,
        }),
      }),
    },
    contact: {
      title: "Contact me",
      render: ({ closeSheet }) => createContactScreen({ closeSheet }),
    },
  };

  const themeToggle = createThemeToggle();
  const menuTrigger = createMenuButton();
  const {
    overlay,
    sheet,
    dragHandle,
    closeButton,
    backButton,
    resetScreens,
    bindControls,
    goBack,
  } = createBottomSheetMenu({
    items: navigationMenuItems,
    screens: sheetScreens,
    initialScreenId: "main",
  });

  const profileContainer = document.createElement("div");
  profileContainer.classList.add("profile");
  profileContainer.innerHTML = createProfile();

  const collections = document.createElement("div");
  collections.classList.add("collections");

  platforms.forEach((platform) => {
    const cardContainer = document.createElement("div");
    cardContainer.innerHTML = createCard(platform);
    collections.appendChild(cardContainer);
  });

  topControls.append(themeToggle, menuTrigger);

  fragment.append(topControls, overlay, profileContainer, collections);
  rootElement.appendChild(fragment);

  const { closeSheet } = mountMenu(
    menuTrigger,
    overlay,
    sheet,
    dragHandle,
    closeButton,
    backButton,
    resetScreens,
    goBack,
  );

  bindControls({ closeSheet });

  mountThemeToggle(themeToggle);
}

renderHomePage();

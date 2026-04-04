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
];

const myDetails = {
  name: "Saurav Sanjay",
  about: "Associate Software Engineer",
  college: "Sant Longowal Institute of Engineering and Technology",
};

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
  const iconClassName =
    theme === THEME.DARK ? "fas fa-moon" : "fas fa-sun";
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

function createNavigationItem(item, onSelect) {
  const element = document.createElement(item.type === "action" ? "button" : "a");
  element.className = "sheet-menu__item";

  if (item.type === "action") {
    element.type = "button";
    element.addEventListener("click", () => {
      item.onSelect?.();
      onSelect?.(item);
    });
  } else {
    element.href = item.url;

    if (item.target) {
      element.target = item.target;
    }

    if (item.rel) {
      element.rel = item.rel;
    }
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

function createBottomSheetMenu(items) {
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

  const title = document.createElement("h2");
  title.id = "sheet-title";
  title.className = "sheet__title";
  title.textContent = "Explore";

  const closeButton = document.createElement("button");
  closeButton.type = "button";
  closeButton.className = "sheet__close-button";
  closeButton.setAttribute("aria-label", "Close navigation menu");
  closeButton.appendChild(createIcon("fas fa-times"));

  header.append(title, closeButton);

  const nav = document.createElement("nav");
  nav.className = "sheet-menu";
  nav.setAttribute("aria-label", "Main navigation");

  items.forEach((item) => {
    nav.appendChild(createNavigationItem(item));
  });

  sheet.append(dragHandle, header, nav);
  overlay.appendChild(sheet);

  return { overlay, sheet, dragHandle, closeButton, nav };
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
  return `<table>
    <tr>
        <td><a href="./socials"><img src="/assets/images/defaultPhoto.jpg" alt="profilePicture" width="175px" height="175px" style="object-fit: cover"></a></td>
    </tr>
    <tr>
        <td><div class="nameBackground"><p class="inout">${myDetails.name}<br/>${myDetails.about}</p></div></td>
    </tr>
    </table>`;
}

function mountMenu(triggerButton, overlay, sheet, dragHandle, closeButton) {
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

  const themeToggle = createThemeToggle();
  const menuTrigger = createMenuButton();
  const { overlay, sheet, dragHandle, closeButton, nav } =
    createBottomSheetMenu(navigationMenuItems);

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
  );

  Array.from(nav.querySelectorAll(".sheet-menu__item")).forEach((itemElement) => {
    itemElement.addEventListener("click", () => {
      closeSheet();
    });
  });

  mountThemeToggle(themeToggle);
}

renderHomePage();

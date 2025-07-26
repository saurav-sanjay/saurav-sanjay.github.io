function includeHtml() {
  const isDebugEnabled = window._IS_DEBUG_ENABLED;
  if (isDebugEnabled) {
    console.log("[utils/include.html]: Loading...");
  }

  document.querySelectorAll("[include-html]").forEach(async (el) => {
    try {
      const filePath = el.getAttribute("include-html");
      if (isDebugEnabled) {
        console.log("[utils/include.html]: Location...", filePath);
      }

      const res = await fetch(filePath);
      if (res.ok) {
        el.innerHTML = await res.text();
      } else {
        el.innerHTML = "Unable to render UI, Please check later.";
      }
    } catch (error) {
      if (isDebugEnabled) {
        console.error("utils/[include.html]: ", error);
      }
    }
  });
}

export { includeHtml };

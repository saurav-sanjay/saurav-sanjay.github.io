function includeHtml() {
  console.log("Loading...");
  document.querySelectorAll("[include-html]").forEach(async (el) => {
    const file = el.getAttribute("include-html");
    const resp = await fetch(file);
    if (resp.ok) {
      el.innerHTML = await resp.text();
    } else {
      el.innerHTML = "Component not found.";
    }
  });
}

export { includeHtml };

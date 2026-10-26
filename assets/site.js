// Email is assembled here so the address never appears in the HTML (keeps scrapers off it).
document.querySelectorAll("a[data-mail-user]").forEach((a) => {
  const address = a.dataset.mailUser + "@" + a.dataset.mailDomain;
  a.href = "mailto:" + address;
  a.textContent = address;
});

export function smoothScrollToId(targetId: string) {
  if (typeof window === "undefined") return;
  const el = document.getElementById(targetId);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - 88;
  window.scrollTo({ top: y, behavior: "smooth" });
}



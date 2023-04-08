interface ScrollToArgs {
   to: "top" | "bottom";
}

export default function scrollTo({ to }: ScrollToArgs) {
   window.scrollTo({
      top: to === "top" ? 0 : document.body.scrollHeight,
      left: 0,
      behavior: "smooth",
   });
}

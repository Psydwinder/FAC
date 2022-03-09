function handleScroll({ currentTarget }) {
  // Progress bar width calculations
  const documentElement = currentTarget.documentElement;
  const documentHeight =
    documentElement.scrollHeight - documentElement.clientHeight;
  const scrollPercentage = (documentElement.scrollTop / documentHeight) * 100;

  // Progress bar styling
  const progressBar = document.querySelector(".header__progress-bar");
  progressBar.style = `width: ${scrollPercentage}%;`;
}

export { handleScroll };

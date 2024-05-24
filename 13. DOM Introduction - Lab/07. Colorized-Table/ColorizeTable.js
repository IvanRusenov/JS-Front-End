function colorize() {
    const elements = Array.from(document.querySelectorAll("tr:nth-child(even)"));
    elements.forEach((e) => e.style.background = "Teal");
}
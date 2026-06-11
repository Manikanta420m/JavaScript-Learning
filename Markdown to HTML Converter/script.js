const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let markdown = markdownInput.value;

  // Images
  markdown = markdown.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img alt="$1" src="$2">'
  );

  // Links
  markdown = markdown.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2">$1</a>'
  );

  // Bold (**text** or __text__)
  markdown = markdown.replace(
    /\*\*(.*?)\*\*|__(.*?)__/g,
    (_, p1, p2) => `<strong>${p1 || p2}</strong>`
  );

  // Italic (*text* or _text_)
  markdown = markdown.replace(
    /\*(.*?)\*|_(.*?)_/g,
    (_, p1, p2) => `<em>${p1 || p2}</em>`
  );

  // Headings
  markdown = markdown.replace(
    /^\s*### (.+)$/gm,
    "<h3>$1</h3>"
  );

  markdown = markdown.replace(
    /^\s*## (.+)$/gm,
    "<h2>$1</h2>"
  );

  markdown = markdown.replace(
    /^\s*# (.+)$/gm,
    "<h1>$1</h1>"
  );

  // Quotes
  markdown = markdown.replace(
    /^\s*> (.+)$/gm,
    "<blockquote>$1</blockquote>"
  );

  return markdown;
}

markdownInput.addEventListener("input", () => {
  const html = convertMarkdown();

  // Show raw HTML
  htmlOutput.textContent = html;

  // Render HTML preview
  preview.innerHTML = html;
});

// Initial content for testing
markdownInput.value = `# Heading 1

## Heading 2

### Heading 3

**Bold Text**

*Italic Text*

![Cat](https://placekitten.com/200/200)

[OpenAI](https://openai.com)

> This is a quote`;


markdownInput.dispatchEvent(new Event("input"));
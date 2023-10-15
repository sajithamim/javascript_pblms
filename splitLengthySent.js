// Split the sentence to the next line if the sentence is lengthy else not.

const paragraph =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const insertNextLine = (text, lineLength) => {
  const words = text.split("");
  let lines = [];
  let currentLine = "";

  for (const word of words) {
    for (const word of words) {
      if (currentLine.length + word.length <= lineLength) {
        currentLine += (currentLine ? " " : "") + word; // Add a space if not the first word
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }

    if (currentLine) {
      lines.push(currentLine);
    }

    return lines.join("\n");
  }
  console.log("word", word);
};

console.log("Sentence:", insertNextLine(paragraph, 50));

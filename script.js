console.log("JavaScript file linked successfully!");

function toggleFields() {
  const citationType = document.getElementById("citationType").value;

  // Hide all specific fields
  document.querySelectorAll(".citationFields").forEach((field) => {
    field.style.display = "none";
  });

  // Show fields based on selected type
  if (citationType === "book") {
    document.getElementById("bookFields").style.display = "block";
  } else if (citationType === "chapter") {
    document.getElementById("chapterFields").style.display = "block";
  } else if (citationType === "journal") {
    document.getElementById("journalFields").style.display = "block";
  } else if (citationType === "website") {
    document.getElementById("websiteFields").style.display = "block";
  } else if (citationType === "doi") {
    document.getElementById("doiFields").style.display = "block";
  }
}

function generateCitation() {
  const citationType = document.getElementById("citationType").value;
  const author = document.getElementById("author").value.trim();
  const year = document.getElementById("year").value.trim();
  const title = document.getElementById("title").value.trim();

  let citation = "";

  switch (citationType) {
    case "book":
      const location = document.getElementById("location").value.trim();
      const publisher = document.getElementById("publisher").value.trim();
      citation = `${author}. ${year}. <i>${title}</i>. ${location}: ${publisher}.`;
      break;

    case "chapter":
      const editor = document.getElementById("editor").value.trim();
      const chapterPages = document.getElementById("chapterPages").value.trim();
      const bookTitle = document.getElementById("bookTitle").value.trim();
      const chapterLocation = document.getElementById("chapterLocation").value.trim();
      const chapterPublisher = document.getElementById("chapterPublisher").value.trim();
      citation = `${author}. ${year}. ${title}. pp. ${chapterPages}. In. ${editor} (eds.). <i>${bookTitle}</i>. ${chapterLocation}: ${chapterPublisher}.`;
      break;

    case "journal":
      const journalName = document.getElementById("journalName").value.trim();
      const volume = document.getElementById("volume").value.trim();
      const issue = document.getElementById("issue").value.trim();
      const journalPages = document.getElementById("journalPages").value.trim();
      citation = `${author}. ${year}. ${title}. <i>${journalName}</i>. ${volume}(${issue}): ${journalPages}.`;
      break;

    case "website":
      const url = document.getElementById("url").value.trim();
      const retrievalDate = document.getElementById("retrievalDate").value.trim();
      citation = `${author}. ${year}. ${title}. ${url}. Retrieved: ${retrievalDate}.`;
      break;

    case "doi":
      const doi = document.getElementById("doi").value.trim();
      citation = `${author}. ${year}. ${title}. doi:${doi}.`;
      break;

    default:
      citation = "Please select a valid citation type.";
  }

  document.getElementById("citationOutput").innerHTML = `<strong>Citation:</strong><br>${citation}`;
}

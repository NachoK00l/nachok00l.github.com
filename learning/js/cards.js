const params = new URLSearchParams(document.location.search);
const cardId = params.get("card");
console.info("Card ID:", cardId);
const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');
const sentenceCount = document.getElementById('sentenceCount');
const charCounter = document.getElementById('charCounter');
const wordCounter = document.getElementById('wordCounter');
const sentenceCounter = document.getElementById('sentenceCounter');
const reasonText = document.querySelector('.reason-text');

function countWords(text) {
  const words = text.match(/[a-zA-Z]+/g);
  return words ? words.length : 0;
}

function updateCounters(text, selectedOption) {
  if (selectedOption === 'charCountButton') {
    const charLength = text.replace(/\s/g, '').length;
    charCount.textContent = charLength;
    toggleVisibility('charCountButton');
  } else if (selectedOption === 'wordCountButton') {
    const wordLength = countWords(text);
    wordCount.textContent = wordLength;
    toggleVisibility('wordCountButton');
  } else if (selectedOption === 'sentenceCountButton') {
    const sentenceLength = text.split(/[.!?]+/).filter(sentence => sentence.length > 0).length;
    sentenceCount.textContent = sentenceLength;
    toggleVisibility('sentenceCountButton');
  } else if (selectedOption === 'allCountButton') {
    const charLength = text.replace(/\s/g, '').length;
    const wordLength = countWords(text);
    const sentenceLength = text.split(/[.!?]+/).filter(sentence => sentence.length > 0).length;

    charCount.textContent = charLength;
    wordCount.textContent = wordLength;
    sentenceCount.textContent = sentenceLength;

    toggleVisibility('allCountButton');
  }
}

function toggleVisibility(type) {
  charCounter.style.display = type === 'charCountButton' || type === 'allCountButton' ? 'block' : 'none';
  wordCounter.style.display = type === 'wordCountButton' || type === 'allCountButton' ? 'block' : 'none';
  sentenceCounter.style.display = type === 'sentenceCountButton' || type === 'allCountButton' ? 'block' : 'none';
}

document.querySelectorAll('.dropdown-content a').forEach(option => {
  option.addEventListener('click', (event) => {
    const selectedOption = event.target.id;
    document.querySelector('.dropbtn').textContent = event.target.textContent;
    updateCounters(textInput.value, selectedOption);
    document.querySelectorAll('.dropdown-content a').forEach(elem => {
      elem.classList.remove('active');
    });
    event.target.classList.add('active');
  });
});

textInput.addEventListener('input', () => {
  const selectedOption = document.querySelector('.dropdown-content a.active').id;
  updateCounters(textInput.value, selectedOption);
});

setTimeout(() => {
  reasonText.classList.add('show');
}, 1000);

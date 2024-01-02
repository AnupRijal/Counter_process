const textInput = document.getElementById('textInput');
const charCount = document.getElementById('charCount');
const wordCount = document.getElementById('wordCount');
const sentenceCount = document.getElementById('sentenceCount');
const countButton = document.getElementById('countButton');
const charCounter = document.getElementById('charCounter');
const wordCounter = document.getElementById('wordCounter');
const sentenceCounter = document.getElementById('sentenceCounter');

function countWords(text) {
  const words = text.match(/[a-zA-Z]+/g);
  return words ? words.length : 0;
}

countButton.addEventListener('click', function() {
  const text = textInput.value;

  // Character count
  const charLength = text.replace(/\s/g, '').length;
  charCount.textContent = charLength;
  charCounter.style.display = 'block';

  // Word count
  const wordLength = countWords(text);
  wordCount.textContent = wordLength;
  wordCounter.style.display = 'block';

  // Sentence count
  const sentenceLength = text.split(/[.!?]+/).filter(sentence => sentence.length > 0).length;
  sentenceCount.textContent = sentenceLength;
  sentenceCounter.style.display = 'block';
});

function toggleVisibility(type) {
  charCounter.style.display = type === 'char' || type === 'all' ? 'block' : 'none';
  wordCounter.style.display = type === 'word' || type === 'all' ? 'block' : 'none';
  sentenceCounter.style.display = type === 'sentence' || type === 'all' ? 'block' : 'none';
}

const charCountButton = document.getElementById('charCountButton');
const wordCountButton = document.getElementById('wordCountButton');
const sentenceCountButton = document.getElementById('sentenceCountButton');
const allCountButton = document.getElementById('allCountButton');

charCountButton.addEventListener('click', () => toggleVisibility('char'));
wordCountButton.addEventListener('click', () => toggleVisibility('word'));
sentenceCountButton.addEventListener('click', () => toggleVisibility('sentence'));
allCountButton.addEventListener('click', () => toggleVisibility('all'));

const reasonText = document.querySelector('.reason-text');
setTimeout(() => {
  reasonText.classList.add('show');
}, 1000);
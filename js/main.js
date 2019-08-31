document.addEventListener('DOMContentLoaded', () => {
  const fill = document.querySelector('.fill');
  const empties = document.querySelectorAll('.empty');

  // Drag Functions
  function dragStart() {
    this.classList.add('hold');
    setTimeout(() => (this.className = 'invisible'), 0);
  }

  function dragEnd() {
    this.className = 'fill';
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
  }

  function dragLeave() {
    this.classList.remove('hovered');
  }

  function dragDrop() {
    this.className = 'empty';
    this.append(fill);
  }

  // Fill listeners
  fill.addEventListener('dragstart', dragStart);
  fill.addEventListener('dragend', dragEnd);

  // Loop through empties and call drag events
  for (const empty of empties) {
    empty.addEventListener('dragover', dragOver);
    empty.addEventListener('dragenter', dragEnter);
    empty.addEventListener('dragleave', dragLeave);
    empty.addEventListener('drop', dragDrop);
  }
});

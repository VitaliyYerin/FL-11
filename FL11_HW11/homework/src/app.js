class TodoList {
  constructor() {
    this.maxListLength = 10;
    this.draggable = null;

    this.init();
  }

  init() {
    this.initVariables();
    this.bindActionHandlers();
  }

  initVariables() {
    this.rootNode = document.getElementById('root');
    this.addNewInput = this.rootNode.querySelector('.add-new');
    this.warningMsg = this.rootNode.querySelector('.warning-message');
    this.addBtn = this.rootNode.querySelector('.add-action');
    this.todoList = this.rootNode.querySelector('.todo-list');
  }

  bindActionHandlers() {
    this.addNewInput.addEventListener('input', this.onTextChange.bind(this));
    this.addBtn.addEventListener('click', this.onAddClick.bind(this));
    this.todoList.addEventListener('change', this.onChange.bind(this));
  }

  onChange({ target }) {
    if (target.checked) {
        target.setAttribute('disabled', true);
    }
  }

  onTextChange(event) {
    const target = event.target;
    const value = target.value;

    if (value.trim()) {
      this.addBtn.removeAttribute('disabled');
    } else {
      this.addBtn.setAttribute('disabled', true);
    }
  }
  onAddClick() {
    const value = this.addNewInput.value;
    this.createNewItem(value);
    this.clearInput();
  }

  onEdit({ target }) {
    const li = target.closest('.todo-item');
    const value = li.querySelector('.todo-item-text').innerText;
    const input = document.createElement('input');
    const saveButton = document.createElement('button');

    li.classList.add('editing');
    saveButton.innerHTML = '<i class="material-icons">save</i>';
    input.className = 'edit';
    saveButton.className = 'save-btn';

    saveButton.addEventListener('click', this.onUpdateItem.bind(this));

    input.value = value;
    li.appendChild(input);
    li.appendChild(saveButton);
    input.focus();
  }

  onUpdateItem({ target }) {
    const li = target.closest('.todo-item');
    const input = li.querySelector('input.edit');
    const saveButton = li.querySelector('button.save-btn');

    li.querySelector('.todo-item-text').innerText = input.value;
    li.removeChild(input);
    li.removeChild(saveButton);

    li.classList.remove('editing');
  }

  onRemove({ target }) {
    const li = target.closest('.todo-item');
    this.todoList.removeChild(li);
    this.updateNewInputState();
  }

  createNewItem(value) {
    const li = document.createElement('li');
    const editBtn = document.createElement('button');
    const removeBtn = document.createElement('button');
    const todoItem = `
        <label>
          <input type="checkbox" class="checkbox-item" />
            <span class="unchecked">
                <i class="material-icons">
                    check_box_outline_blank
                    </i>
            </span>
            <span class="checked">
                <i class="material-icons">
                    check_box
                </i>
            </span>
         <span class="todo-item-text">${value}</span>
        </label>`;
    editBtn.classList.add('edit-btn');
    removeBtn.classList.add('remove-btn');
    editBtn.innerHTML = '<i class="material-icons">edit</i>';
    removeBtn.innerHTML = '<i class="material-icons">delete</i>';

    li.classList.add('todo-item');
    li.setAttribute('draggable', true);
    li.innerHTML = todoItem;
    li.appendChild(editBtn);
    li.appendChild(removeBtn);
    this.todoList.appendChild(li);
    this.updateNewInputState();

    editBtn.addEventListener('click', this.onEdit.bind(this));
    removeBtn.addEventListener('click', this.onRemove.bind(this));
    li.addEventListener('dragstart', this.onDaragStart.bind(this));
    li.addEventListener('drop', this.onDragDrop.bind(this));
    li.addEventListener('dragover', this.onDragOver.bind(this));
  }

  onDragDrop(event) {
    event.preventDefault();
    event.stopPropagation();

    this.todoList.insertBefore(this.draggable, event.currentTarget);
    this.draggable = null;
  }

  onDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }

  clearInput() {
    this.addNewInput.value = null;
    this.addBtn.setAttribute('disabled', true);
  }

  updateNewInputState() {
      const isDisabled = this.todoList.children.length >= this.maxListLength;

      if (isDisabled) {
        this.addBtn.setAttribute('disabled', true);
        this.addNewInput.setAttribute('disabled', true);
        this.warningMsg.classList.remove('hidden');
      } else {
        this.addNewInput.removeAttribute('disabled');
        this.warningMsg.classList.add('hidden');
      }
  }

  onDaragStart(event) {
      this.draggable = event.target;
  }
}

const todoList = new TodoList();

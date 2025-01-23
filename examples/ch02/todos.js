import { createApp, h, hFragment } from 'https://unpkg.com/shrestr3-fe-fwk'

const state = {
    currentTodo: '',
    edit: {
        idx: null,
        original: null, 
        edited: null,
    },
    todos: ['Walk the dog', 'Water the plants'],
}

const reducers = {
    'update-current-todo': (state, currentTodo) => ({
        ...state,
        currentTodo,
    }),

    'add-todo': (state) => ({
        ...state,
        currentTodo: '',
        todos: [...state.todos, state.currentTodo]
    }),

    'start-editing-todo': (state, idx) => ({
        ...state,
        edit: {
            idx,
            original: state.todos[idx],
            edited: state.todos[idx]
        }
    }),

    'edit-todo': (state, edited) => ({
        ...state,
        edit: { ...state, edited}
    }),
      
    'save-edited-todo': (state) => {
        const todos = [...state.todos]
        todos[state.edit.idx] = state.edit.edited

        return {
            ...state,
            edit: {idx: null, original: null, edited: null},
            todos
        }
    },

    'cancel-editing-todo': (state) => ({ 
        ...state,
        edit: { idx: null, original: null, edited: null },     #13
      }),
    
      'remove-todo': (state, idx) => ({           
        ...state,
        todos: state.todos.filter((_, i) => i !== idx),        #15
      }),
}
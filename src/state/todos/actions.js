export const types = {
  CREATE: 'todos/CREATE',
  DESTROY: 'todos/DESTROY',
  TOGGLE: 'todos/TOGGLE',
}

let id = 0

const actions = {

  create: (text) => ({
    type: types.CREATE,
    data: {
      id: id++,
      text,
      timestamp: Date.now(),
    },
  }),

  destroy: (id) => ({
    type: types.DESTROY,
    data: {id},
  }),

  toggle: (id) => ({
    type: types.TOGGLE,
    data: {id},
  }),

}

export default actions

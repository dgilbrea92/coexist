// user creating a new board
// requires the name being assigned to the board, and its generated join code (UUID?)
// query returns the information that was added to the DB + the id of the board
const signUp =
  'INSERT INTO boards (username, password, name) VALUES($1, $2, $3) RETURNING id, username, password, name';

// retrieve the information for the board of the specified join code
const logIn =
  'SELECT name, id FROM boards WHERE username = $1 AND password = $2';

// retrieve a users sticky notes and contents within sticky notes for the dashboard display
const getStickies =
  'SELECT s.*, si.item_id, si.content, si.complete FROM stickies s LEFT JOIN sticky_item si ON s.sticky_id = si.sticky_id';

// add a new sticky note to the user dashboard. returns the id of the sticky that has been added
const addSticky =
  'INSERT INTO stickies (content, additional_content, board_id) VALUES ($1, $2, $3) RETURNING sticky_id';

// user can update the name of an existing sticky note
const editSticky =
  'UPDATE stickies SET name = $1 WHERE sticky_id = $2 RETURNING name';

// user can delete a sticky from their dashboard
const deleteSticky = 'DELETE FROM stickies WHERE sticky_id = $1';

export default queries = {
  signUp,
  logIn,
  getStickies,
  addSticky,
  editSticky,
  deleteSticky,
};

// sample of data being returned to
const state = {
  stickies: [
    {
      stickyId: 1,
      name: 'ToDoList',
      items: [
        {
          itemId: 1,
          content: 'tessssst',
          additional: '',
          complete: false,
        },
        { itemId: 2, content: 'tessssst2', complete: false },
      ],
    },
    {
      stickyId: 2,
      name: 'GroceryList',
      items: [
        {
          itemId: 1,
          content: 'tessssst',
          additional: '',
          complete: false,
        },
        { itemId: 2, content: 'tessssst2', complete: false },
      ],
    },
  ],
};

export default function fetchStickies(url) {
  let output;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const newStickies = [];
      // iterate over array of data returned from db
      for (let i = 0; i < data.length; i++) {
        // check if output array already contains the current stickyId object
        const index = newStickies.findIndex(
          sticky => sticky.stickyId === data[i].sticky_id
        );

        // an index of -1 means no match was found
        if (index === -1) {
          // if no match: create a new object with itemid, name, items array filled with nested data
          const pushObject = {
            stickyId: data[i].sticky_id,
            name: data[i].name,
            items: [
              {
                // data to appear upon expansion of row
                itemId: data[i].item_id,
                content: data[i].content,
                additional: data[i].additional,
                completed: data[i].complete,
              },
            ],
          };
          // push reformatted sticky data into array
          newStickies.push(pushObject);
        } else {
          // if the sticky already exists, then just add a new object to its items array
          const pushObject = {
            itemId: data[i].item_id,
            content: data[i].content,
            additional: data[i].additional,
            completed: data[i].complete,
          };

          newStickies[index].items.push(pushObject);
        }
      }
      console.log(newStickies);
      output = newStickies;
    });
  return output;
}

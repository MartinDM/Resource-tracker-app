# Resource Tracker task

_Please return your solution as a zip file by email - do not publish it online. You don't need to include the node_modules folder._

---

A company desires a simple web interface for tracking a variety of assets, and would like you to
build a simple prototype system.

Assets have the following attributes:
* A required _Resource ID_, which is a number of up to 8 digits in length, and is unique to each asset;
* A required _Type_, which can be a **Laptop**, a **Tablet**, or a **Phone**;
* An optional _Description_, which can be any string up to 200 characters in length.

The company would like the assets to be displayed in the order they were entered into the system,
with the most recent at the top of the list.

They would also like to be able to remove assets from the list.

A very basic template has been provided to get you started. You can start the template by running
`npm install` followed by `npm start`.

## Extensions

The company love your prototype, and would like to make a couple of extra requests if you have time:

* They would like the current asset list to remain between page reloads, but don't want to have any
  kind of backend for this system just yet.
* They would also like to be able to undo the last delete action by pressing `Ctrl+Z`, in
  case it was an accident.
# asset-list

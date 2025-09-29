# Resource Tracker exercise

__[View online](https://martin-asset-list.surge.sh/)__ 🚀

<img width="661" alt="image" src="https://github.com/MartinDM/asset-list/assets/7467069/af80d44b-4acd-49d1-a29d-c864a381bc82">

### A fun CRUD-style coding exercise to some made-up business rules:

## Rules ✏️

A company wants a web interface for tracking a variety of assets, and would like you to build a simple system.

Assets have the following attributes:
* A required _Resource ID_, which is a number of up to 8 digits in length, and is unique to each asset;
* A required _Type_, which can be a **Laptop**, a **Tablet**, or a **Phone**;
* An optional _Description_, which can be any string up to 200 characters in length.

The company would like the assets to be displayed in the order they were entered into the system,
with the most recent at the top of the list.

They want to be able to remove assets from the list.

## Extensions ✅

* Make the current asset list to persist between page reloads, but without a back-end system. Make it so!
* Undo function for the last delete action by pressing `Ctrl+Z`, in case it was an accident!

## Run locally

```
npm i
npm start
```

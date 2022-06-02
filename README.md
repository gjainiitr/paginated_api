
# Paginated API using ExpressJs

## Tech Stack
- Node.js
- Express.js
- MongoDB

## Input
- Limit: - Maximum number of data entries in a given page.
- Page number: - The page to be displayed based on the division of total data into pages of size "Limit".

## Output
- The data entries that will come under the given page (If any).
- Previous Page Number
- Next Page Number (If any)

## Example
Demo request = "http://localhost:3000/api/gethotels?page=10&limit=100"

Suppose we send a request with following inputs: -
- Page = 10
- Limit = 100

The output based on "Hotels Data.json" will be: -

![Api Preview](https://user-images.githubusercontent.com/106254063/171607020-0ce31d5d-c9cd-47df-b7f6-f1d171a8850d.png)

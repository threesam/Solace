# **Discussion**

First of all, this was a genuinely fun challenge to work through and says a lot about your engineering culture — kudos!

## **What I Would Have Wanted to Work on With More Time:**

- **Pagination for Large Datasets**: Fetching all advocates upfront is fine for this exercise, but it's not scalable for large datasets (e.g., 10k+ records). Implementing pagination would be a good next step. This would also require new UI elements to be implemented.
- **Dynamic API Calls**: Instead of fetching all data upfront, dynamic calls to the API for advocate results would ensure that fresh data is always used. This would require secured endpoints with basic auth, rate limiting, and debouncing on the search input to improve performance.
- **Enhanced Filter UI**: A more granular breakdown of filterable fields would improve user experience. For example, providing a `select` dropdown for filtering by specialties would make the filtering process more intuitive.
- **Specialties Design Considerations**: From a design perspective, I would have liked to spend more time refining the "specialties" field, as it introduces complexity in the table layout and could use a more elegant solution.
- **Additional Enhancements**: There's always more to improve — further performance optimizations, more advanced error handling, etc.

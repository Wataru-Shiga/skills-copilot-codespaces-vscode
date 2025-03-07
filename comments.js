// Create web server using Express
// Create a route for comments
// Return a JSON response with the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

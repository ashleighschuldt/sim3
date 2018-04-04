SELECT title, username, profile_pic
FROM users JOIN POSTS
ON users.id = posts.author_id

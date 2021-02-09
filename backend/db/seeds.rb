# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
    {
    username: "tgarayua",
    email: "tgarayua@coolstuff.com" ,
    password: "Tommy123",
    first_name: "Thomas",
    last_name: "Garayua"
},
{
    username: "Jdoe",
    email: "jdoe@coolstuff.com", 
    password: "jdoe123",
    first_name: "John",
    last_name: "Doe"
},
{
    username: "Zoh",
    email: "Zohw@coolstuff.com", 
    password: "Zoh123",
    first_name: "Zohren",
    last_name: "Wiess"
}
])

blogs = Blog.create([
    {
        user_id: 1,
        title: "Bright Bazaar",
        content: "Bright Bazaar was created by Will Taylor, a journalist-turned-interior designer in 2009. Apart from wonderful home tours and design findings, Will shares other exciting details about his lifestyle, including his outfits, recipes, and life in New York City."
    },
    {
        user_id: 2,
        title: "A Cup of Jo",
        content: "A weekend hobby for Joanna Goddard turned into a full-time job. She started A Cup of Jo in 2007 and became a superstar lifestyle blogger. In fact, the site is barely a personal blog anymore, as Jo now has a team of professional writers who share her interests, such as style, design, food, and motherhood."
    },
    {
        user_id: 3,
        title: "Nerd Fitness",
        content: "This site targets “nerds, misfits and mutants,” and helps them to get in shape through home workouts and private coaching. Nerd Fitness has 25 team members led by Jim Bathurst, an award-winning personal trainer. The site also comes with an educational blog where you can learn more about working out."
    },
])

comments = Comment.create([
    {
        user_id: 1,
        blog_id: 3,
        content: "Great blog, I love fitness!"
    },
    {
        user_id: 1,
        blog_id: 2,
        content: "I love me a cup of coffee! Cheers!"
    },
    {
        user_id: 2,
        blog_id: 1,
        content: "My name is Joe and I love NYC!"
    },
    {
        user_id: 3,
        blog_id: 3,
        content: "My name is Zoh and this is my first blog!"
    },
])

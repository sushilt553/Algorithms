# == Schema Information
#
# Table name: actors
#
#  id          :integer      not null, primary key
#  name        :string
#
# Table name: movies
#
#  id          :integer      not null, primary key
#  title       :string
#  yr          :integer
#  score       :float
#  votes       :integer
#  director_id :integer
#
# Table name: castings
#
#  movie_id    :integer      not null, primary key
#  actor_id    :integer      not null, primary key
#  ord         :integer

require_relative './sqlzoo.rb'

def example_join
  execute(<<-SQL)
    SELECT
      *
    FROM
      movies
    JOIN
      castings ON movies.id = castings.movie_id
    JOIN
      actors ON castings.actor_id = actors.id
    WHERE
      actors.name = 'Sean Connery'
  SQL
end

def ford_films
  # List the films in which 'Harrison Ford' has appeared.
  execute(<<-SQL)
  select movies.title
  from movies
  join castings on castings.movie_id = movies.id
  join actors on actors.id = castings.actor_id
  where actors.name = 'Harrison Ford'
  SQL
end

def ford_supporting_films
  # List the films where 'Harrison Ford' has appeared - but not in the star
  # role. [Note: the ord field of casting gives the position of the actor. If
  # ord=1 then this actor is in the starring role]
  execute(<<-SQL)
  select movies.title
  from movies
  join castings on castings.movie_id = movies.id
  join actors on actors.id = castings.actor_id
  where actors.name = 'Harrison Ford' and ord != 1
  SQL
end

def films_and_stars_from_sixty_two
  # List the title and leading star of every 1962 film.
  execute(<<-SQL)
  select movies.title, actors.name
  from movies
  join castings on castings.movie_id = movies.id
  join actors on castings.actor_id = actors.id
  where movies.yr = 1962 and castings.ord = 1;
  SQL
end

def travoltas_busiest_years
  # Which were the busiest years for 'John Travolta'? Show the year and the
  # number of movies he made for any year in which he made at least 2 movies.
  execute(<<-SQL)
  select movies.yr, count(*) as number_of_movies
  from movies
  join castings on castings.movie_id = movies.id
  join actors on actors.id = castings.actor_id
  where actors.name = 'John Travolta'
  group by yr
  having count(*) >= 2
  SQL
end

def andrews_films_and_leads
  # List the film title and the leading actor for all of the films 'Julie
  # Andrews' played in.
  execute(<<-SQL)
  select distinct movies.title, a2.name
  from actors as a1
  join castings c1 on c1.actor_id = a1.id
  join movies on c1.movie_id = movies.id
  join castings c2 on c2.movie_id = movies.id
  join actors a2 on c2.actor_id = a2.id
  where a1.name = 'Julie Andrews' and c2.ord = 1
  SQL
end

def prolific_actors
  # Obtain a list in alphabetical order of actors who've had at least 15
  # starring roles.
  execute(<<-SQL)
  select actors.name
  from actors
  join castings on castings.actor_id = actors.id
  join movies on movies.id = castings.movie_id
  where castings.ord = 1
  group by actors.name
  having count(*) >= 15
  order by actors.name
  SQL
end

def films_by_cast_size
  # List the films released in the year 1978 ordered by the number of actors
  # in the cast (descending), then by title (ascending).
  execute(<<-SQL)
  select movies.title, count(*) as number_of_actors
  from movies
  join castings on castings.movie_id = movies.id
  where movies.yr = 1978
  group by movies.title
  order by number_of_actors DESC, movies.title ASC
  SQL
end

def colleagues_of_garfunkel
  # List all the people who have played alongside 'Art Garfunkel'.
  execute(<<-SQL)
  SQL
end

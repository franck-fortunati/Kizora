use kizora;

CREATE TABLE users (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    pseudo VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255),
    role ENUM('user', 'editor', 'admin') NOT NULL DEFAULT 'user',
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE articles (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id INT NOT NULL,
    CONSTRAINT fk_articles_user
    FOREIGN KEY (user_id)
    REFERENCES users(id)
);

CREATE TABLE animes (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    kitsu_id INT NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    japanese_title VARCHAR(255),
    synopsis TEXT,
    start_date DATE,
    end_date DATE,
    status VARCHAR(255) NOT NULL,
    cover VARCHAR(500),
    episode_count INT
);

CREATE TABLE episodes (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    episode_number INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    synopsis TEXT,
    airdate DATE,
    anime_id INT NOT NULL,
    UNIQUE (anime_id, episode_number),
    CONSTRAINT fk_episodes_anime
    FOREIGN KEY (anime_id)
    REFERENCES animes(id)
);

CREATE TABLE genres (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
	name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE characters (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    japanese_name VARCHAR(255),
    description TEXT,
    image VARCHAR(255)
);

CREATE TABLE voice_actors (
	id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    image VARCHAR(255)
);

CREATE TABLE favorites (
	user_id INT NOT NULL,
    anime_id INT NOT NULL,
	PRIMARY KEY (user_id, anime_id),
    CONSTRAINT fk_favorites
    FOREIGN KEY (user_id)
    REFERENCES users(id),
	FOREIGN KEY (anime_id)
    REFERENCES animes(id)
);

CREATE TABLE animes_genres (
	anime_id INT NOT NULL,
    genre_id INT NOT NULL,
    PRIMARY KEY (anime_id, genre_id),
    CONSTRAINT fk_animes_genres
    FOREIGN KEY (anime_id)
    REFERENCES animes(id),
    FOREIGN KEY (genre_id)
    REFERENCES genres(id)
);

CREATE TABLE animes_characters (
	anime_id INT NOT NULL,
    character_id INT NOT NULL,
    PRIMARY KEY (anime_id, character_id),
    CONSTRAINT fk_animes_characters
    FOREIGN KEY (anime_id)
    REFERENCES animes(id),
    FOREIGN KEY (character_id)
    REFERENCES characters(id)
);

CREATE TABLE characters_voices_actors (
	character_id INT NOT NULL,
    voice_actor_id INT NOT NULL,
    PRIMARY KEY (character_id, voice_actor_id),
    CONSTRAINT fk_characters_voices_actors
    FOREIGN KEY (character_id)
    REFERENCES characters(id),
    FOREIGN KEY (voice_actor_id)
    REFERENCES voice_actors(id)
);

CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` varchar(128) COLLATE utf8mb4_bin NOT NULL,
  `expires` int(11) unsigned NOT NULL,
  `data` mediumtext COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB
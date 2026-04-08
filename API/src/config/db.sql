-- DROP DATABASE appJogos;
CREATE DATABASE appJogos;
USE appJogos;

DROP TABLE IF EXISTS loja;
CREATE TABLE IF NOT EXISTS loja(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    nome VARCHAR(20) NOT NULL,
    logo VARCHAR(255) NOT NULL,
    site_url VARCHAR(255) NOT NULL,
    cor1 VARCHAR(10),
    cor2 VARCHAR(10)
);

INSERT INTO loja(nome, logo, site_url, cor1, cor2)
VALUES
("Steam", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/960px-Steam_icon_logo.svg.png", "https://store.steampowered.com", "#2a475e", "#ffffff"),
("Playstation", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/3840px-PlayStation_logo.svg.png", "https://store.playstation.com/pt-br/pages/deals", "#00439c", "#ffffff"),
("Xbox", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Xbox_one_logo.svg/1280px-Xbox_one_logo.svg.png", "https://www.xbox.com/games", "#ffffff", "#107c10"),
("Nintendo", "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Nintendo.svg/3840px-Nintendo.svg.png", "https://www.nintendo.com/store/games", "#dd2020", "#ffffff");

DROP TABLE IF EXISTS jogo;
CREATE TABLE IF NOT EXISTS jogo(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT NOT NULL,
    titulo VARCHAR(50) NOT NULL,
    descricao VARCHAR(255) NULL,
    capa_url VARCHAR(255) NOT NULL,
    desenvolvedor VARCHAR(50) NOT NULL,
    genero VARCHAR(50) NOT NULL,
    data_lanc DATE NOT NULL,
    class_indicativa ENUM("LIVRE", "10", "12", "14", "16", "18") NOT NULL,
    downloads INT UNSIGNED DEFAULT 0
);

DROP TABLE IF EXISTS jogo_loja;
CREATE TABLE IF NOT EXISTS jogo_loja(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    preco DECIMAL(6, 2) DEFAULT 0.00,
    preco_promocional DECIMAL(6, 2) NULL,
    data_promocao_inicio DATETIME NULL,
    data_promocao_fim DATETIME NULL,
    avaliacao DECIMAL(3,1),
    jogo INT UNSIGNED NOT NULL,
    loja INT UNSIGNED NOT NULL,
    FOREIGN KEY (jogo) REFERENCES jogo(id),
    FOREIGN KEY (loja) REFERENCES loja(id)
);

DELIMITER //
CREATE PROCEDURE p_createGame(
    IN v_titulo VARCHAR(50),
    IN v_descricao VARCHAR(255),
    IN v_capa_url VARCHAR(255),
    IN v_desenvolvedor VARCHAR(50),
    IN v_genero VARCHAR(50),
    IN v_data_lanc DATE,
    IN v_class_indicativa VARCHAR(10),
    IN v_downloads INT,

    IN v_preco DECIMAL(6, 2),
    IN v_avaliacao DECIMAL(3,1),
    IN v_loja INT UNSIGNED
)
BEGIN
    DECLARE jogo_id INT;

    INSERT INTO jogo(titulo, descricao, capa_url, desenvolvedor, genero, data_lanc, class_indicativa, downloads)
    VALUES(v_titulo, v_descricao, v_capa_url, v_desenvolvedor, v_genero, v_data_lanc, v_class_indicativa, v_downloads);

    SET jogo_id = LAST_INSERT_ID();

    INSERT INTO jogo_loja(preco, avaliacao, jogo, loja) 
    VALUES(v_preco, v_avaliacao, jogo_id, v_loja);

END //
DELIMITER ;
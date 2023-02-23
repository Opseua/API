DROP DATABASE IF EXISTS banco_de_dados_api;
CREATE DATABASE banco_de_dados_api CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE banco_de_dados_api;

CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(127),
    avatar VARCHAR(255),
    birth DATE,
    status ENUM('on', 'off', 'del') DEFAULT 'on'
);

CREATE TABLE things (
    id INT PRIMARY KEY AUTO_INCREMENT,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    user INT,
    name VARCHAR(255),
    photo VARCHAR(255),
    description TEXT,
    location VARCHAR(127),
    options TEXT,
    status ENUM('on', 'off', 'del') DEFAULT 'on',
    FOREIGN KEY (user) REFERENCES users (id)
);

INSERT INTO users VALUES 
( '1', '2022-08-14 12:13:45', 'Joca da Silva', 'jocasilva@gmail.com', SHA1('Senha_123'), 'https://randomuser.me/api/portraits/men/12.jpg', '2000-12-04', 'on' ),
( '2', '2022-11-21 19:18:37', 'Marineuza Siriliano', 'marineuza@gamil.com', SHA1('Senha_123'), 'https://randomuser.me/api/portraits/women/12.jpg', '2005-01-14', 'on' ),
( '3', '2023-01-04 16:45:38', 'Setembrino trocatapas', 'setbrino@gmail.com', SHA1('Senha_123'), 'https://randomuser.me/api/portraits/men/17.jpg', '1988-07-24', 'on' );

INSERT INTO things VALUES
(
    '1',
    '2020-05-18 14:34:44',
    '1',
    'Bicicleta',
    'https://picsum.photos/200',
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed imperdiet tellus. Suspendisse congue euismod tincidunt.',
    'Garagem',
    '{"estado": "péssimo", "cor": "vermelha", "marca": "Monark"}',
    'on'
), (
    '2',
    '2020-05-20 11:22:33',
    '1',
    'Barbeador',
    'https://picsum.photos/201',
    'Curabitur et turpis sodales libero consectetur congue vel nec felis. Suspendisse a metus ac turpis gravida efficitur eget varius tortor.',
    'Gaveta',
    '{"estado": "barulhento", "cor": "preto/prata", "marca": "Chinguelingue"}',
    'on'
), (
    '3',
    '2020-07-14 21:22:23',
    '1',
    'Perna do Falcon',
    'https://picsum.photos/202',
    'Sed volutpat tristique euismod. Duis et urna porta, varius dolor eget, dignissim ex. Morbi nec tortor aliquet, feugiat neque eu, sagittis est.',
    'Sob a cama',
    '{"estado": "arranhado", "cor": "bege", "marca": "ToyKoyCool"}',
    'on'
), (
    '4',
    '2020-10-22 23:22:21',
    '1',
    'Bigode de gato',
    'https://picsum.photos/203',
    'Nulla ultrices aliquet arcu, nec vehicula libero ornare ac. Aenean finibus lectus in dolor mollis, eget lacinia sapien pharetra.',
    'Cama do gato',
    '{"estado": "ausente", "cor": "branco", "marca": "SRD"}',
    'on'
);
BEGIN;

INSERT INTO users 
    (username, email, password, date_created, id)
VALUES
('mack', 'hmaiermack@gmail.com', 'candid55', now(), 1),
('mateck', 'hmaiermack@gmail.com', 'candid55', now(), 2),
('macksen', 'hmaiermack@gmail.com', 'candid55', now(), 3);

INSERT INTO programs
    (program_name, user_id, id)
VALUES 
('Leg Push Pull', 1, 1),
('Upper/Lower', 1, 2),
('5 Day Split', 2, 3);


INSERT INTO workouts
    (workout_name, prog_id, id)
VALUES
('Legs', 1, 1),
('Arms', 1, 2),
('Legs', 2, 3),
('Chest', 2, 4),
('Arms', 2, 5);

INSERT INTO exercises
    (workout_id, ex_name, sets, reps)
VALUES
(1, 'Squats', 5, 5),
(1, 'Deadlifts', 5, 5),
(1, 'Lunges', 5, 5),
(2, 'Curls', 5, 5),
(2, 'Tricep Pushdowns', 5, 5),
(2, 'Forearm Curls', 5, 5),
(3, 'Squats', 5, 5);

INSERT INTO history
    (user_id, workout, date)
VALUES
(1, 'yaydaa', now()),
(1, 'yaydaa', now()),
(1, 'yaydaa', now()),
(2, 'yaydaa', now());



COMMIT;
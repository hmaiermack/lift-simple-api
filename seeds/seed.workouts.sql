BEGIN;

INSERT INTO workouts
    (workout_name, user_id)
VALUES
('Legs', 1),
('Arms', 1),
('Feet', 2),
('Arms', 2);

COMMIT;
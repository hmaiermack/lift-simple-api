ALTER TABLE workouts
ADD COLUMN prog_id INTEGER REFERENCES programs(id),
DROP COLUMN user_id;

DROP TABLE IF EXISTS prog_workout_rel;
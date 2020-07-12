ALTER TABLE workouts
DROP COLUMN prog_id,
ADD COLUMN user_id INTEGER REFERENCES users(id);

CREATE TABLE prog_workout_rel (
    prog_id INTEGER REFERENCES programs(id),
    workout_id INTEGER REFERENCES workouts(id),
    PRIMARY KEY (prog_id, workout_id)
)
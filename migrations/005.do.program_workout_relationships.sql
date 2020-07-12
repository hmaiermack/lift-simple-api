CREATE TABLE prog_workout_rel (
    prog_id INTEGER REFERENCES programs(id),
    workout_id INTEGER REFERENCES workouts(id),
    PRIMARY KEY (prog_id, workout_id)
)
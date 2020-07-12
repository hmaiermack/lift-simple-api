const ProgramsService = {
    getData(knex, authId){
        return knex().select('*').from('user-data').where('auth_id', authId).first()
    },

    createUser(knex, authId){
        return knex('user-data').insert({auth_id: authId, 
            data: {"programs": [], "workouts": [], "history": []}
        })
        .returning('*')
        .then(rows => {
            return rows[0]})
    },

    updateData(knex, authId, body){
        return knex('user-data').where('auth_id', authId).update(
            {data: body}
        )
    }
}

module.exports = ProgramsService

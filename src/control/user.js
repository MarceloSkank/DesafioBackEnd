const Model = require('../model/user')

class ControllerUser{
    async store(element,res = null){
        await Model.create({
            title: element.title,
            link: element.link,
            description: element.description,
            tags: element.tags
        }, (err,_docs) => {
            if(err)
                throw err

            res.status(201).json(_docs)
        })
    }

    async delete(query,res = null){
       await Model.deleteOne({ _id :query['id']},err => {
           if(err) throw err
       })
       res.status(204).send()

    }

    async find(query,res = null){
        let docs = await Model.find(query)

        res.json(docs)
    }
}

module.exports = new ControllerUser



const apiGit = require('../services/serviceGit');

const axios = require('axios');

const _ = require('lodash')


module.exports = async function get(req, res, next){
    
    let repoDefault = [];
    let face = []

    try {
        
        //let { name } = req.params
        let { data } = await apiGit.get('/users/john2507',{

            Authorizathion: "token d88b002b8e05cd582add1fb5fac730b1cafd3aa1"

        })

        let { data: repos } = await apiGit.get(`/users/john2507/repos`)

        
        const apiFace = await axios.get(`https://graph.facebook.com/v5.0/me?fields=name%2Clast_name%2Caddress%2Cgender%2Cbirthday%2Cemail&access_token=EAAIlDuHv2RsBAFU1x6Pa97ZCgBLprTrTvL1IQ4nZBzISpGPl2rZCJcZA1dmBZCA4YrhMYeQwZCORLd2u5NSdZA43xJhRZBf3CXK2bl9cQ4Q3cgodVAQpUJ318OHbJtm6AN7NrGH6TV2GQY6PvNDBLwVUiQLpBGMOsxdRl4e7VMeqy8mR9Kml6Pj5ZCWwWy54BHO1uhdLhegVZApCSmHRJEicGzrtm2PyigHUbkrVOj0xnQHAZDZD`);

        const { name, last_name, address,gender, birthday, email} = apiFace.data;
       
        const profile = {
            name,
            last_name,
            address,
            gender,
            birthday,
            email,
          };
    
        repos.map(r => {
            repoDefault.push({
                size: r.size,
                name: r.name,
                url: r.url,
            })
        })
        
        repoDefault.sort((a, b) => {
            return b.size - a.size
        })

        const repoArr = _.chunk(repoDefault, 3)


        return res.json({ facebook_profile:[profile],
            github_profile: {
            name: data.name,
            url: data.url,
            bio: data.bio,
            company: data.company,
            repositorios: [...repoArr[0]],
            
        }})


    } catch (error) {
        console.log(error)
        res.send({haha:"Erro"})
    }
}
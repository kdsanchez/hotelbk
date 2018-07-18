/**
 * TablacontactoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    get: function(req,res){
        Tablacontacto.find()
        .then(function(clientes){
            if(!clientes || clientes.length == 0){
                return res.send({
                    'success': false,
                    'message': 'No records found'
                })
            }

            return res.send({
                'success': true,
                'message': 'Records fetched',
                'data': clientes
            })
        })

        .catch(function(err){

            sails.log.debug(err)

            return res.send({
                'success': false,
                'message': 'Unable to fetch records',

            })
        })
    },
    destroy: function (req,res) {
		var id = req.param('id');
		if (!id) return res.send("No id specified.",500);

		Tablacontacto.find(id, function foundContacto(err, user) {
			if (err) return res.send(err,500);
			if (!user) return res.send("No user with that idid exists.",404);

			Tablacontacto.destroy(id, function contactoDestroyed(err) {
				if (err) return res.send(err,500);
				return res.redirect("/");
			});

		})
	},
  create: function(req,res) {
  	var params = _.extend(req.query || {}, req.params || {}, req.body || {});

  	Tablacontacto.create(params, function userCreated (err, createdContacto) {

  		if (err) return res.send(err,500);

  		//res.redirect('/user/show/'+ createdUser.id);
  		res.redirect('/'+ createdContacto.id);
  	});
  },
  edit: function (req,res) {
    var id = req.param('id');

    if (!id) return res.send("No id specified.",500);

    User.find(id, function userFound (err,user){
      if (err) return res.send(err,500);
      if (!user) return res.send("Contacto "+id+" not found.",404);

      /*res.view({
        user: user
      })*/
      res.redirect("/");
    });
  }
};

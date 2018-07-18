/**
* Tablacontacto.js
*
* @description :: A model definition.  Represents a database table/collection/etc.
* @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
*/

module.exports = {

  tableName: 'clientes',

  attributes: {
    nombre: {
      type: 'string'
    },
    apaterno: {
      type : 'string'
    },
    amaterno: {
      type : 'string'
    },
    tipo_documento: {
      type : 'string'
    },
    num_documento: {
      type : 'string'
    },
    num_documento: {
      type : 'string'
    },
    direccion: {
      type : 'string'
    },
    telefono: {
      type : 'number'
    },
    email: {
      type : 'string'
    },

  },
  conection: 'hotel'
};

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Solicitation extends Model {
    static associate(models) {
      Solicitation.belongsTo(models.Equipment, { foreignKey: 'equipmentId' });
      Solicitation.belongsTo(models.Institution, { foreignKey: 'institutionId' });
      Solicitation.belongsTo(models.User, { foreignKey: 'userId' });
      Solicitation.belongsTo(models.Department, { foreignKey: 'departmentId'});
      Solicitation.belongsTo(models.Rotation,  {foreignKey: 'rotationId'});
      Solicitation.hasMany(models.Booking, { foreignKey: 'solicitationId' });
    }
  }
  Solicitation.init({
    code: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    course: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subject: {
        type: DataTypes.STRING,
        allowNull: false
    },
    period: {
        type: DataTypes.STRING,
        allowNull: false
    },
    modality: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn:[['Estágio', 'Visita Técnica', 'Aula Prática', 'Ação de Extensão']],
        },
    },
    shift: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['manhã','tarde','noite']],
        },
    },
    relation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    weekdays: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    preceptorName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    councilRegistration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    equipmentId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    institutionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          isIn: [['EM ANDAMENTO','DEFERIDO','INDEFERIDO','CANCELADO']],
      },
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rotationId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Solicitation',
  });
  return Solicitation;
};
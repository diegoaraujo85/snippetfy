module.exports = {
  up: (queryInterface, DataTypes) => {
    queryInterface.createTable('Categories', {
      id: {
        allowNull:false,
        autoIncrement: true,
        primaryKey: true,        
        type: DataTypes.INTEGER,
      },
      USerId:{
        type: DataTypes.INTEGER,
        references: {model :'Users', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        allowNull: false,
      },
      title:{
        allowNull: false,
        type: DataTypes.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: (queryInterface) => {
    queryInterface.dropTable('Categories');
  }
};

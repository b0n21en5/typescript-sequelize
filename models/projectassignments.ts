"use strict";
import { Model } from "sequelize";

interface ProjectAssignmentAttributes {
  UserId: string;
  ProjectId: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class ProjectAssignment
    extends Model<ProjectAssignmentAttributes>
    implements ProjectAssignmentAttributes
  {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    UserId!: string;
    ProjectId!: number;
    static associate(models: any) {
      // define association here
    }
  }
  ProjectAssignment.init(
    {
      UserId: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "User",
          key: "id",
        },
      },
      ProjectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Project",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "ProjectAssignments",
    }
  );
  return ProjectAssignment;
};

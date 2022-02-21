const { UsersModelSequelize } = require('./users.model');
const { PostsModelSequelize } = require('./posts.model');
const { TagsModelSequelize } = require('./tags.model');
const { PostTagModelSequelize } = require('./posttag.model');
const { AnswersModelSequelize } = require('./answers.model');
const { CommentsModelSequelize } = require('./comments.model');

UsersModelSequelize.hasMany(PostsModelSequelize, {
  foreignKey: { name: 'user_id', allowNull: false },
});
PostsModelSequelize.belongsTo(UsersModelSequelize);

UsersModelSequelize.hasMany(CommentsModelSequelize, {
  foreignKey: { name: 'user_id', allowNull: false },
});
CommentsModelSequelize.belongsTo(UsersModelSequelize);

UsersModelSequelize.hasMany(AnswersModelSequelize, {
  foreignKey: { name: 'user_id', allowNull: false },
});
AnswersModelSequelize.belongsTo(UsersModelSequelize);

PostsModelSequelize.hasMany(CommentsModelSequelize, {
  foreignKey: { name: 'post_id', allowNull: false },
});
CommentsModelSequelize.belongsTo(PostsModelSequelize);

PostsModelSequelize.hasMany(AnswersModelSequelize, {
  foreignKey: { name: 'post_id', allowNull: false },
});
AnswersModelSequelize.belongsTo(PostsModelSequelize);

PostsModelSequelize.belongsToMany(TagsModelSequelize, { through: PostTagModelSequelize, foreignKey: { name: 'post_id', allowNull: false } });
TagsModelSequelize.belongsToMany(PostsModelSequelize, { through: PostTagModelSequelize, foreignKey: { name: 'tag_id', allowNull: false } });

module.exports = {
  UsersModelSequelize,
  PostsModelSequelize,
  TagsModelSequelize,
  PostTagModelSequelize,
  AnswersModelSequelize,
  CommentsModelSequelize,
};

const { User, bookSchema } = require('../models');
const { signToken, authMiddleware, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find({}).populate('savedBooks');
    },
    user: async (parent, { email }) => {
      return User.findOne({ email }).populate('savedBooks');
    },
  },
  Mutation: {
    AddUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    saveBook: async (parent, { bookId, authors, description, image, link, title, }, context) => {
      if (context.user) {
        return User.findOneAndUpdate(
          {
            email: context.user.email
          },
          {
            $addToSet: {
              savedBooks: { bookId, authors, description, image, link, title, },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },
  },
};

module.exports = resolvers;

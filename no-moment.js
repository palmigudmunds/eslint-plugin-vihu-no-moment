module.exports = {
  meta: {
    docs: {
      description: "disallow the use of the moment library",
      category: "Best Practices",
      recommended: true,
    },
    messages: {
      noMoment: "Do not use the 'moment' library",
    },
  },
  create: function (context) {
    return {
      ImportDeclaration(node) {
        if (node.source.value === "moment") {
          context.report({
            node,
            messageId: "noMoment",
          });
        }
      },
    };
  },
};

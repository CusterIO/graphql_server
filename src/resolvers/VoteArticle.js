function article(parent, args, context) {
  return context.prisma.voteArticle({ id: parent.id }).article()
}

function user(parent, args, context) {
  return context.prisma.voteArticle({ id: parent.id }).user()
}

module.exports = {
  article,
  user
}

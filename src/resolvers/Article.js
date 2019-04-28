function postedBy (parent, args, context) {
  return context.prisma.article({ id: parent.id }).postedBy()
}

function votes (parent, args, context) {
  return context.prisma.article({ id: parent.id }).votes()
}

module.exports = {
  postedBy,
  votes
}

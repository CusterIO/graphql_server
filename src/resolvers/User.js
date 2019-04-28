function links(parent, args, context) {
  return context.prisma.user({ id: parent.id }).links()
}

function articles (parent, args, context) {
  return context.prisma.user({ id: parent.id }).articles()
}

module.exports = {
  links,
  articles
}

function link(parent, args, context) {
  return context.prisma.vote({ id: parent.id }).link()
}

function article(parent, args, context) {
  return context.prisma.vote({ id: parent.id }).article()
}

function user(parent, args, context) {
  return context.prisma.vote({ id: parent.id }).user()
}

module.exports = {
  link,
  article,
  user
}

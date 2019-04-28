async function feedLinks (parent, args, context, info) {
  const where = args.filter ? {
    OR: [
      { description_contains: args.filter },
      { url_contains: args.filter },
    ],
  } : {}

  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  })
  
  const count = await context.prisma
    .linksConnection({
      where
    })
    .aggregate()
    .count()

  return {
    links,
    count
  }
}

async function feedArticles (parent, args, context, info) {
  const where = args.filter ? {
    OR: [
      { description_contains: args.filter },
      { url_contains: args.filter },
      { title_contains: args.filter },
      { author_contains: args.filter },
      { topic_contains: args.filter },
    ],
  } : {}

  const articles = await context.prisma.articles({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy
  })
  
  const count = await context.prisma
    .articlesConnection({
      where
    })
    .aggregate()
    .count()

  return {
    articles,
    count
  }
}

module.exports = {
  feedLinks,
  feedArticles
}

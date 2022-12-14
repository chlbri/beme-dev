import { isDefined } from 'lib/helpers/strings';
import Image from 'next/image';
import { FC } from 'react';
import { Article, NewsResponse } from '~entities/objects';

const ArticleView: FC<Article> = ({
  image,
  title,
  description,
  source,
  published_at,
}) => {
  const isImageDefined = isDefined(image);
  const isDescriptionDefined = isDefined(description);
  return (
    <article className="bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-sm hover:scale-105 hover:shadow-lg hover:bg-slate-200 transition-all duration-200 ease-out">
      {isImageDefined && (
        <Image
          src={image}
          alt="article image"
          className="h-56 w-full object-cover rounded-t-lg shadow-sm"
        />
      )}
      <div className="flex flex-1 flex-col">
        <div className="flex-1 felx flex-col p-5">
          <h2 className="font-serif font-bold">{title}</h2>
          {isDescriptionDefined && (
            <section className="flex-1 mt-2">
              <p className="text-xs line-clamp-3">{description}</p>
            </section>
          )}

          <footer>
            <p>{source}</p>
            <p>{published_at}</p>
          </footer>
        </div>
      </div>
    </article>
  );
};

export const NewsList: FC<Pick<NewsResponse, 'news'>> = ({ news }) => {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols- gap-10">
      {news.map(article => (
        <ArticleView key={article.url} {...article} />
      ))}
    </main>
  );
};

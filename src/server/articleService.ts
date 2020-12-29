import fs from 'fs';
import path from 'path';

import { parseMarkdown } from '../markdownParser';
import { Article } from '../models';

export class ArticleService {
  private static ARTICLES_DIR = 'content/articles';

  getMany(): Article[] {
    const articles = fs
      .readdirSync(ArticleService.ARTICLES_DIR)
      .map((filename) => {
        const { frontmatters } = parseMarkdown(
          fs.readFileSync(
            path.join(ArticleService.ARTICLES_DIR, filename),
            'utf-8'
          ),
          true
        );
        return {
          id: path.basename(filename, '.md').substr(11),
          title: frontmatters.title,
          description: frontmatters.description,
          content: '',
          tags: [],
        };
      })
      .sort((a, b) => {
        return Number(a.id > b.id);
      });

    return articles;
  }

  getOne(id: string): Article {
    const filename = fs
      .readdirSync(ArticleService.ARTICLES_DIR)
      .find((filename) => path.basename(filename, '.md').substr(11) === id);
    if (filename === undefined) {
      throw new Error(`file not found: ${id}`);
    }
    const { frontmatters, content } = parseMarkdown(
      fs.readFileSync(path.join(ArticleService.ARTICLES_DIR, filename), 'utf-8')
    );
    return {
      id: id,
      title: frontmatters.title,
      description: frontmatters.description,
      content: content,
      tags: [],
    };
  }
}

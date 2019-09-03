import { includes, orderBy } from 'lodash'

export class SimilarArticlesFactory {

    constructor (articles, currentArticlePath) {
        this.articles = articles.filter((aArticle) => aArticle.node.frontmatter.path !== currentArticlePath);
        this.currentArticlePath = currentArticlePath;

        this.maxArticles = 2;
        this.tags = []
    }

    setMaxArticles (m) {
        this.maxArticles = m;
        return this;
    }

    setTags (tagsArray) {
        this.tags = tagsArray;
        return this;
    }

    getArticles () {
        const {tags, articles, maxArticles } = this;

        const identityMap = {};

        if (!!tags === false || tags.length === 0) {
            console.error('SimilarArticlesFactory: Tags not provided, use setTags().')
            return [];
          }

        function getPath (article) {
            return article.node.frontmatter.path;
        }

        function addToMap(article) {
            const path = getPath(article);
            if(!identityMap.hasOwnProperty(path)){
                identityMap[path] = {
                    article: article,
                    points: 0
                }
            }
        } 
        function addTagsPoints (article, tags) {
            const tagPoint = 1;
            const path = getPath(article);
            article.node.frontmatter.tags.forEach((aTag) => {
                if (includes(tags, aTag)) {
                    identityMap[path].points += tagPoint;
                }
            });
            
        }

        function getIdentityMapAsArray () {
            
            return Object.keys(identityMap).map((path) => identityMap[path]);
        }
        
        for (let article of articles) {
            addToMap(article);
            addTagsPoints(article, tags);
        }

        const arrayIdentityMap = getIdentityMapAsArray();
        
        const similarArticles = orderBy(
            arrayIdentityMap, ['points'], ['desc']
        );
        

        return similarArticles.splice(0, maxArticles);
    }
}
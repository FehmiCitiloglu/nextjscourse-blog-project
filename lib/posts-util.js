import matter from 'gray-matter';
import fs from 'fs'
import path from 'path';


const postsDirectory = path.join(process.cwd(), 'posts');


export function getPostsFiles(){
    return fs.readdirSync(postsDirectory);
}


export function getPostsData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, '') // removes the file extension
    console.log(postSlug)
    const filePath = path.join(postsDirectory, `${postSlug}.md`)
    const fileContent = fs.readFileSync(filePath, 'utf-8')
    const {data, content} = matter(fileContent);

    console.log("postSlug", postSlug)
    const postData = {
        slug: postSlug,
        ...data,
        content,
    }
    return postData
}

export function getAllPosts(){
    const postsFiles =  getPostsFiles()
    const allPosts = postsFiles.map(postFile => {
        return getPostsData(postFile);
    })
    const sortedArray = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)
    return sortedArray;
}


export function getFeaturedPosts(){
    const allPosts = getAllPosts()
    const featuredPosts = allPosts.filter((post) => post.isFeatured )

    return featuredPosts;
}


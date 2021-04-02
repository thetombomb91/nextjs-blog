import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {removeMdFromFileName, readMarkdownFileAsString, sortPostsByDate} from './utils';

const postsDirectory = path.join(process.cwd(), 'posts')

export function getPostsByCategory(category) {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        const id = removeMdFromFileName(fileName)

        const fileContents = readMarkdownFileAsString(fileName, postsDirectory)

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })

    let postsInCategory = null;
    if (category === "all") {
        postsInCategory = removeUnlistedPosts(postsInCategory, allPostsData)        
    } else {
        postsInCategory = filterPostsToCategory(postsInCategory, allPostsData, category)
    }

    return sortPostsByDate(postsInCategory)
}

function filterPostsToCategory(postsInCategory, allPostsData, category) {
    postsInCategory = allPostsData.filter(post => {
        if (post.categories) {
            return post.categories.includes(category)
        }
        return false
    })
    return postsInCategory
}

function removeUnlistedPosts(postsInCategory, allPostsData) {
    postsInCategory = allPostsData.filter(post => {
        if (post.categories) {
            if (post.categories.includes('unlisted')) {
                return false
            } else {
                return true
            }
        }
        return false
    })
    return postsInCategory
}

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDirectory)

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getPostData(id) {
    const fullPath = path.join(postsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const postMetaDataSection = matter(fileContents)

    return {
        id,
        markdown: postMetaDataSection.content,
        ...postMetaDataSection.data
    }
}
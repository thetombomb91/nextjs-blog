import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {removeMdFromFileName, readMarkdownFileAsString, sortPostsByDate} from './utils';

const eventsDirectory = path.join(process.cwd(), 'events')

export function getAllEvents() {
    const fileNames = fs.readdirSync(eventsDirectory)
    const allPostsData = fileNames.map(fileName => {
        const fileNameWithoutFileType = removeMdFromFileName(fileName)

        const fileContents = readMarkdownFileAsString(fileName, eventsDirectory)

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        return {
            id: fileNameWithoutFileType,
            ...matterResult.data
        }
    })

    return sortPostsByDate(allPostsData)
}

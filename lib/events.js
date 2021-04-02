import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const eventsDirectory = path.join(process.cwd(), 'events')

export function getAllEvents() {
    const fileNames = fs.readdirSync(eventsDirectory)
    const allPostsData = fileNames.map(fileName => {
        const fileNameWithoutFileType = removeMdFromFileName(fileName)

        const fileContents = readMarkdownFileAsString(fileName)

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        return {
            id: fileNameWithoutFileType,
            ...matterResult.data
        }
    })

    return sortPostsByDate(allPostsData)
}

function sortPostsByDate(events) {
    return events.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

function removeMdFromFileName(fileName) {
    return fileName.replace(/\.md$/, '')
}

function readMarkdownFileAsString(fileName) {
    const fullPath = path.join(eventsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    return fileContents
}
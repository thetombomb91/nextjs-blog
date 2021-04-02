import path from 'path'
import fs from 'fs'

export function sortPostsByDate(events) {
    return events.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}

export function removeMdFromFileName(fileName) {
    return fileName.replace(/\.md$/, '')
}

export function readMarkdownFileAsString(fileName, directory) {
    const fullPath = path.join(directory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    return fileContents
}
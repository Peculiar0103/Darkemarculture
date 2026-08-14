import fs from 'fs'
import path from 'path'

const sourceDir = 'C:\\Users\\OLUWAKEMI\\Desktop\\WEB DESIGN\\DARKEMAR CULTURE\\IMAGE FOLDER'
const destDir = path.join(process.cwd(), 'public', 'images', 'products')

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
}

async function copyImages() {
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true })
  }

  const items = fs.readdirSync(sourceDir)
  
  for (const item of items) {
    const itemPath = path.join(sourceDir, item)
    if (fs.statSync(itemPath).isDirectory()) {
      const productSlug = slugify(item)
      const productDestDir = path.join(destDir, productSlug)
      
      if (!fs.existsSync(productDestDir)) {
        fs.mkdirSync(productDestDir, { recursive: true })
      }

      const files = fs.readdirSync(itemPath)
      let index = 1
      for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
          const filePath = path.join(itemPath, file)
          const ext = path.extname(file)
          const newFileName = `image-${index.toString().padStart(2, '0')}${ext}`
          const destFilePath = path.join(productDestDir, newFileName)
          
          console.log(`Copying: ${productSlug} -> ${newFileName}`)
          
          try {
            fs.copyFileSync(filePath, destFilePath)
          } catch (e) {
            console.error(`Error copying ${filePath}:`, e)
          }
          index++
        }
      }
    }
  }
  console.log('Finished copying all images.')
}

copyImages()

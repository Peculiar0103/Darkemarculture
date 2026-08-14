import fs from 'fs'
import path from 'path'
import { Jimp } from 'jimp'

const sourceDir = 'C:\\Users\\OLUWAKEMI\\Desktop\\WEB DESIGN\\DARKEMAR CULTURE\\IMAGE FOLDER'
const destDir = path.join(process.cwd(), 'public', 'images', 'products')

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
}

async function processImages() {
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
          
          console.log(`Processing: ${productSlug} -> ${newFileName}`)
          
          try {
            const image = await Jimp.read(filePath)
            
            // Safe Enhancements
            image
              .normalize() // Auto white balance / stretch contrast
              .brightness(0.05) // Slight brightness boost
              .contrast(0.05) // Slight contrast boost
              
            await image.write(destFilePath)
            console.log(`Saved: ${destFilePath}`)
          } catch (e) {
            console.error(`Error processing ${filePath}:`, e)
          }
          index++
        }
      }
    }
  }
  console.log('Finished processing all images.')
}

processImages()
